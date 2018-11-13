// import express = require("express");
import express from 'express';
import path = require('path');

import chatRoutes from './routes';
import { Application } from 'express-serve-static-core';

class App {
  public server: Application;
  constructor() {
    this.server = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router = express.Router();
    router.get("/root/:something?", (req, res) => {
      res.json({
        success: true,
        path: `app path ${req.params.something||''}`
      });
    });

    this.server.use(router);
    this.server.use(chatRoutes)
  }
}

export default new App().server;
