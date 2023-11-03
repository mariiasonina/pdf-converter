import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNFS from 'react-native-fs';
import { FilesToConvertType } from '@src/context/types';

export const convertImageToPDF = async (filesToConvert: FilesToConvertType, fileName: string, padding = 10) => {
  try {
    const imagesContent = filesToConvert.reduce((prev, { uri }) => `${prev}<img src="${uri}"/>`, '');
    const htmlContent = `
      <html>
          <head>
          <style>
            img {
              max-width: 99%;
              height: auto;
              page-break-inside: avoid;
            }
          </style>
        </head>
        <body>
          ${imagesContent}
        </body>
      </html>
    `;

    // const downloadDest = `${RNFS.DocumentDirectoryPath}/${fileName}`;
    // RNFS.downloadFile({
    //   fromUrl: imageUri,
    //   toFile: downloadDest,
    // });

    const options = {
      html: htmlContent,
      fileName: fileName,
      directory: RNFS.DocumentDirectoryPath,
      padding,
    };

    const pdf = await RNHTMLtoPDF.convert(options);

    return pdf;
  } catch (error) {
    console.error('Error converting image to PDF:', error);
    return null;
  }
};
