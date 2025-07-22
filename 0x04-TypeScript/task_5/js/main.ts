// Define a unique type for branding
type MajorBrand = { readonly __brand: unique symbol };
type MinorBrand = { readonly __brand: unique symbol };

// Interfaces using nominal typing
export interface MajorCredits {
  credits: number;
  brand: MajorBrand;
}

export interface MinorCredits {
  credits: number;
  brand: MinorBrand;
}

// Function to sum MajorCredits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: {} as MajorBrand,
  };
}

// Function to sum MinorCredits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: {} as MinorBrand,
  };
}
