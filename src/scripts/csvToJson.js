#!/usr/bin/env node

/**
 * This script converts CSV data to JSON files for the Singapore Business Directory.
 * It should be run when new CSV data is available to update the directory.
 * 
 * Usage:
 * node csvToJson.js <input-csv-file> <output-json-file>
 * 
 * Example:
 * node csvToJson.js data/companies.csv src/data/companies.json
 */

import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse';

// Check if the required arguments are provided
if (process.argv.length < 4) {
  console.error('Usage: node csvToJson.js <input-csv-file> <output-json-file>');
  process.exit(1);
}

const inputFile = process.argv[2];
const outputFile = process.argv[3];

// Ensure the input file exists
if (!fs.existsSync(inputFile)) {
  console.error(`Input file ${inputFile} does not exist`);
  process.exit(1);
}

// Ensure the output directory exists
const outputDir = path.dirname(outputFile);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Create a slug from a company name
function createSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Read the CSV file and convert to JSON
const parser = parse({
  columns: true,
  skip_empty_lines: true,
  trim: true
});

// Process the CSV data
const records = [];

fs.createReadStream(inputFile)
  .pipe(parser)
  .on('data', (record) => {
    // For companies, create a slug if it doesn't exist
    if (!record.slug && record.name) {
      record.slug = createSlug(record.name);
    }
    
    // Convert formerNames from string to array if needed
    if (record.formerNames && typeof record.formerNames === 'string') {
      record.formerNames = record.formerNames.split('|').filter(Boolean);
    } else if (!record.formerNames) {
      record.formerNames = [];
    }
    
    // Parse industry information if available
    if (record.primaryIndustryCode || record.primaryIndustryDescription) {
      record.primaryIndustry = {
        code: record.primaryIndustryCode || 'na',
        description: record.primaryIndustryDescription || 'Not available',
        activity: record.primaryIndustryActivity || 'na'
      };
      
      // Delete the original properties
      delete record.primaryIndustryCode;
      delete record.primaryIndustryDescription;
      delete record.primaryIndustryActivity;
    } else if (!record.primaryIndustry) {
      record.primaryIndustry = {
        code: 'na',
        description: 'Not available',
        activity: 'na'
      };
    }
    
    // Do the same for secondary industry
    if (record.secondaryIndustryCode || record.secondaryIndustryDescription) {
      record.secondaryIndustry = {
        code: record.secondaryIndustryCode || 'na',
        description: record.secondaryIndustryDescription || 'Not available',
        activity: record.secondaryIndustryActivity || 'na'
      };
      
      // Delete the original properties
      delete record.secondaryIndustryCode;
      delete record.secondaryIndustryDescription;
      delete record.secondaryIndustryActivity;
    } else if (!record.secondaryIndustry) {
      record.secondaryIndustry = {
        code: 'na',
        description: 'Not available',
        activity: 'na'
      };
    }
    
    // Convert auditFirms from string to array if needed
    if (record.auditFirms && typeof record.auditFirms === 'string') {
      record.auditFirms = record.auditFirms.split('|').filter(Boolean);
    } else if (!record.auditFirms) {
      record.auditFirms = [];
    }
    
    records.push(record);
  })
  .on('end', () => {
    // Write the JSON file
    fs.writeFileSync(outputFile, JSON.stringify(records, null, 2));
    console.log(`Converted ${records.length} records from ${inputFile} to ${outputFile}`);
  })
  .on('error', (err) => {
    console.error('Error processing CSV file:', err.message);
    process.exit(1);
  });