const crypto = require("crypto");

const secret = "•••••••••"; // Your verification secret key
const userId = current_user.id; // A string UUID to identify your user

const hash = crypto.createHmac("sha256", secret).update(userId).digest("hex");


