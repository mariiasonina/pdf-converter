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
              max-width: 98%;
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
      fileName,
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

const readTextFromFile = async (filePath: string) => {
  try {
    const text = await RNFS.readFile(decodeURIComponent(filePath), 'utf8');

    return text;
  } catch (error) {
    console.error('Error reading file:', error);
    return null;
  }
};

export const convertTextToPDF = async (filePath: string, fileName: string, padding = 10) => {
  const text = await readTextFromFile(filePath);
  console.log(filePath);

  const htmlContent = `<html><body><p>${text?.replace(/\n/g, '<br>')}</p></body></html>`;

  const options = {
    html: htmlContent,
    fileName,
    directory: RNFS.DocumentDirectoryPath,
    padding,
  };

  try {
    const pdfFile = await RNHTMLtoPDF.convert(options);

    return pdfFile;
  } catch (error) {
    console.error('Error converting to PDF:', error);

    return null;
  }
};
