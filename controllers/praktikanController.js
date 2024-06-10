const { getPraktikan, addPraktikan , deletePraktikanByNpm, editPraktikanByNPM } = require('../models/praktikan');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
exports.getPraktikanAll = async (req, res) => {
  try {
    const praktikan = await getPraktikan();
    res.render('dashboard', { praktikan });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

exports.deletePraktikan = async (req, res) => {
    const npm = req.params.id;
    try{
        
        const praktikan = deletePraktikanByNpm(npm);
        res.status(200).json({
            message : "user berhasil di hapus",
            data : praktikan

        });

    }catch(error){
        res.status(500).json({
            error : error.message
        });
    }
}

exports.getPraktikan = async (req, res) => {
    try {
        const npm = req.params.id;
        const praktikan = await prisma.praktikan.findUnique({
            where: {
                npm: npm
            }
        });
        
        if (!praktikan) {
            return res.status(404).json({ error: 'Praktikan not found' });
        }

        res.render('edit', {praktikan})
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal server error'
        });
    } 
};

exports.tambahPraktikan = async (req, res) => {
  try {
    const { npm, nama, kelas, kehadiran, lp, la, ujian } = req.body;
    const tambah = await addPraktikan(npm, nama, kelas, kehadiran, lp, la, ujian);
    res.redirect('/dashboard');
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

exports.editPraktikum = async(req, res) => {
    try{
        
        const { npm,nama, kelas, kehadiran, lp, la, ujian } = req.body;

        const praktikan = await prisma.praktikan.update({
            where : {
                npm: npm
            },
            data : {
                nama: nama,
                kelas: kelas,
                kehadiran: kehadiran,
                lp: parseInt(lp),
                la: parseInt(la),
                ujian: parseInt(ujian)
    
            }
        })

        res.status(200).json({
            message : "user berhasil di update",
            data : praktikan
        })


    }catch(error){
        res.status(500).json({
            error : error.message
        })
    }
}

