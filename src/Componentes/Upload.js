import React, { Component } from 'react';

const S3 = require('react-s3-uploader');

class Upload extends Component {
    render(){
        return (<S3 signingUrl="/s3/sign"
                    signingUrlMethod="GET"
                    accept="image/*"
                    s3path="/uploads/"
                    preprocess={this.onUploadStart}
                    onSignedUrl={this.onSignedUrl}
                    onProgress={this.onUploadProgress}
                    onError={this.onUploadError}
                    onFinish={this.onUploadFinish}
                    signingUrlHeaders={{ additional: "" }}
                    signingUrlQueryParams={{ additional: "" }}
                    signingUrlWithCredentials={ true }      // in case when need to pass authentication credentials via CORS
                    uploadRequestHeaders={{ 'x-amz-acl': 'public-read' }}  // this is the default
                    contentDisposition="auto"
                    scrubFilename={(filename) => filename.replace(/[^\w\d_\-.]+/ig, '')}
                    server="http://cross-origin-server.com"
                    inputRef={cmp => this.uploadInput = cmp}
                    autoUpload={true}  
                />  
        )
    }
}


export default Upload;