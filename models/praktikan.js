const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getPraktikan = async () => {
    return await prisma.praktikan.findMany();
  };

//   const getPraktikanByNpm = async (npm) => {
//     return await prisma.praktikan.findUnique({
//         where: {
//             npm : npm
//         }
//     });
//   };
  
  const deletePraktikanByNpm = async (npm) => {
    return await prisma.praktikan.delete({
        where:{
            npm : npm
        }
    });
  };

  const editPraktikanByNPM = async () => {
    return await prisma.praktikan.update({
        where : {
            npm: npm
        },
        data : {
            nama: nama,
            kelas: kelas,
            kehadiran: kehadiran,
            lp:lp,
            la: la,
            ujian: ujian

        }
    })
  }

  const addPraktikan = async (npm , nama, kelas, kehadiran, lp , la, ujian) => {
    return await prisma.praktikan.create({
      data: {
        npm: npm,
        nama: nama,
        kelas: kelas,
        kehadiran: kehadiran,
        lp: parseInt(lp),
        la: parseInt(la),
        ujian: parseInt(ujian)
      },
    });
  };
  module.exports = {
    getPraktikan,
    deletePraktikanByNpm,
    editPraktikanByNPM,

    addPraktikan
  };
  