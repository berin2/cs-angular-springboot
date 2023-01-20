package com.example.casestudy.aws;

import com.awsutils.AwsUtils3Service.service.AwsUtilsS3;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Arrays;

@Service
@RequiredArgsConstructor
public class S3PdfUploader {
    protected final AwsConfiguration s3AppClient;
    protected final String PDF_VALIDATOR = "%PDF";
    protected final AwsUtilsS3 s3Utils;
    protected final String BUCKET= "puvs-89127fdgkh2-dev-bucket";

    public boolean validatePdf(byte [] pdfBytes)
    {
        boolean retVal = false;
        if(pdfBytes != null)
            retVal=PDF_VALIDATOR.equals(new String(Arrays.copyOfRange(pdfBytes,0,PDF_VALIDATOR.length())));
        return retVal;
    }

    public void uploadPdf(byte [] pdfBytes,String objectKey) throws Exception
    {
        if(!validatePdf(pdfBytes)) throw new Exception("Invalid pdf bytes recieved. The file is corrupted.");
        else s3Utils.putObject(BUCKET,objectKey,pdfBytes);
    }
    public void deletePdf(String objectKey){
        if(s3Utils.existsObject(BUCKET,objectKey))
            s3Utils.deleteObject(BUCKET,objectKey);
    }

    public byte [] getPdf(String  objectKey) throws IOException {

       byte [] returnValue = null;

       if(this.s3Utils.existsObject(BUCKET,objectKey))
               returnValue = this.s3Utils.getObject(BUCKET,objectKey);
       return returnValue;
    }
}
