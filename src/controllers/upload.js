module.exports = {
  upload: async (req, res) => {
    try {
      const file = req.file;
      if (!file) {
        return res.status(400).send('No file uploaded.');
      }

      const fileName = file.filename;
      const filePath = file.path;

      res.status(200).json({
        message: 'File uploaded successfully.',
        fileName: fileName,
        filePath: filePath,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  },
};
