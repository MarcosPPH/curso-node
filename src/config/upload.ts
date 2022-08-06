import crypto from 'crypto';
import multer, { StorageEngine } from 'multer';
import path from 'path';

interface IUploadConfig {
    driver: 's3' | 'disk';
    tmpFolder: string;
    directory: string;
    multer: {
        storage: StorageEngine;
    };
    config: {
        aws: {
            bucket: string;
        };
    };
}

const uploadFolder = path.resolve(__dirname, '..', '..', 'uploads');
const tmpFolder = path.resolve(__dirname, '..', '..', 'temp');

export default {
    driver: process.env.STORAGE_DRIVER,
    directory: uploadFolder,
    tmpFolder,
    multer: {
        storage: multer.diskStorage({
            destination: uploadFolder,
            filename(request, file, callback) {
                const fileHash = crypto.randomBytes(10).toString('hex');

                const filename = `${fileHash}-${file.originalname}`;

                callback(null, filename);
            },
        }),
    },
    config: {
        aws: {
            bucket: process.env.AWS_BUCKET,
        },
    },
} as IUploadConfig;
