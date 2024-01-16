import * as FileSystem from "expo-file-system";
import { FFmpegKit, FFmpegKitConfig } from "ffmpeg-kit-react-native";

FFmpegKitConfig.disableLogs();

export const downloadAndSaveVideo = async (
  urlM3U8: string,
  fileNameMP4: string,
  setMB: any,
  setAllMB: any,
  setVisibleError: any,
  setVisiblePrepare: any,
  setVisible: any,
  flag: any,
  setFlag: any
) => {
  try {
    const response = await fetch(urlM3U8, { method: "HEAD" });
    const fileSize: any = response.headers.get("content-length");
    const initialFileSize = parseFloat(fileSize);
    setAllMB(initialFileSize / 1000000);

    await FFmpegKit.executeAsync(
      `-i ${urlM3U8} -c copy ${FileSystem.documentDirectory + fileNameMP4}`,
      async (session) => {
        await session.getReturnCode().then((status) => {
          if (status.isValueCancel() || status.isValueError()) {
            FileSystem.deleteAsync(FileSystem.documentDirectory + fileNameMP4);
            setVisiblePrepare(false);
            setVisibleError(true);
          } else {
            setVisible(false);
          }
        });
      },
      () => {},
      (stat) => {
        setMB(stat.getSize() / 1000000);
        setVisiblePrepare(false);
        setFlag(!flag);
        setVisible(true);
      }
    );
  } catch (error) {
    console.error("Error while executing FFmpeg:", error);
  }
};
