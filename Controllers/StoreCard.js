export const createRequest = async (req, res) => {
  try {
    //
    res.status(200).json(newRequest);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
