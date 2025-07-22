"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumMinorCredits = exports.sumMajorCredits = void 0;
// Function to sum MajorCredits
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: {},
    };
}
exports.sumMajorCredits = sumMajorCredits;
// Function to sum MinorCredits
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: {},
    };
}
exports.sumMinorCredits = sumMinorCredits;
