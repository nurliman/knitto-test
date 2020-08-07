const Karyawan = require('../models').Karyawan;

module.exports = {
  list(req, res) {
    return Karyawan
      .findAll({
        include: [],
        order: [
          ['createdAt', 'DESC'],
        ],
      })
      .then((karyawan) => res.status(200).send(karyawan))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Karyawan
      .findByPk(req.params.id)
      .then((karyawan) => {
        if (!karyawan) {
          return res.status(404).send({
            message: 'Karyawan tidak ditemukan',
          });
        }
        return res.status(200).send(karyawan);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Karyawan
      .create({
        nama: req.body.nama,
        jabatan: req.body.jabatan,
        tanggal_masuk: req.body.tanggal_masuk,
      })
      .then((karyawan) => res.status(201).send(karyawan))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Karyawan
      .findByPk(req.params.id)      
      .then(karyawan => {
        if (!karyawan) {
          return res.status(404).send({
            message: 'Karyawan tidak ditemukan',
          });
        }
        return karyawan
          .update({
            nama: req.body.nama || karyawan.nama,
            jabatan: req.body.jabatan || karyawan.jabatan,
            tanggal_masuk: req.body.tanggal_masuk || karyawan.tanggal_masuk,
          })
          .then(() => res.status(200).send(karyawan))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Karyawan
      .findByPk(req.params.id)
      .then(karyawan => {
        if (!karyawan) {
          return res.status(400).send({
            message: 'Karyawan tidak ditemukan',
          });
        }
        return Karyawan
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
