import { launchCamera, launchImageLibrary, Asset } from 'react-native-image-picker';
import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';

export const pickCameraPicture = async () => {
  try {
    const result = await launchCamera({ mediaType: 'photo', saveToPhotos: true });

    return result?.assets && result?.assets[0];
  } catch (err) {
    console.log('Pick camera picture error:', err);
  }
};

export const pickLibraryPictures = async () => {
  try {
    const result = await launchImageLibrary({ mediaType: 'photo', selectionLimit: 10 });

    return result?.assets;
  } catch (err) {
    console.log('Pick library picture error:', err);
  }
};

// export const createPDF = async (imagePath: string, imageName: string) => {
//   const pdfPage = await PDFPage.create().drawImage(imagePath, 'jpg', {
//     x: 5,
//     y: 125,
//     width: 200,
//     height: 100,
//   });
//   const docsDir = await PDFLib.getDocumentsDirectory();
//   const pdfPath = `${docsDir}/${imageName}.pdf`;
//   const createdPdfPath = await PDFDocument.create(pdfPath).addPages([pdfPage]).write();

//   return createdPdfPath;
// };
