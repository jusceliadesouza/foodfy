module.exports = {
  index(res, req) {
    return res.render("admin/recipes/index");
  },
  create(res, req) {
    return res.render("admin/recipes/create");
  },
  post(res, req) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") return res.send("Please, fill all fields");
    }

    return;
  },
  show(res, req) {
    return;
  },
  edit(res, req) {
    return;
  },
  put(res, req) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") return res.send("Please, fill all fields");
    }

    return;
  },
  delete(res, req) {
    return;
  },
};
