import { Request, Response } from 'express';

import { ManageService } from './manage.service';
import catchAsync from '../../utilities/catchasync';
import sendResponse from '../../utilities/sendResponse';

const addAboutUs = catchAsync(async (req: Request, res: Response) => {
  const result = await ManageService.addAboutUs(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'About us create successfully',
    data: result,
  });
});
const addPrivacyPolicy = catchAsync(async (req: Request, res: Response) => {
  const result = await ManageService.addPrivacyPolicy(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Privacy Policy added successfully ',
    data: result,
  });
});
const addPartner = catchAsync(async (req: Request, res: Response) => {
  const result = await ManageService.addPartner(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Partner added successfully ',
    data: result,
  });
});
const addTermsConditions = catchAsync(async (req: Request, res: Response) => {
  const result = await ManageService.addTermsConditions(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Terms and condition added successfully',
    data: result,
  });
});
const addContactUs = catchAsync(async (req: Request, res: Response) => {
  const result = await ManageService.addContactUs(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Contact Us added successfully',
    data: result,
  });
});
const addFAQ = catchAsync(async (req: Request, res: Response) => {
  const result = await ManageService.addFAQ(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'FAQ added successfully',
    data: result,
  });
});
const getPrivacyPolicy = catchAsync(async (req: Request, res: Response) => {
  const result = await ManageService.getPrivacyPolicy();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Privacy Policy retrieved successfully',
    data: result,
  });
});
const getPartner = catchAsync(async (req: Request, res: Response) => {
  const result = await ManageService.getPartner();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Partner retrieved successfully',
    data: result,
  });
});
const getAboutUs = catchAsync(async (req: Request, res: Response) => {
  const result = await ManageService.getAboutUs();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'About Us retrieved successfully',
    data: result,
  });
});
const getTermsConditions = catchAsync(async (req: Request, res: Response) => {
  const result = await ManageService.getTermsConditions();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Terms and Condition retrieved successfully',
    data: result,
  });
});
const getContactUs = catchAsync(async (req: Request, res: Response) => {
  const result = await ManageService.getContactUs();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Contact Us retrieved successfully',
    data: result,
  });
});
const getFAQ = catchAsync(async (req: Request, res: Response) => {
  const result = await ManageService.getFAQ();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'FAQ retrieved successfully',
    data: result,
  });
});
const editPrivacyPolicy = catchAsync(async (req: Request, res: Response) => {
  const result = await ManageService.editPrivacyPolicy(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Privacy policy updated successfully',
    data: result,
  });
});
const editPartner = catchAsync(async (req: Request, res: Response) => {
  const result = await ManageService.editPartner(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Partner updated successfully',
    data: result,
  });
});
const editAboutUs = catchAsync(async (req: Request, res: Response) => {
  const result = await ManageService.editAboutUs(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'About Us updated successfully',
    data: result,
  });
});
const editTermsConditions = catchAsync(async (req: Request, res: Response) => {
  const result = await ManageService.editTermsConditions(
    req.params.id,
    req.body,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Terms and Condition updated successfully',
    data: result,
  });
});
const editContactUs = catchAsync(async (req: Request, res: Response) => {
  const result = await ManageService.editContactUs(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Contact Us updated successfully',
    data: result,
  });
});
const editFAQ = catchAsync(async (req: Request, res: Response) => {
  const result = await ManageService.editFAQ(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'FAQ updated successfully',
    data: result,
  });
});
const deleteAboutUs = catchAsync(async (req: Request, res: Response) => {
  const result = await ManageService.deleteAboutUs(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'About us deleted successfully',
    data: result,
  });
});
const deleteContactUs = catchAsync(async (req: Request, res: Response) => {
  const result = await ManageService.deleteContactUs(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Contact Us deleted successfully',
    data: result,
  });
});
const deletePrivacyPolicy = catchAsync(async (req: Request, res: Response) => {
  const result = await ManageService.deletePrivacyPolicy(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Privacy Policy deleted successfully',
    data: result,
  });
});
const deletePartner = catchAsync(async (req: Request, res: Response) => {
  const result = await ManageService.deletePartner(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Partner deleted successfully',
    data: result,
  });
});
const deleteFAQ = catchAsync(async (req: Request, res: Response) => {
  const result = await ManageService.deleteFAQ(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'FAQ deleted successfully',
    data: result,
  });
});

const deleteSlider = catchAsync(async (req: Request, res: Response) => {
  const result = await ManageService.deleteSlider(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Slider Deleted Successfully',
    data: result,
  });
});
const deleteTermsConditions = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ManageService.deleteTermsConditions(req.params.id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Terms and Condition deleted successfully',
      data: result,
    });
  },
);
const addSlider = catchAsync(async (req: Request, res: Response) => {
  const result = await ManageService.addSlider(req);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Slider added successfully',
    data: result,
  });
});
const editSlider = catchAsync(async (req: Request, res: Response) => {
  const result = await ManageService.editSlider(req);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Slider updated successfully',
    data: result,
  });
});
const getSlider = catchAsync(async (req: Request, res: Response) => {
  const result = await ManageService.getSlider();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Slider retrieved successfully',
    data: result,
  });
});

export const ManageController = {
  addSlider,
  getSlider,
  deleteSlider,
  editSlider,
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
  deleteFAQ,
  editFAQ,
  addPartner,
  getPartner,
  editPartner,
  deletePartner
};
