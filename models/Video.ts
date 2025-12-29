import mongoose, { Schema, models, model } from "mongoose";

export const VideoDimension={
    width:1080,
    height:1920,
}as const;

export interface VideoInfo {
_id?:mongoose.Types.ObjectId,
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  controls?: boolean;
  transformation: {
    width: number;
    height: number;
    quality: number;
  };
}

const videoSchema = new Schema<VideoInfo>(
  {
    
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    videoUrl: { type: String, required: true },
    thumbnailUrl: { type: String, required: true },
    controls: { type: Boolean, default: true },
    transformation: {
      width: { type: Number, default: VideoDimension.width},
      height: { type: Number, default: VideoDimension.height },
      quality: { type: Number, min:1 ,max:100 },
    },
  },
  {
    timestamps: true,
  }
);

const Video = models?.Video || model<VideoInfo>("Video", videoSchema);

export default Video;
