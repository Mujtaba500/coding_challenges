import fs from "fs";

export const readDirectory = (path, step) => {
  try {
    fs.readdir(path, async (err, files) => {
      if (err) {
        console.error("Error reading directory:", err);
        return;
      }
      console.log("Files in directory (asynchronous):", files);
      for await (const file of files) {
        await readFile(path + "/" + file, step);
      }
    });
  } catch (error) {
    console.error(error);
  }
};

export const readFile = async (file, step) => {
  console.log(file);
  try {
    const stream = fs.createReadStream(file, { encoding: "utf8" });
    stream.on("data", (data) => {
      parseJSON(data, step);
    });
  } catch (error) {
    console.error(error);
  }
};

export const parseJSON = (data, step) => {
  try {
    if (step === "step1") {
      if (data == "{}") {
        console.log("Correct file with data:", data);
      }
    }
  } catch (error) {
    console.error(error);
  }
};
