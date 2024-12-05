import mongoose, { model } from 'mongoose';

//! Privacy and policy
const privacySchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);
//! About US
const aboutUsSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);
//! Terms Conditions
const termsAndConditionsSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);
const partnerSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);
//!Contact US
const contactUsSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);
//!FAQ
const faqSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);
//!Slider
const sliderSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const PrivacyPolicy = model('PrivacyPolicy', privacySchema);
export const AboutUs = model('AboutUs', aboutUsSchema);
export const TermsConditions = model(
  'TermsConditions',
  termsAndConditionsSchema,
);
export const ContactUs = model('ContactUs', contactUsSchema);
export const FAQ = model('FAQ', faqSchema);
export const Slider = model('Slider', sliderSchema);
export const Partner = model('Partner', partnerSchema);
