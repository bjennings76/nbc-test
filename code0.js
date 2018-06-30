gdjs.SceneCode = {};
gdjs.SceneCode.GDTankObjects1= [];
gdjs.SceneCode.GDTankObjects2= [];
gdjs.SceneCode.GDTankObjects3= [];
gdjs.SceneCode.GDmessageObjects1= [];
gdjs.SceneCode.GDmessageObjects2= [];
gdjs.SceneCode.GDmessageObjects3= [];

gdjs.SceneCode.conditionTrue_0 = {val:false};
gdjs.SceneCode.condition0IsTrue_0 = {val:false};
gdjs.SceneCode.condition1IsTrue_0 = {val:false};
gdjs.SceneCode.condition2IsTrue_0 = {val:false};
gdjs.SceneCode.conditionTrue_1 = {val:false};
gdjs.SceneCode.condition0IsTrue_1 = {val:false};
gdjs.SceneCode.condition1IsTrue_1 = {val:false};
gdjs.SceneCode.condition2IsTrue_1 = {val:false};


gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDTankObjects2Objects = Hashtable.newFrom({"Tank": gdjs.SceneCode.GDTankObjects2});gdjs.SceneCode.eventsList0x5aef00 = function(runtimeScene, context) {

{



}


{

gdjs.SceneCode.GDTankObjects2.createFrom(runtimeScene.getObjects("Tank"));

gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDTankObjects2Objects, runtimeScene, true, false);
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SceneCode.GDTankObjects2 */
{runtimeScene.getVariables().get("select_all").setNumber(0);
}{for(var i = 0, len = gdjs.SceneCode.GDTankObjects2.length ;i < len;++i) {
    gdjs.SceneCode.GDTankObjects2[i].setAnimation(1);
}
}}

}


{



}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("select_all")) == 1;
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.SceneCode.GDTankObjects1.createFrom(runtimeScene.getObjects("Tank"));
{for(var i = 0, len = gdjs.SceneCode.GDTankObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDTankObjects1[i].setAnimation(1);
}
}}

}


}; //End of gdjs.SceneCode.eventsList0x5aef00
gdjs.SceneCode.eventsList0xac780 = function(runtimeScene, context) {

{



}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = context.triggerOnce(5958452);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {
gdjs.SceneCode.GDTankObjects1.createFrom(runtimeScene.getObjects("Tank"));
{for(var i = 0, len = gdjs.SceneCode.GDTankObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDTankObjects1[i].setAnimation(0);
}
}{runtimeScene.getVariables().get("select_all").setNumber(1);
}}

}


{



}


{


gdjs.SceneCode.condition0IsTrue_0.val = false;
gdjs.SceneCode.condition1IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.SceneCode.conditionTrue_1 = gdjs.SceneCode.condition1IsTrue_0;
gdjs.SceneCode.conditionTrue_1.val = context.triggerOnce(5959636);
}
}}
if (gdjs.SceneCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.SceneCode.eventsList0x5aef00(runtimeScene, context);} //End of subevents
}

}


}; //End of gdjs.SceneCode.eventsList0xac780


gdjs.SceneCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.SceneCode.GDTankObjects1.length = 0;
gdjs.SceneCode.GDTankObjects2.length = 0;
gdjs.SceneCode.GDTankObjects3.length = 0;
gdjs.SceneCode.GDmessageObjects1.length = 0;
gdjs.SceneCode.GDmessageObjects2.length = 0;
gdjs.SceneCode.GDmessageObjects3.length = 0;

gdjs.SceneCode.eventsList0xac780(runtimeScene, context);return;
}
gdjs['SceneCode']= gdjs.SceneCode;
