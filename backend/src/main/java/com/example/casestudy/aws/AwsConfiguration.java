package com.example.casestudy.aws;

import com.awsutils.AwsUtils3Service.service.AwsUtilsS3;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class AwsConfiguration {
    protected final Environment environment;

    @Bean
    public AwsUtilsS3 getS3Utils() throws Exception {
        AwsUtilsS3 s3Utils = new AwsUtilsS3(environment);;
        return s3Utils;
    }

}
