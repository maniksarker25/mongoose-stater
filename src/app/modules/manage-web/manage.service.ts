/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Request } from 'express';

import {
  AboutUs,
  ContactUs,
  FAQ,
  Partner,
  PrivacyPolicy,
  Slider,
  TermsConditions,
} from './manage.model';
import AppError from '../../error/appError';

//! Privacy and policy
const addPrivacyPolicy = async (payload: any) => {
  const checkIsExist = await PrivacyPolicy.findOne();
  if (checkIsExist) {
    await PrivacyPolicy.findOneAndUpdate({}, payload, {
      new: true,

      runValidators: true,
    });
  } else {
    return await PrivacyPolicy.create(payload);
  }
};
const getPrivacyPolicy = async () => {
  return await PrivacyPolicy.findOne();
};
const editPrivacyPolicy = async (
  id: string,
  payload: { description: string },
) => {
  const isExist = await PrivacyPolicy.findById(id);
  if (!isExist) {
    throw new AppError(404, 'Privacy Policy not found');
  }
  const result = await PrivacyPolicy.findOneAndUpdate({ _id: id }, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};
const deletePrivacyPolicy = async (id: string) => {
  const isExist = await PrivacyPolicy.findById(id);
  if (!isExist) {
    throw new AppError(404, 'Privacy Policy not found');
  }
  return await PrivacyPolicy.findByIdAndDelete(id);
};
//! Partner
const addPartner = async (payload: any) => {
  const checkIsExist = await Partner.findOne();
  if (checkIsExist) {
    await Partner.findOneAndUpdate({}, payload, {
      new: true,

      runValidators: true,
    });
  } else {
    return await Partner.create(payload);
  }
};
const getPartner = async () => {
  return await Partner.findOne();
};
const editPartner = async (
  id: string,
  payload: { description: string },
) => {
  const isExist = await Partner.findById(id);
  if (!isExist) {
    throw new AppError(404, 'Partner not found');
  }
  const result = await Partner.findOneAndUpdate({ _id: id }, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};
const deletePartner = async (id: string) => {
  const isExist = await Partner.findById(id);
  if (!isExist) {
    throw new AppError(404, 'Partner not found');
  }
  return await Partner.findByIdAndDelete(id);
};
//! About us
const addAboutUs = async (payload: any) => {
  const checkIsExist = await AboutUs.findOne();
  if (checkIsExist) {
    await AboutUs.findOneAndUpdate({}, payload, {
      new: true,

      runValidators: true,
    });
  } else {
    return await AboutUs.create(payload);
  }
};
const getAboutUs = async () => {
  return await AboutUs.findOne();
};
const editAboutUs = async (id: string, payload: { description: string }) => {
  const isExist = await AboutUs.findById(id);
  if (!isExist) {
    throw new AppError(404, 'AboutUs not found');
  }
  const result = await AboutUs.findOneAndUpdate({ _id: id }, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};
const deleteAboutUs = async (id: string) => {
  const isExist = await AboutUs.findById(id);
  if (!isExist) {
    throw new AppError(404, 'AboutUs not found');
  }
  return await AboutUs.findByIdAndDelete(id);
};
//! Terms Conditions
const addTermsConditions = async (payload: any) => {
  const checkIsExist = await TermsConditions.findOne();
  if (checkIsExist) {
    await TermsConditions.findOneAndUpdate({}, payload, {
      new: true,

      runValidators: true,
    });
  } else {
    return await TermsConditions.create(payload);
  }
};
const getTermsConditions = async () => {
  return await TermsConditions.findOne();
};
const editTermsConditions = async (
  id: string,
  payload: { description: string },
) => {
  const isExist = await TermsConditions.findById(id);
  if (!isExist) {
    throw new AppError(404, 'TermsConditions not found');
  }
  const result = await TermsConditions.findOneAndUpdate({ _id: id }, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};
const deleteTermsConditions = async (id: string) => {
  const isExist = await TermsConditions.findById(id);
  if (!isExist) {
    throw new AppError(404, 'TermsConditions not found');
  }
  return await TermsConditions.findByIdAndDelete(id);
};

//! Contact Us
const addContactUs = async (payload: any) => {
  return await ContactUs.create(payload);
};
const getContactUs = async () => {
  return await ContactUs.findOne();
};
const editContactUs = async (id: string, payload: { description: string }) => {
  const isExist = await ContactUs.findById(id);
  if (!isExist) {
    throw new AppError(404, 'ContactUs not found');
  }
  const result = await ContactUs.findOneAndUpdate({ _id: id }, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};
const deleteContactUs = async (id: string) => {
  const isExist = await ContactUs.findById(id);
  if (!isExist) {
    throw new AppError(404, 'ContactUs not found');
  }
  return await ContactUs.findByIdAndDelete(id);
};
//! FAQ
const addFAQ = async (payload: any) => {
  return await FAQ.create(payload);
};
const getFAQ = async () => {
  return await FAQ.find({});
};
const editFAQ = async (
  id: string,
  payload: { question: string; answer: string },
) => {
  const isExist = await FAQ.findById(id);
  if (!isExist) {
    throw new AppError(404, 'Faq not found');
  }
  const result = await FAQ.findOneAndUpdate({ _id: id }, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};
const deleteFAQ = async (id: string) => {
  const isExist = await FAQ.findById(id);
  if (!isExist) {
    throw new AppError(404, 'Faq not found');
  }
  return await FAQ.findByIdAndDelete(id);
};
//! Slider
const addSlider = async (req: Request) => {
  const { files, body } = req;

  let image = undefined;
  //@ts-ignore
  if (files && files.image) {
    //@ts-ignore
    image = `/images/image/${files.image[0].filename}`;
  }

  const result = await Slider.create({
    image,
    ...body,
  });
  return result;
};
const getSlider = async () => {
  return await Slider.find({});
};
const editSlider = async (req: Request) => {
  const { files, body } = req;
  const { id } = req.params;
  // console.log(body);
  let image = undefined;
  //@ts-ignore
  if (files && files.image) {
    //@ts-ignore
    image = `/images/image/${files.image[0].filename}`;
  }

  const isExist = await Slider.findById(id);
  if (!isExist) {
    throw new AppError(404, 'Slider program not found');
  }
  const { ...updateData } = body;
  // console.log(updateData);
  const result = await Slider.findOneAndUpdate(
    { _id: id },
    {
      image,
      ...updateData,
    },
    {
      new: true,
      runValidators: true,
    },
  );
  return result;
};
const deleteSlider = async (id: string) => {
  const isExist = await Slider.findById(id);
  if (!isExist) {
    throw new AppError(404, 'Slider not found');
  }
  return await Slider.findByIdAndDelete(id);
};

export const ManageService = {
  addPrivacyPolicy,
  addAboutUs,
  addTermsConditions,
  addContactUs,
  getPrivacyPolicy,
  getAboutUs,
  getTermsConditions,
  getContactUs,
  editPrivacyPolicy,
  editAboutUs,
  editTermsConditions,
  editContactUs,
  deleteAboutUs,
  deleteContactUs,
  deletePrivacyPolicy,
  deleteTermsConditions,
  addFAQ,
  getFAQ,
  editFAQ,
  deleteFAQ,
  addSlider,
  getSlider,
  deleteSlider,
  editSlider,
  addPartner,
  editPartner,
  getPartner,
  deletePartner
};
