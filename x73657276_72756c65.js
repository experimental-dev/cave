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
            case "\x44\x45\x4c\x45\x54\x45": this.x44454c455445(this.i73,this.i72);
            case "\x47\x45\x54": this.x474554(this.i73,this.i72);
            case "\x50\x4f\x53\x54":this.x504f5354(this.i73,this.i72);
            case "\x50\x55\x54": this.x505554(this.i73,this.i72);
        }
    }
    x44454c455445(){}
    x474554(){}
    x504f5354(){}
    x505554(){}
}
module.exports=x73657276_72756c65;