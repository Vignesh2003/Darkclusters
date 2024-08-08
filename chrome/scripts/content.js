// content.js

// Existing content...

// Provided detection and cost calculation functions
function detectFakeReviews() {
    // Regular expression patterns to detect fake reviews
    const fakeReviewPatterns = [
        /(?:fake|artificial|bogus|phony|fraudulent)\s*(?:review|rating)/i,
        /(?:paid|sponsored)\s*(?:review|rating)/i,
        /(?:manipulated|fabricated)\s*(?:review|rating)/i
        // Add more patterns as needed
    ];

    // Check if any of the patterns match the page content
    return fakeReviewPatterns.some(pattern => pattern.test(document.body.textContent));
}

function detectScarcity() {
    // Regular expression patterns to detect scarcity tactics
    const scarcityPatterns = [
        /(?:only\s+\d+\s+left)/i,
        /(?:limited\s+stock)/i,
        /(?:hurry|act\s+now|don't\s+miss\s+out)/i
        // Add more patterns as needed
    ];

    // Check if any of the patterns match the page content
    return scarcityPatterns.some(pattern => pattern.test(document.body.textContent));
}

function detectHiddenCosts() {
    // Regular expression patterns to detect hidden costs
    const hiddenCostsPatterns = [
        /(?:additional|extra|hidden)\s+(?:fees|charges)/i,
        /(?:shipping|handling)\s+(?:not\s+included)/i,
        /(?:taxes|duties)\s+(?:may\s+apply)/i
        // Add more patterns as needed
    ];

    // Check if any of the patterns match the page content
    return hiddenCostsPatterns.some(pattern => pattern.test(document.body.textContent));
}

function detectFakeUrgency() {
    // Regular expression patterns to detect fake urgency
    const fakeUrgencyPatterns = [
        /(?:limited\s+time\s+offer)/i,
        /(?:act\s+now|don't\s+delay)/i,
        /(?:today\s+only)/i
        // Add more patterns as needed
    ];

    // Check if any of the patterns match the page content
    return fakeUrgencyPatterns.some(pattern => pattern.test(document.body.textContent));
}

function calculateFlawsCount() {
    let flawsCount = 0;

    if (detectFakeReviews()) {
        flawsCount++;
    }

    if (detectScarcity()) {
        flawsCount++;
    }

    if (detectHiddenCosts()) {
        flawsCount++;
    }

    if (detectFakeUrgency()) {
        flawsCount++;
    }

    return flawsCount;
}

function displayCost(flawsCount) {
    const baseCost = 100;
    const costMultiplierPerFlaw = 10;

    const totalCost = baseCost + (flawsCount * costMultiplierPerFlaw);

    alert(`Total Cost: $${totalCost}`);
}

function main() {
    const flawsCount = calculateFlawsCount();
    displayCost(flawsCount);
}

document.addEventListener("DOMContentLoaded", main);
