const express = require("express");
const fs = require("fs/promises");

const app = express();
app.use(express.json());

app.post("/user", async (req, res) => {
  try {
    const user = req.body;

    // Read existing users from the file
    const data = await fs.readFile("users.json", "utf8");
    const users = JSON.parse(data);

    // Add the new user
    users.push(user);

    // Save the updated list
    await fs.writeFile(
      "users.json",
      JSON.stringify(users, null, 2)
    );

    res.status(201).json({
      message: "User saved successfully",
      user
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to save user"
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});