/**
 * index of project
*/
class x73657276_72756c65{
    /**
     * @name x73657276_72756c65
     * @param {Request} x73
     * @param {Response} x72
    */
    constructor(x73,x72){
        /**
         * @type {Request}
         * @returns {Request}
        */
        this.i73 = x73;
        /**
         * @type {Response}
         * @returns {Response}
        */
        this.i72 = x72
        switch(this.i73.method){
            case "DELETE": this.DELETE(this.i73,this.i72);
            case "GET": this.GET(this.i73,this.i72);
            case "POST":this.POST(this.i73,this.i72);
            case "PUT": this.PUT(this.i73,this.i72);
        }
    }
    GET(){}
    POST(){}
    DELETE(){}
    PUT(){}
}
module.exports=x73657276_72756c65;