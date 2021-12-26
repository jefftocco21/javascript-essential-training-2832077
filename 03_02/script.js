/**
 * Create a Backpack object.
 */

const Backpack = {
  name:"Everyday Backpack",
  volume: 30,
  color: "grey",
  packetNum: 15,
  strapLength:{
    left:26,
    right:26,
  },
  lidOpen:false,
  toggleLid: function(lidStatus) {
    this.lidOpen = lidStatus;
  },

  newStrapLength: function(lengthLeft, lengthRight){
    this.newStrapLength.left= lengthLseft;
    this.newStrapLength.right = lengthRight;
  }
}
