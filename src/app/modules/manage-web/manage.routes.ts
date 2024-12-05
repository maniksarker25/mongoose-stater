import express from 'express';
import auth from '../../middlewares/auth';
import { ManageController } from './manage.controller';
import { USER_ROLE } from '../user/user.constant';
import { uploadFile } from '../../helper/fileUploader';

const router = express.Router();

router.post(
  '/add-about-us',
  auth(USER_ROLE.superAdmin),
  ManageController.addAboutUs,
);
router.post('/add-faq', auth(USER_ROLE.superAdmin), ManageController.addFAQ);
router.post(
  '/add-terms-conditions',
  auth(USER_ROLE.superAdmin),
  ManageController.addTermsConditions,
);
router.post(
  '/add-partner',
  auth(USER_ROLE.superAdmin),
  ManageController.addPartner,
);
router.post(
  '/add-contact-us',
  auth(USER_ROLE.superAdmin),
  ManageController.addContactUs,
);
router.post(
  '/add-privacy-policy',
  auth(USER_ROLE.superAdmin),
  ManageController.addPrivacyPolicy,
);
router.post(
  '/add-slider',
  auth(USER_ROLE.superAdmin),
  uploadFile(),
  ManageController.addSlider,
);
router.get(
  '/get-privacy-policy',
  // auth(USER_ROLE.superAdmin),
  ManageController.getPrivacyPolicy,
);
router.get(
  '/get-partner',
  // auth(USER_ROLE.superAdmin),
  ManageController.getPartner,
);
router.get(
  '/get-slider',
  // auth(USER_ROLE.superAdmin),
  ManageController.getSlider,
);
router.get('/get-faq', ManageController.getFAQ);
router.get(
  '/get-about-us',
  // auth(USER_ROLE.superAdmin),
  ManageController.getAboutUs,
);
router.get(
  '/get-terms-conditions',
  // auth(USER_ROLE.superAdmin),
  ManageController.getTermsConditions,
);
router.get(
  '/get-contact-us',
  // auth(USER_ROLE.superAdmin),
  ManageController.getContactUs,
);
router.patch(
  '/edit-privacy-policy/:id',
  auth(USER_ROLE.superAdmin),
  ManageController.editPrivacyPolicy,
);
router.patch(
  '/edit-partner/:id',
  auth(USER_ROLE.superAdmin),
  ManageController.editPartner,
);
router.patch(
  '/edit-slider/:id',
  auth(USER_ROLE.superAdmin),
  uploadFile(),
  ManageController.editSlider,
);
router.patch(
  '/edit-faq/:id',
  auth(USER_ROLE.superAdmin),
  ManageController.editFAQ,
);
router.patch(
  '/edit-about-us/:id',
  auth(USER_ROLE.superAdmin),
  ManageController.editAboutUs,
);
router.patch(
  '/edit-terms-conditions/:id',
  auth(USER_ROLE.superAdmin),
  ManageController.editTermsConditions,
);
router.patch(
  '/edit-contact-us/:id',
  auth(USER_ROLE.superAdmin),
  ManageController.editContactUs,
);
router.delete(
  '/delete-about-us/:id',
  auth(USER_ROLE.superAdmin),
  ManageController.deleteAboutUs,
);
router.delete(
  '/delete-slider/:id',
  auth(USER_ROLE.superAdmin),
  ManageController.deleteSlider,
);
router.delete(
  '/delete-faq/:id',
  auth(USER_ROLE.superAdmin),
  ManageController.deleteFAQ,
);
router.delete(
  '/delete-contact-us/:id',
  auth(USER_ROLE.superAdmin),
  ManageController.deleteContactUs,
);
router.delete(
  '/delete-privacy-policy/:id',
  auth(USER_ROLE.superAdmin),
  ManageController.deletePrivacyPolicy,
);
router.delete(
  '/delete-partner/:id',
  auth(USER_ROLE.superAdmin),
  ManageController.deletePartner,
);
router.delete(
  '/delete-terms-conditions/:id',
  auth(USER_ROLE.superAdmin),
  ManageController.deleteTermsConditions,
);
export const ManageRoutes = router;
