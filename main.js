const fs = require("fs")



const checkFile = (file) => {
    return fs.existsSync(file)
}

const startCleanData = (data) => {
    return data.replace(/\r/g, "").split(/\n/)
}

const validateDate = (dataDate) => /^\d{4}-\d{2}-\d{2}$/.test(dataDate)
const stringNoNull = (text) => text.length !== 0
const validateNumber = (num) => {return !isNaN(num) && Number(num) > 0 && Number.isInteger(Number(num))} 


const readFile = (archivo) => {
    fs.readFile(archivo, 'utf8', (err, data) => {
        if (err) throw err;
        const cleanData = startCleanData(data);
        

        cleanData.forEach((line, idx) => {
            if (line.trim() === "") return; 
            
            const lineNumber = idx + 1;
            const parts = line.split(",");
            const [dataDate, dataText, dataNum] = parts;
            
            
            if (parts.length !== 3) {
                console.log(`line ${lineNumber}: has an invalid format, must have 3 fields`);
                return;
            }
            


            //console.log(dataDate,/^\d{4}-\d{2}-\d{2}$/.test(dataDate));
            if(!validateDate(dataDate)) console.log(`line ${lineNumber}: Fecha Invalida`);
            if(!stringNoNull(dataText?.trim())) console.log(`line ${lineNumber}: Texto invalido`);
            if(!validateNumber(dataNum)) console.log(`line ${lineNumber}: ID Invalido`);
            
            
            
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




