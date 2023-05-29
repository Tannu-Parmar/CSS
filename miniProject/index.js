import express from "express"
import { connect } from "./config/config.js"

const app = express()
connect();
app.listen(3000)