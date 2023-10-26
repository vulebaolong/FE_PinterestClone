import { RcFile } from "antd/es/upload";

export interface file {
    file: {
        originFileObj: RcFile;
    };
}

export interface I_createImage_req {
    file: file;
    imageName: string;
}
