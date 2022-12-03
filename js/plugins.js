// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Plugin used to set basic parameters.","parameters":{"cacheLimit":"20","screenWidth":"768","screenHeight":"432","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"GitCompatibilityPatch","status":true,"description":"Formats RPG maker files when the game is run in playtest mode to allow them to be auto merged in most cases.","parameters":{"Format All":"false","Debug":"false","Remove RPG Maker Data":"true","Expand Map Groups":"true","Manage Events":"true","Disable Indentation":"true","Blacklist":"[\"actors.json\", \"animations.json\", \"armors.json\", \"classes.json\", \"commonevents.json\", \"enemies.json\", \"items.json\", \"skills.json\", \"states.json\", \"tilesets.json\", \"troops.json\", \"weapons.json\"]"}},
{"name":"YEP_SaveEventLocations","status":true,"description":"v1.06 Enable specified maps to memorize the locations of\r\nevents when leaving and loading them upon reentering map.","parameters":{}},
{"name":"DMY_SkipVideo","status":true,"description":"Skip video on key press","parameters":{"Disabler switch":"0"}},
{"name":"mv3d","status":false,"description":"3D rendering in RPG Maker MV with babylon.js\r\nversion 0.6.4.2","parameters":{"options":"","3dMenu":"ENABLE","renderDistOptionName":"Render Distance","renderDist":"25","renderDistOption":"true","renderDistMin":"10","renderDistMax":"100","fovOptionName":"FOV","fov":"65","fovOption":"false","fovMin":"50","fovMax":"100","invertYOptionName":"Invert Y Axis","invertYOption":"true","lookSensitivityOptionName":"Look Sensitivity","lookSensitivityOption":"true","spacer|graphics":"","graphics":"","antialiasing":"true","edgefix":"0.5","alphatest":"0.51","lightLimit":"8","backfaceCulling":"true","cameraCollision":"Type2 Smoothed","resScale":"1","spacer|map":"","map":"","cellSize":"10","unloadCells":"false","eventsUpdateNear":"true","mapDefaults":"\"enable(true)\\nsun(white)\\nambient(default)\\nfog(black|20,30)\\nceiling(backface:true)\"","spacer|input":"","input":"","inputCameraMouse":"false","inputCameraGamepad":"true","inputGamepadTurnButton":"Bumpers","WASD":"true","dir8Movement":"Diagonal Smart","keyboardPitch":"true","keyboardTurn":"QE","keyboardStrafe":"QE","turnIncrement":"90","yawSpeed":"180","pitchSpeed":"90","stairThresh":"0.1","walkOffEdge":"false","walkOnEvents":"true","gravity":"8","spacer|tileconfig":"","tileconfig":"","wallHeight":"2.0","tableHeight":"0.33","fringeHeight":"2.0","ceilingHeight":"2.0","layerDist":"0.0100","animDelay":"333","regions":"[\"{\\\"regionId\\\":\\\"1\\\",\\\"conf\\\":\\\"height(1)\\\"}\",\"{\\\"regionId\\\":\\\"2\\\",\\\"conf\\\":\\\"height(2)\\\"}\",\"{\\\"regionId\\\":\\\"3\\\",\\\"conf\\\":\\\"height(3)\\\"}\",\"{\\\"regionId\\\":\\\"4\\\",\\\"conf\\\":\\\"height(4)\\\"}\",\"{\\\"regionId\\\":\\\"5\\\",\\\"conf\\\":\\\"height(5)\\\"}\",\"{\\\"regionId\\\":\\\"6\\\",\\\"conf\\\":\\\"height(6)\\\"}\",\"{\\\"regionId\\\":\\\"7\\\",\\\"conf\\\":\\\"height(7)\\\"}\"]","ttags":"[\"{\\\"terrainTag\\\":\\\"1\\\",\\\"conf\\\":\\\"shape(xcross),height(1),fringe(0)\\\"}\",\"{\\\"terrainTag\\\":\\\"2\\\",\\\"conf\\\":\\\"shape(fence),height(1)\\\"}\"]","spacer|characters":"","characters":"","heightTrigger":"true","eventCharDefaults":"\"shadow(0.8,4)\\nshape(sprite)\\nscale(1)\"","eventObjDefaults":"\"shadow(0)\\nshape(sprite)\\nscale(1)\"","eventTileDefaults":"\"shadow(0)\\nshape(flat)\\nscale(1)\"","eventHeight":"2.0","boatSettings":"{\"conf\":\"shadow(0.8,4),shape(sprite),scale(1),bush(false)\"}","shipSettings":"{\"conf\":\"shadow(0.8,4),shape(sprite),scale(1),bush(false)\"}","airshipSettings":"{\"conf\":\"shadow(1,6),shape(sprite),scale(1),bush(false)\",\"height\":\"2.0\",\"bushLanding\":\"false\"}","allowGlide":"true","spriteOffset":"0.9","spacer|assets":"","assets":"","diagSymbol":"{d}","shadowTexture":"shadow","alphaMask":"bushAlpha","errorTexture":"errorTexture","requiredImages":""}},
{"name":"SRD_BitmapUpgrade","status":true,"description":"Adds various Bitmap functions to allow color transformations to characters, battlers, and weapons.","parameters":{"Default Font":"GameFont","Default Font Size":"28","Default Font Italic":"false","Default Text Color":"#FFFFFF","Default Outline Color":"rgba(0, 0, 0, 0.5)","Default Outline Width":"4"}},
{"name":"DK_Big_Events","status":true,"description":"v.1.2.0 [MV|MZ] Allows you to expand the coverage of the event by several tiles.","parameters":{}},
{"name":"SRD_CameraCore","status":true,"description":"Allows developers to preform various camera motions including focusing and zooming.","parameters":{"Default Zoom":"1","Zoom Pictures?":"true","Margin Formula":"(Graphics.width / scale) - Graphics.width","Fix Black Lines":"false"}},
{"name":"TDDP_MouseSystemEx","status":true,"description":"1.8.2.1 Custom mouse cursors, highlight menu items on hover, custom event mouse interaction and much more! See Help.                      id:TDDP_MouseSystemEx","parameters":{"---Custom Cursor---":"","Use Custom Cursor?":"true","Custom Cursor Image":"default.png","Custom Cursors Folder":"img/cursors/","---Auto Change Cursors---":"","Show Text Cursor":"","Transfer Cursor":"","Change Gold Cursor":"","Change Items Cursor":"","Change Weapons Cursor":"","Change Armors Cursor":"","Battle Processing Cursor":"","---Auto Change Icons---":"","Show Text Icon":"","Transfer Icon":"","Change Gold Icon":"","Change Items Icon":"","Change Weapons Icon":"","Change Armors Icon":"","Battle Processing Icon":"","---Hover Select---":"","Highlight On Hover":"true","Hover SE Cooldown":"4","---Customizeable Notetags---":"","No Auto Cursor Notetag":"no_auto_cursor!","No Auto Icon Notetag":"no_auto_icon!","Click Notetag":"click_activate!","Hover Notetag":"hover_activate!","Leave Notetag":"leave_activate!","---Mouse Icons---":"","Hide Cursor":"false","Icon Offset X":"9","Icon Offset Y":"14","---Mouse Icon Tags---":"","Icon Tag 1":"quest: 191","Icon Tag 2":"chest: 210","Icon Tag 3":"door: 106","Icon Tag 4":"world_map: 190","Icon Tag 5":"potion: 176","Icon Tag 6":"poison: 177","Icon Tag 7":"four_leaf_clover: 182","Icon Tag 8":"notebook: 187","Icon Tag 9":"letter: 192","Icon Tag 10":"key: 195","Icon Tag 11":"key: 195","Icon Tag 12":"key: 195","Icon Tag 13":"key: 195","Icon Tag 14":"key: 195","Icon Tag 15":"key: 195"}},
{"name":"PEZ_PointAndClickInventory","status":true,"description":"Makes an inventory for P&C games.","parameters":{"Inventory Key":"73","Category Item":"keyItem","Unblur Background":"false","Stop Blinking":"false","---Pictures---":"","Inventory Background Name":"Inventory","Inventory Background X":"((Graphics.width / 2) - 120)","Inventory Background Y":"((Graphics.height / 2) - 60)","Inventory Background Opacity":"255","Help Background Name":"HelpInventory","Help Background X":"((Graphics.width / 2) - 150)","Help Background Y":"Graphics.height - 120","Help Background Opacity":"255","IconSet Name":"IconSet48","---Inventory Window---":"","Inventory Width":"240","Inventory Height":"144","Inventory X":"(Graphics.width / 2) - (eval(PEZ.Param.PEZWindowWidth) / 2)","Inventory Y":"(Graphics.height / 2) - (eval(PEZ.Param.PEZWindowHeight) / 2)","Inventory Opacity":"0","Inventory Columns":"4","---Icons---":"","Icon Width":"48","Icon Height":"48","Icon Box Width":"48","Icon Box Height":"48","Icon Spacing":"0","---Help Window---":"","Inventory Help Width":"300","Inventory Help Height":"48","Inventory Help X":"((Graphics.width / 2) - (eval(PEZ.Param.PEZWindowWidth) / 2))","Inventory Help Y":"eval(PEZ.Param.PEZWindowY) + eval(PEZ.Param.PEZWindowHeight) + 4","Inventory Help Opacity":"0\r"}},
{"name":"AltimitMovement","status":false,"description":"Vector-based character movement and collision","parameters":{"player":"","player_collider_list":"\"<circle cx='0.5' cy='0.7' r='0.25' />\"","player_circular_movement":"true","":"","followers":"","followers_distance":"1.50","followers_collider_list":"\"<circle cx='0.5' cy='0.7' r='0.25' />\"","followers_circular_movement":"true","vehicles":"","vehicles_boat_collider_list":"\"<circle cx='0.5' cy='0.5' r='0.333' />\"","vehicles_ship_collider_list":"\"<circle cx='0.5' cy='0.5' r='0.5' />\"","vehicles_airship_collider_list":"\"<circle cx='0.5' cy='0.5' r='0.25' />\"","event":"","event_character_collider_list":"\"<circle cx='0.5' cy='0.7' r='0.25' />\"","event_tile_collider_list":"\"<rect x='0' y='0' width='1' height='1' />\"","presets":"[\"\\\"<rect x='0' y='0' width='1' height='1' />\\\"\"]","move_route":"","move_route_align_grid":"false","input_config":"","input_config_enable_touch_mouse":"true","input_config_gamepad_mode":"3","play_test":"","play_test_collision_mesh_caching":"false"}},
{"name":"YEP_RegionEvents","status":true,"description":"v1.03 Make it so that whenever players step on certain\nRegion ID's, the game will play certain common events.","parameters":{"---Regions 1 to 20---":"","Region 1":"20","Region 2":"0","Region 3":"0","Region 4":"0","Region 5":"0","Region 6":"0","Region 7":"0","Region 8":"0","Region 9":"0","Region 10":"0","Region 11":"0","Region 12":"0","Region 13":"0","Region 14":"0","Region 15":"0","Region 16":"0","Region 17":"0","Region 18":"0","Region 19":"0","Region 20":"0","---Regions 21 to 40---":"","Region 21":"0","Region 22":"0","Region 23":"0","Region 24":"0","Region 25":"0","Region 26":"0","Region 27":"0","Region 28":"0","Region 29":"0","Region 30":"0","Region 31":"0","Region 32":"0","Region 33":"0","Region 34":"0","Region 35":"0","Region 36":"0","Region 37":"0","Region 38":"0","Region 39":"0","Region 40":"0","---Regions 41 to 60---":"","Region 41":"0","Region 42":"0","Region 43":"0","Region 44":"0","Region 45":"0","Region 46":"0","Region 47":"0","Region 48":"0","Region 49":"0","Region 50":"0","Region 51":"0","Region 52":"0","Region 53":"0","Region 54":"0","Region 55":"0","Region 56":"0","Region 57":"0","Region 58":"0","Region 59":"0","Region 60":"0","---Regions 61 to 80---":"","Region 61":"0","Region 62":"0","Region 63":"0","Region 64":"0","Region 65":"0","Region 66":"0","Region 67":"0","Region 68":"0","Region 69":"0","Region 70":"0","Region 71":"0","Region 72":"0","Region 73":"0","Region 74":"0","Region 75":"0","Region 76":"0","Region 77":"0","Region 78":"0","Region 79":"0","Region 80":"0","---Regions 81 to 100---":"","Region 81":"0","Region 82":"0","Region 83":"0","Region 84":"0","Region 85":"0","Region 86":"0","Region 87":"0","Region 88":"0","Region 89":"0","Region 90":"0","Region 91":"0","Region 92":"0","Region 93":"0","Region 94":"0","Region 95":"0","Region 96":"0","Region 97":"0","Region 98":"0","Region 99":"0","Region 100":"0","---Regions 101 to 120---":"","Region 101":"0","Region 102":"0","Region 103":"0","Region 104":"0","Region 105":"0","Region 106":"0","Region 107":"0","Region 108":"0","Region 109":"0","Region 110":"0","Region 111":"0","Region 112":"0","Region 113":"0","Region 114":"0","Region 115":"0","Region 116":"0","Region 117":"0","Region 118":"0","Region 119":"0","Region 120":"0","---Regions 121 to 140---":"","Region 121":"0","Region 122":"0","Region 123":"0","Region 124":"0","Region 125":"0","Region 126":"0","Region 127":"0","Region 128":"0","Region 129":"0","Region 130":"0","Region 131":"0","Region 132":"0","Region 133":"0","Region 134":"0","Region 135":"0","Region 136":"0","Region 137":"0","Region 138":"0","Region 139":"0","Region 140":"0","---Regions 141 to 160---":"","Region 141":"0","Region 142":"0","Region 143":"0","Region 144":"0","Region 145":"0","Region 146":"0","Region 147":"0","Region 148":"0","Region 149":"0","Region 150":"0","Region 151":"0","Region 152":"0","Region 153":"0","Region 154":"0","Region 155":"0","Region 156":"0","Region 157":"0","Region 158":"0","Region 159":"0","Region 160":"0","---Regions 161 to 180---":"","Region 161":"0","Region 162":"0","Region 163":"0","Region 164":"0","Region 165":"0","Region 166":"0","Region 167":"0","Region 168":"0","Region 169":"0","Region 170":"0","Region 171":"0","Region 172":"0","Region 173":"0","Region 174":"0","Region 175":"0","Region 176":"0","Region 177":"0","Region 178":"0","Region 179":"0","Region 180":"0","---Regions 181 to 200---":"","Region 181":"0","Region 182":"0","Region 183":"0","Region 184":"0","Region 185":"0","Region 186":"0","Region 187":"0","Region 188":"0","Region 189":"0","Region 190":"0","Region 191":"0","Region 192":"0","Region 193":"0","Region 194":"0","Region 195":"0","Region 196":"0","Region 197":"0","Region 198":"0","Region 199":"0","Region 200":"0","---Regions 201 to 220---":"","Region 201":"0","Region 202":"0","Region 203":"0","Region 204":"0","Region 205":"0","Region 206":"0","Region 207":"0","Region 208":"0","Region 209":"0","Region 210":"0","Region 211":"0","Region 212":"0","Region 213":"0","Region 214":"0","Region 215":"0","Region 216":"0","Region 217":"0","Region 218":"0","Region 219":"0","Region 220":"0","---Regions 221 to 240---":"","Region 221":"0","Region 222":"0","Region 223":"0","Region 224":"0","Region 225":"0","Region 226":"0","Region 227":"0","Region 228":"0","Region 229":"0","Region 230":"0","Region 231":"0","Region 232":"0","Region 233":"0","Region 234":"0","Region 235":"0","Region 236":"0","Region 237":"0","Region 238":"0","Region 239":"0","Region 240":"0","---Regions 241 to 255---":"","Region 241":"0","Region 242":"0","Region 243":"0","Region 244":"0","Region 245":"0","Region 246":"0","Region 247":"0","Region 248":"0","Region 249":"0","Region 250":"0","Region 251":"0","Region 252":"0","Region 253":"0","Region 254":"0","Region 255":"0"}},
{"name":"HIME_HiddenChoiceConditions","status":true,"description":"Allows you to hide choices with a simple event call","parameters":{}},
{"name":"ConditionalBranch+","status":true,"description":"Conditional Branch+ v2: Checks for various things.\r\nRead help file for more information.","parameters":{}},
{"name":"Eli_Book","status":true,"description":"♦5.3.1♦ Essential plugin for all Eli plugins.","parameters":{"engine":"{\"pixelPerfect\":\"false\",\"styleOverflow\":\"false\",\"--- MZ ONLY ---\":\"\",\"disableEffekseer\":\"false\"}","playtest":"{\"openDevTools\":\"false\",\"nwWindowPos\":\"0, 0\",\"--- MZ ONLY ---\":\"\",\"gameFocus\":\"true\",\"quickRestart\":\"true\"}"}},
{"name":"Eli_ButtonCommonEvents","status":true,"description":"♦5.2.2♦ Bind common events to keyboard/gamepad buttons!","parameters":{"presetKeys":"[\"{\\\"key\\\":\\\"h\\\",\\\"id\\\":\\\"3\\\",\\\"isParallel\\\":\\\"false\\\",\\\"overwrite\\\":\\\"true\\\"}\",\"{\\\"key\\\":\\\"c\\\",\\\"id\\\":\\\"1\\\",\\\"isParallel\\\":\\\"false\\\",\\\"overwrite\\\":\\\"false\\\"}\"]","presetKeysGamePad":"[]"}}
];
