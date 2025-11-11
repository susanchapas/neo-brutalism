// Use CommonJS require here so Jest can load the setup file without ESM complications
// Newer versions of @testing-library/jest-dom recommend importing the package root
require('@testing-library/jest-dom')
// Add jest-axe matchers
require('jest-axe/extend-expect')
