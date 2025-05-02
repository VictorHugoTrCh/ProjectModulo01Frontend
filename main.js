const fs = require("fs")



const checkFile = (file) => {
    return fs.existsSync(file)
}

const startCleanData = (data) => {
    return data.replace("\r","").split(/\n/)
}

const validateDate = (dataDate) => /^\d{4}-\d{2}-\d{2}$/.test(dataDate)
const stringNoNull = (text) => text.length !== 0
const validateNumber = (num) => {return !isNaN(num) && Number(num) > 0 && Number.isInteger(num)} 


const readFile = (archivo) => {
    fs.readFile(archivo, 'utf8', (err, data) => {
        if (err) throw err;
        cleanData = startCleanData(data);

        cleanData.forEach((line, idx) => {
            const [dataDate, dataText, dataNum] = line.split(",");

            console.log(dataDate,/^\d{4}-\d{2}-\d{2}$/.test(dataDate));
            if(!validateDate(dataDate)) console.log(`line ${idx+1}: has an invalid date`);
            if(!stringNoNull(dataText.trim())) console.log(`line ${idx+1}: has an invalid text`);
            if(!validateNumber(dataNum)) console.log(`line ${idx+1}: has an invalid id`);
            
            
            
        });

        
        
      });
}

function main(){
    const archivo = process.argv[2]

    if(checkFile(archivo)){
        readFile(archivo)
    }else{
        console.log("el archivo no fue encontrado");   
    }  
}
    
main()




