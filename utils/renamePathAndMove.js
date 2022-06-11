import * as Filesystem from "expo-file-system";

const renamePathAndMove = async (originalPath) => {
  const filename = originalPath.split("/").pop();
  const path = Filesystem.documentDirectory + filename;
  await Filesystem.moveAsync({
    from: originalPath,
    to: path,
  });
  return path;
};

export default renamePathAndMove;
