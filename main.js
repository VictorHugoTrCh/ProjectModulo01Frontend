const fs = require("fs")


const checkFile = (file) => {
    return fs.existsSync(file)
}

//const startCleanData = () = {}

const readFile = (archivo) => {
    fs.readFile(archivo, 'utf8', (err, data) => {
        if (err) throw err;
        
        // Clean data
        cleanData = data.replace("\r","").split(/\n/);
        for(const line of cleanData){
            console.log(line.split(","));
            
        }
        
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




