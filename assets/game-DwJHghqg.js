import{A as e,B as t,C as n,D as r,F as i,H as a,M as o,R as s,S as c,T as l,V as u,_ as d,b as f,g as p,h as m,j as h,r as g,t as _,v,w as y,x as b,y as x}from"./ProceduralDecorations-Dh2ZGR3Z.js";(function(){let e={loadModels:!0,enableDecorations:!0,enableUnitSystems:!0,enableRoads:!0},t=typeof window<`u`&&window.HEX_ENGINE_OPTIONS||{},n={options:{...e,...t},getOption(e){if(Object.prototype.hasOwnProperty.call(this.options,e))return this.options[e]},setOption(e,t){this.options[e]=t}};typeof window<`u`&&(window.HEX_ENGINE=n)})();var S=3,C=14806512,w=32,T=6,E=class{static{this.glows=[]}static{this.sharedMaterial=null}static{this.localLights=[]}static{this.localSources=[]}static initLocalLights(e){if(!(!e||this.localLights.length>0)){for(let t=0;t<this.localSources.length;t++){let t=new THREE.PointLight(C,0,T,2);t.castShadow=!1,t.userData.glowEnvironmentLight=!0,e.add(t),this.localLights.push(t)}this.syncLocalLights()}}static illuminateSurroundings(e){if(!e||this.localSources.some(t=>t.root===e))return;e.updateWorldMatrix?.(!0,!0);let t=new THREE.Box3().setFromObject(e),n=new THREE.Vector3,r=new THREE.Vector3;t.isEmpty()?(e.getWorldPosition?.(n),n.y+=.35):(t.getCenter(n),t.getSize(r),n.y=t.min.y+THREE.MathUtils.clamp(r.y*.24,.3,.72)),this.localSources.push({root:e,position:n}),this.syncLocalLights()}static stopIlluminatingSurroundings(e){let t=this.localSources.findIndex(t=>t.root===e);t<0||(this.localSources.splice(t,1),this.syncLocalLights())}static isGlowMaterial(e){return!!e?.emissive&&e.emissive.getHex()!==0}static claim(e){e&&e.traverse(e=>{if(!e.isMesh||!e.material)return;let t=e=>{if(!this.isGlowMaterial(e))return e;if(!this.sharedMaterial){let t=e.clone();t.name=`globalGlow`,t.color?.setHex?.(1287423),t.emissive?.setHex?.(1287423),t.map=null,t.emissiveMap=null,t.alphaMap=null,t.transparent=!1,t.opacity=1,t.alphaTest=0,t.depthWrite=!0,t.userData={...t.userData,sharedGlowMaterial:!0};let n=S;t.emissiveIntensity=n,this.sharedMaterial=t,this.glows.push({material:t,base:n})}return this.sharedMaterial};e.material=Array.isArray(e.material)?e.material.map(t):t(e.material)})}static animate(e){this.sharedMaterial&&(this.sharedMaterial.emissiveIntensity=S);let t=!1;for(let e=this.localSources.length-1;e>=0;e--)this.localSources[e].root?.parent||(this.localSources.splice(e,1),t=!0);t&&this.syncLocalLights()}static syncLocalLights(){for(let e=0;e<this.localLights.length;e++){let t=this.localLights[e],n=this.localSources[e];if(!n||!n.root?.parent){t.intensity=0;continue}t.color.setHex(C),t.position.copy(n.position),t.distance=T,t.decay=2,t.intensity=w}}static clear(){this.sharedMaterial?.dispose?.(),this.sharedMaterial=null,this.glows.length=0,this.localSources.length=0;for(let e of this.localLights)e.intensity=0}};function D(e,t=.05,n=Math.random){let r=new THREE.Color(e);return r.r+=(n()-.5)*t,r.g+=(n()-.5)*t,r.b+=(n()-.5)*t,r}function O(e){let t=e;return t=(t>>16^t)*73244475,t=(t>>16^t)*73244475,t=t>>16^t,t}function k(e){return((O(e)&255)/255-.5)*0}function ee(e){let t=O(e);return{x:k(t),z:k(t>>8)}}function te(e){return V.getHexIntersects(e)}var ne=null;function re(e){ne=e}function A(){if(!ne)throw Error(`GameState accessed before initGame() has run`);return ne}function ie(){return ne}var ae={WATER:{name:`water`,moveCost:1/0,baseHeight:0,heightVariation:0,heightModifier:1,threshold:.4,impassable:!0,material:{color:2702726,metalness:.3,roughness:.4}},SAND:{name:`coastline`,moveCost:1.5,baseHeight:.7,heightVariation:.15,heightModifier:1,threshold:.45,impassable:!1,material:{color:5327938,metalness:.1,roughness:.7}},GRASS:{name:`grass`,moveCost:1,baseHeight:.9,heightVariation:.3,heightModifier:1,threshold:.6,impassable:!1,material:{color:4806183,metalness:.1,roughness:.7}},FOREST:{name:`forest`,moveCost:2,baseHeight:1.1,heightVariation:.6,heightModifier:1,threshold:.7,impassable:!1,material:{color:3288599,metalness:.1,roughness:.7}},MOUNTAIN:{name:`mountain`,moveCost:3,baseHeight:1.6,heightVariation:4.5,heightModifier:14.5,threshold:1,impassable:!0,material:{color:5197124,metalness:.1,roughness:.7}},CONCRETE:{name:`concrete`,moveCost:1,baseHeight:.9,heightVariation:0,heightModifier:1,threshold:1/0,impassable:!1,material:{color:7828330,metalness:.05,roughness:.86}}},oe=ae;function se(e){return oe[e]?.material?.color||ae.GRASS.material.color}function ce(e){return oe[e]?.name||`grass`}function le(e){return oe[e]?.baseHeight??ae.GRASS.baseHeight}function ue(e){return oe[e]?.heightVariation??ae.GRASS.heightVariation}function de(e){return oe[e]?.heightModifier||0}function fe(e){return oe[e]?.threshold||ae.GRASS.threshold}function pe(e){return oe[e]?.impassable||!1}var me=ae;function he(e,t){let n=e%2==1;return[{q:e-1,r:t-+!n},{q:e,r:t-1},{q:e+1,r:t-+!n},{q:e+1,r:t+1-+!n},{q:e,r:t+1},{q:e-1,r:t+1-+!n}]}function ge(e,t){let n=e,r=t-(e-(e&1))/2;return{x:n,y:-n-r,z:r}}function _e(e,t){return{q:e,r:t+(e-(e&1))/2}}function ve(e,t,n){return{x:-t,y:-n,z:-e}}function ye(e,t,n,r){let i=t-(e-(e&1))/2,a=r-(n-(n&1))/2,o=e-n,s=i-a,c=-o-s;return Math.max(Math.abs(o),Math.abs(c),Math.abs(s))}var be=he,j=ye;function xe(e){return!!e&&e.vegetated&&!e.burned&&e.burning===0}function Se(e){return!!e&&e.burning>0}function Ce(e,t,n){let r=[],i=[],a=new Set;for(let{q:o,r:s}of t){let t=e.getTile(o,s);if(Se(t)){for(let t of he(o,s)){let i=`${t.q},${t.r}`;a.has(i)||xe(e.getTile(t.q,t.r))&&n()<.5&&(a.add(i),r.push({q:t.q,r:t.r}))}t.burning<=1&&i.push({q:o,r:s})}}return{ignited:r,burnedOut:i}}function we(e,t,n){let r=[];for(let i=0;i<t;i++)for(let t=0;t<n;t++)Se(e.getTile(i,t))&&r.push({q:i,r:t});return r}function Te(e,t,n){let r=e.getTile(t,n);xe(r)&&e.setTile(t,n,{...r,burning:6})}function Ee(e,t,n){for(let{q:t,r}of n){let n=e.getTile(t,r);n&&n.burning>0&&e.setTile(t,r,{...n,burning:n.burning-1})}for(let{q:n,r}of t.burnedOut){let t=e.getTile(n,r);t&&e.setTile(n,r,{...t,burning:0,burned:!0})}for(let{q:n,r}of t.ignited){let t=e.getTile(n,r);xe(t)&&e.setTile(n,r,{...t,burning:6})}}function De(e,t,n,r){let i=[];for(let a of t)a.playerIndex===n&&(r(a)||Se(e.getTile(a.q,a.r))&&i.push(a));return i}function Oe(e,t,n){if(n)return 0;let r=0;for(let n of t)Se(e.getTile(n.q,n.r))&&(r+=1);return r}var ke=Object.freeze({});function Ae(e,t){return!e||!e[t]}function je(e,t){return t.cooldown<=0?e??ke:{...e??{},[t.id]:t.cooldown}}function Me(e){if(!e)return ke;let t=Object.keys(e);if(t.length===0)return e;let n={};for(let r of t){let t=e[r]-1;t>0&&(n[r]=t)}return n}function Ne(e,t){return{id:`${e}:attack`,name:`공격`,glyph:`⚔`,target:{kind:`enemyUnit`},minRange:t.minRange,maxRange:t.maxRange,cooldown:0,spendsAction:!0,endsMovement:!1,effect:{kind:`attack`,minDamage:t.minDamage,maxDamage:t.maxDamage,attackEffect:t.attackEffect??`projectile`}}}var Pe=[`tank`,`aa`,`artillery`,`naval`,`air`],Fe={id:`Pike:repair`,name:`수리`,glyph:`⚒`,target:{kind:`allyUnit`,classes:Pe,onlyDamaged:!0},minRange:1,maxRange:1,cooldown:3,spendsAction:!0,endsMovement:!1,effect:{kind:`repair`,hp:3}},Ie={id:`Pike:fire`,name:`불 지피기`,glyph:`🔥`,target:{kind:`vegetatedHex`},minRange:1,maxRange:1,cooldown:3,spendsAction:!0,endsMovement:!1,effect:{kind:`startFire`,turns:6}},Le={id:`Drover:load`,name:`탑승`,glyph:`⬇`,target:{kind:`allyUnit`,classes:[`infantry`]},minRange:1,maxRange:1,cooldown:0,spendsAction:!0,endsMovement:!1,effect:{kind:`load`}},Re={id:`Drover:unload`,name:`하차`,glyph:`⬆`,target:{kind:`emptyHex`},minRange:1,maxRange:1,cooldown:0,spendsAction:!1,endsMovement:!1,effect:{kind:`unload`}};function ze(e,t){return Ae(e.cooldowns,t.id)?!(t.spendsAction&&e.hasAttacked):!1}function Be(e,t){return t>=e.minRange&&t<=e.maxRange}function Ve(e,t,n,r){switch(e.target.kind){case`emptyHex`:return n===null;case`vegetatedHex`:return!!r&&r.vegetated&&!r.burning&&!r.burned;case`enemyUnit`:return!!n&&n.playerIndex!==t.playerIndex;case`allyUnit`:{if(!n||n.playerIndex!==t.playerIndex||e.target.onlyDamaged&&n.hp>=n.maxHp)return!1;let r=e.target.classes;return!(r&&!r.includes(n.unitClass))}}}function He(e,t){return{hasAttacked:t.spendsAction?!0:e.hasAttacked,move:t.endsMovement?0:e.move,cooldowns:je(e.cooldowns,t)}}var Ue={Road:{symbol:`E`,name:`로드`,unitClass:`infantry`,maxHp:2,hp:2,move:3,minRange:1,maxRange:2,minDamage:3,maxDamage:5,attack:4,model:`assets/droid.obj`,scale:.3,attackEffect:`laser`,footprintTexture:null,terrainCosts:{WATER:null,SAND:4,GRASS:2,CONCRETE:2,FOREST:2,MOUNTAIN:null},usePlayerColor:!0,sounds:{movement:`step1`,attack:`laser`}},Gunboat:{symbol:`O`,name:`구급함`,unitClass:`naval`,maxHp:10,hp:10,move:2,minRange:1,maxRange:2,minDamage:4,maxDamage:6,attack:5,model:`assets/boat1.obj`,scale:.2,rotation:0,attackEffect:`projectile`,footprintTexture:`assets/textures/tracks3.png`,terrainCosts:{WATER:1,SAND:null,GRASS:null,CONCRETE:null,FOREST:null,MOUNTAIN:null},usePlayerColor:!0,replaceColor:2242575,sounds:{movement:`battleship_movement`,attack:`rlauncher1`}},AttackBoat:{symbol:`M`,name:`공격정`,unitClass:`naval`,maxHp:7,hp:7,move:4,minRange:1,maxRange:2,minDamage:4,maxDamage:6,attack:5,model:`assets/units/manta-attack-boat.glb`,scale:.18,rotation:0,attackEffect:`flak`,footprintTexture:null,terrainCosts:{WATER:1,SAND:null,GRASS:null,CONCRETE:null,FOREST:null,MOUNTAIN:null},usePlayerColor:!1,rawMaterials:!0,authoredMaterialsOnly:!0,sounds:{movement:`battleship_movement`,attack:`cannon`}},Bulwark:{symbol:`O`,name:`방패`,unitClass:`tank`,maxHp:10,hp:10,move:2,minRange:1,maxRange:1,minDamage:4,maxDamage:6,attack:5,model:`assets/units/bulwark-heavy-tank.glb`,scale:.2,rotation:0,attackEffect:`cannon`,footprintTexture:`assets/textures/tracks2.png`,terrainCosts:{WATER:null,SAND:1,GRASS:1,CONCRETE:1,FOREST:2,MOUNTAIN:null},usePlayerColor:!1,teamColorMaterial:`teamCamo`,rawMaterials:!0,sounds:{movement:`engine_heavy`,attack:`rlauncher2`}},Kestrel:{symbol:`O`,name:`케스트럴`,unitClass:`artillery`,maxHp:3,hp:3,move:2,minRange:2,maxRange:3,minDamage:3,maxDamage:5,attack:4,model:`assets/units/kestrel-bombard-artillery.glb`,scale:.16,rotation:0,attackEffect:`rocketBarrage`,footprintTexture:`assets/textures/tracks2.png`,terrainCosts:{WATER:null,SAND:1,GRASS:1,CONCRETE:1,FOREST:2,MOUNTAIN:null},usePlayerColor:!1,teamColorMaterial:`teamCamo`,rawMaterials:!0,sounds:{movement:`engine_light`,attack:`rlauncher2`}},Sabre:{symbol:`O`,name:`세이버`,unitClass:`tank`,maxHp:5,hp:5,move:3,minRange:1,maxRange:1,minDamage:4,maxDamage:6,attack:5,model:`assets/units/sabre-medium-tank.glb`,scale:.18,rotation:0,attackEffect:`cannon`,footprintTexture:`assets/textures/tracks2.png`,terrainCosts:{WATER:null,SAND:1,GRASS:1,CONCRETE:1,FOREST:2,MOUNTAIN:null},usePlayerColor:!1,teamColorMaterial:`teamCamo`,rawMaterials:!0,sounds:{movement:`engine_heavy`,attack:`rlauncher2`}},Pike:{symbol:`E`,name:`파이크`,unitClass:`infantry`,canCapture:!0,maxHp:4,hp:4,move:2,minRange:1,maxRange:1,minDamage:2,maxDamage:4,attack:3,model:`assets/units/infantry-squad.glb`,scale:.35,rotation:0,attackEffect:`laser`,extraSkills:[Fe,Ie],footprintTexture:null,terrainCosts:{WATER:null,SAND:1,GRASS:1,CONCRETE:1,FOREST:1,MOUNTAIN:2},usePlayerColor:!1,teamColorMaterial:`teamCamo`,sounds:{movement:`step1`,attack:`laser`}},Drover:{symbol:`A`,name:`드라버`,unitClass:`tank`,maxHp:6,hp:6,move:3,minRange:1,maxRange:1,minDamage:3,maxDamage:5,attack:4,model:`assets/units/drover-apc.glb`,scale:.22,rotation:0,attackEffect:`cannon`,capacity:1,carries:[`infantry`],extraSkills:[Le,Re],footprintTexture:`assets/textures/tracks2.png`,terrainCosts:{WATER:null,SAND:1,GRASS:1,CONCRETE:1,FOREST:1.5,MOUNTAIN:null},usePlayerColor:!1,teamColorMaterial:`teamCamo`,rawMaterials:!0,sounds:{movement:`engine_light`,attack:`rlauncher1`}},Halberd:{symbol:`H`,name:`할버드`,unitClass:`aa`,maxHp:8,hp:8,move:3,minRange:1,maxRange:2,minDamage:4,maxDamage:6,attack:5,model:`assets/units/halberd-aa-tank.glb`,scale:.2,rotation:0,attackEffect:`flak`,footprintTexture:`assets/textures/tracks2.png`,terrainCosts:{WATER:null,SAND:1,GRASS:1,CONCRETE:1,FOREST:2,MOUNTAIN:null},usePlayerColor:!1,teamColorMaterial:`teamCamo`,rawMaterials:!0,sounds:{movement:`engine_heavy`,attack:`cannon`}},Lynx:{symbol:`L`,name:`링스`,unitClass:`tank`,maxHp:5,hp:5,move:4,minRange:1,maxRange:1,minDamage:2,maxDamage:4,attack:3,model:`assets/units/lynx-light-ifv.glb`,scale:.22,rotation:0,attackEffect:`cannon`,footprintTexture:`assets/textures/tracks2.png`,terrainCosts:{WATER:null,SAND:1,GRASS:1,CONCRETE:1,FOREST:1.5,MOUNTAIN:null},usePlayerColor:!1,teamColorMaterial:`teamCamo`,rawMaterials:!0,sounds:{movement:`engine_light`,attack:`rlauncher1`}},Nightjar:{symbol:`N`,name:`나이트자`,unitClass:`air`,maxHp:6,hp:6,move:4,minRange:1,maxRange:1,minDamage:4,maxDamage:6,attack:5,model:`assets/units/nightjar-attack-helo.glb`,scale:.165,rotation:0,flightAltitude:4.3,airGlyph:`helo`,attackEffect:`rocketVolley`,footprintTexture:null,terrainCosts:{WATER:1,SAND:1,GRASS:1,CONCRETE:1,FOREST:1,MOUNTAIN:1},usePlayerColor:!1,teamColorMaterial:`teamCamo`,rawMaterials:!0,sounds:{movement:`rotor`,attack:`rlauncher2`}},Shrike:{symbol:`S`,name:`슈라이크`,unitClass:`air`,maxHp:4,hp:4,move:5,minRange:1,maxRange:1,minDamage:6,maxDamage:9,attack:7,model:`assets/units/shrike-attack-jet.glb`,scale:.18,rotation:0,flightAltitude:5.8,airGlyph:`jet`,attackEffect:`projectile`,footprintTexture:null,terrainCosts:{WATER:1,SAND:1,GRASS:1,CONCRETE:1,FOREST:1,MOUNTAIN:1},usePlayerColor:!1,teamColorMaterial:`teamCarbon`,rawMaterials:!0,sounds:{movement:`jet`,attack:`rlauncher3`}},Kloss:{symbol:`K`,name:`클로스`,unitClass:`tank`,maxHp:99,hp:99,move:2,minRange:1,maxRange:1,minDamage:1,maxDamage:1,attack:1,model:`primitive:box`,scale:1,rotation:0,attackEffect:`cannon`,footprintTexture:`assets/textures/tracks2.png`,terrainCosts:{WATER:null,SAND:1,GRASS:1,CONCRETE:1,FOREST:1.5,MOUNTAIN:null},usePlayerColor:!0,sounds:{movement:`engine_heavy`,attack:`rlauncher2`}},Pyramid:{symbol:`A`,name:`피라미드`,unitClass:`artillery`,vital:!0,maxHp:2,hp:2,move:2,minRange:2,maxRange:2,minDamage:4,maxDamage:6,attack:5,model:`primitive:pyramid`,scale:1,rotation:0,attackEffect:`cannon`,footprintTexture:`assets/textures/tracks2.png`,terrainCosts:{WATER:null,SAND:1,GRASS:1,CONCRETE:1,FOREST:1.5,MOUNTAIN:null},usePlayerColor:!0,sounds:{movement:`engine_heavy`,attack:`rlauncher2`}},Boll:{symbol:`B`,name:`볼`,unitClass:`tank`,maxHp:14,hp:14,move:4,minRange:1,maxRange:1,minDamage:5,maxDamage:7,attack:6,model:`primitive:sphere`,scale:1,rotation:0,attackEffect:`cannon`,footprintTexture:`assets/textures/tracks2.png`,terrainCosts:{WATER:null,SAND:1,GRASS:1,CONCRETE:1,FOREST:1.5,MOUNTAIN:null},usePlayerColor:!0,sounds:{movement:`engine_heavy`,attack:`rlauncher2`}}},M=Ue,We={aa:{air:2,tank:.5},tank:{aa:2,air:.5},air:{tank:2,aa:.5}};function Ge(e){let t=M[e]?.unitClass;return!!t&&Pe.includes(t)}function N(e,t){let n=M[e]?.unitClass;return M[t]?.unitClass!==`air`||n!==`artillery`&&n!==`infantry`}function Ke(e,t){let n=M[e]?.unitClass,r=M[t]?.unitClass;return!n||!r?1:We[n]?.[r]??1}function qe(e,t){return M[e].terrainCosts[t]}function Je(e,t,n){return e&&(n&&t!==`air`&&t!==`naval`?.5:e)}function Ye(e){return!!M[e]?.vital}var Xe=new Map;function Ze(e){let t=Xe.get(e);if(!t){let n=M[e];if(!n)return[];t=[Ne(e,n),...n.extraSkills??[]],Xe.set(e,t)}return t}function Qe(e){return Ze(e)[0]}function P(e,t){return Ze(e).find(e=>e.id===t)}var F=class{static{this.terrainTypes=ae}static get terrainTypesRecord(){return oe}static{this.getTerrainColor=se}static{this.getTerrainName=ce}static{this.getTerrainBaseHeight=le}static{this.getTerrainHeightVariation=ue}static{this.getTerrainHeightModifier=de}static{this.getTerrainThreshold=fe}static{this.isImpassable=pe}static getMoveCost(e,t){let n=A().map.getTile(e.userData.q,e.userData.r),r=e.userData.type?.toUpperCase();return Je(qe(t.type,r),M[t.type]?.unitClass,!!n?.hasRoad)||0}static getHeight(e){let t=(e?.children?.find(e=>e instanceof THREE.Mesh&&!e.userData.isBoundingMesh))?.geometry?.attributes?.position;return t&&t.count>13?t.getY(13):e?.userData?.height||0}static getTerrainTypeFromNoise(e){let t=Object.entries(this.terrainTypesRecord).filter(([e])=>e!==`CONCRETE`).sort(([,e],[,t])=>e.threshold-t.threshold);for(let[n,r]of t)if(e<=r.threshold)return n;return`MOUNTAIN`}static getPlacementHeight(e){return Math.min(this.getHeight(e),e.userData.height)}static getTerrainMaterial(e){return this.terrainTypesRecord[e]?.material||this.terrainTypes.GRASS.material}static getLerpedTerrainColor(e,t=Math.random){let n=Object.entries(this.terrainTypesRecord).filter(([e])=>e!==`CONCRETE`).sort(([,e],[,t])=>e.threshold-t.threshold),r=null,i=null,a=0,o=1;for(let t=0;t<n.length;t++){let[s,c]=n[t];if(e<=c.threshold){r=s,a=t>0?n[t-1][1].threshold:0,i=t<n.length-1?n[t+1][0]:s,o=c.threshold;break}}if(!r){let e=n[n.length-1][0];return this.getTerrainColor(e)}if(r===`WATER`)return(e-a)/(this.terrainTypes.SAND.threshold-a),new THREE.Color(this.getTerrainColor(`WATER`)).getHex();let s=(e-a)/(o-a),c=new THREE.Color(this.getTerrainColor(r)),l=new THREE.Color(this.getTerrainColor(i)),u=new THREE.Color;return u.r=c.r+(l.r-c.r)*s,u.g=c.g+(l.g-c.g)*s,u.b=c.b+(l.b-c.b)*s,D(u,.05,t).getHex()}},$e={mirror8:{rows:8,cols:8},rotor12x18:{rows:18,cols:12},ford10:{rows:10,cols:10},crown14:{rows:14,cols:14},random20:{rows:20,cols:20},random30:{rows:30,cols:30},random30fixed:{rows:30,cols:30},random50:{rows:50,cols:50},choke:{rows:10,cols:7},chokeRetreat:{rows:10,cols:7},chokeTwin:{rows:9,cols:8},grove:{rows:3,cols:17}},et=`rotor12x18`;function tt(e){return typeof window>`u`||!window.location?.search?null:new URLSearchParams(window.location.search).get(e)}function nt(){let e=tt(`map`);return e&&$e[e]?e:et}var rt=nt(),it=tt(`mode`),at=tt(`difficulty`),I={ROWS:$e[rt].rows,COLS:$e[rt].cols,HEX_RADIUS:1,TILT_ANGLE:0,CAMERA:{INITIAL_HEIGHT:15,MIN_HEIGHT:15,MAX_HEIGHT:50,ZOOM_SPEED:1},MINIMAP:{WIDTH:300,HEIGHT:300,TOP:56}},ot={PERLIN_SCALE:10,VALLEY_OFFSET:.6,HEIGHT_SCALE:1.2},st=[{id:`human`,color:671986,units:[]},{id:`cpu1`,color:16732160,units:[]}],ct={VISIBLE_AREA:16777215,SELECTED:65280,MOVE_RANGE:16449440,ATTACK_RANGE:9109504,CANT_ATTACK:8421504,OWN_UNIT:4244735,SKILL_TARGET:16747546},lt={UNIT_OFFSET:0,PATH_HEIGHT:.2,HIGHLIGHT_OFFSET:.1,FOOTPRINT_OFFSET:.01},ut=`#3A2B1B`,dt=`vibewars.viewOptions`,ft={grid:!0,textures:!0,minimap:!1,bloom:!1,stats:!1,grass:!0};function pt(){try{let e=typeof localStorage<`u`?localStorage.getItem(dt):null;if(!e)return{...ft};let t=JSON.parse(e);return{grid:typeof t.grid==`boolean`?t.grid:ft.grid,textures:typeof t.textures==`boolean`?t.textures:ft.textures,minimap:typeof t.minimap==`boolean`?t.minimap:ft.minimap,bloom:typeof t.bloom==`boolean`?t.bloom:ft.bloom,stats:typeof t.stats==`boolean`?t.stats:ft.stats,grass:typeof t.grass==`boolean`?t.grass:ft.grass}}catch{return{...ft}}}var L=pt(),mt={showGrid:{value:+!!L.grid},showTextures:{value:+!!L.textures}},ht=[];function gt(e,t){L[e]=t,mt.showGrid.value=+!!L.grid,mt.showTextures.value=+!!L.textures;try{typeof localStorage<`u`&&localStorage.setItem(dt,JSON.stringify(L))}catch{}for(let e of ht)e(L)}function _t(e){return gt(e,!L[e]),L[e]}var vt=`assets/textures/waternormals.jpg`,yt=.25,bt=.4,xt=.08,St=Object.freeze({large:10,medium:5,small:2.5}),Ct=.018,wt=Object.freeze([Object.freeze({x:0,y:1,wavelength:St.large}),Object.freeze({x:.5,y:.8660254037844386,wavelength:St.medium}),Object.freeze({x:.8660254037844386,y:.5,wavelength:St.small})]),Tt=.64,Et=null;function Dt(){return Et||(Et=new THREE.TextureLoader().load(vt),Et.wrapS=THREE.RepeatWrapping,Et.wrapT=THREE.RepeatWrapping,Et)}function Ot(){return{time:{value:0},waveA:{value:new THREE.Vector4(wt[0].x,wt[0].y,bt,wt[0].wavelength)},waveB:{value:new THREE.Vector4(wt[1].x,wt[1].y,bt,wt[1].wavelength)},waveC:{value:new THREE.Vector4(wt[2].x,wt[2].y,bt,wt[2].wavelength)}}}function kt(e,t,n){let r=n*yt,i=0;for(let n of wt){let a=Math.hypot(n.x,n.y),o=n.x/a,s=n.y/a,c=2*Math.PI/n.wavelength,l=Math.sqrt(9.8/c),u=c*(o*e+s*-t-l*r*4);i+=bt/c*Math.sin(u)}return i*xt}var At=`
    uniform float time;
    uniform vec4 waveA;
    uniform vec4 waveB;
    uniform vec4 waveC;

    vec3 GerstnerWave(vec4 wave, vec3 p) {
        float k = 2.0 * PI / wave.w;
        float c = sqrt(9.8 / k);
        vec2 d = normalize(wave.xy);
        float f = k * (dot(d, p.xy) - c * time * ${4 .toFixed(1)});
        float a = wave.z / k;
        return vec3(d.x * a * cos(f), d.y * a * cos(f), a * sin(f));
    }
`,jt=`
    void AccumulateGerstnerFrame(
        vec4 wave,
        vec3 p,
        float displacementScale,
        inout vec3 tangent,
        inout vec3 binormal
    ) {
        float k = 2.0 * PI / wave.w;
        float c = sqrt(9.8 / k);
        vec2 d = normalize(wave.xy);
        float f = k * (dot(d, p.xy) - c * time * ${4 .toFixed(1)});
        float q = wave.z * displacementScale;
        tangent += vec3(
            -d.x * d.x * q * sin(f),
            -d.x * d.y * q * sin(f),
             d.x * q * cos(f)
        );
        binormal += vec3(
            -d.x * d.y * q * sin(f),
            -d.y * d.y * q * sin(f),
             d.y * q * cos(f)
        );
    }

    void GerstnerBasis(
        vec3 p,
        float displacementScale,
        out vec3 tangent,
        out vec3 binormal,
        out vec3 surfaceNormal
    ) {
        tangent = vec3(1.0, 0.0, 0.0);
        binormal = vec3(0.0, 1.0, 0.0);
        AccumulateGerstnerFrame(waveA, p, displacementScale, tangent, binormal);
        AccumulateGerstnerFrame(waveB, p, displacementScale, tangent, binormal);
        AccumulateGerstnerFrame(waveC, p, displacementScale, tangent, binormal);
        tangent = normalize(tangent);
        binormal = normalize(binormal);
        surfaceNormal = normalize(cross(tangent, binormal));
    }
`,Mt=`
    uniform float time;
    uniform float size;
    uniform sampler2D normalSampler;

    vec4 getNoise( vec2 uv ) {
        vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
        vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
        vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
        vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
        vec4 noise = texture2D( normalSampler, uv0 ) +
            texture2D( normalSampler, uv1 ) +
            texture2D( normalSampler, uv2 ) +
            texture2D( normalSampler, uv3 );
        return noise * 0.5 - 1.0;
    }
`,Nt=new Set([`SAND`,`GRASS`,`FOREST`,`MOUNTAIN`,`CONCRETE`]),Pt=`
    float groundHash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    float groundNoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(
            mix(groundHash(i), groundHash(i + vec2(1.0, 0.0)), u.x),
            mix(groundHash(i + vec2(0.0, 1.0)), groundHash(i + vec2(1.0, 1.0)), u.x),
            u.y
        );
    }

    float groundFbm(vec2 p) {
        float value = 0.0;
        float amplitude = 0.5;
        for (int i = 0; i < 4; i++) {
            value += amplitude * groundNoise(p);
            p = p * 2.03 + vec2(17.31, 9.17);
            amplitude *= 0.5;
        }
        return value;
    }

    // Band-limit for procedural detail -- the shader-side analogue of a
    // mipmap. Pass the SAME coordinate a noise term samples with (its
    // frequency already multiplied in); fwidth then measures how many
    // noise cycles one pixel spans, and the fade rolls the term off as it
    // approaches the Nyquist limit. High-frequency grain sampled past
    // that limit cannot resolve -- it can only shimmer and moire.
    // Callers mix the term toward its mean (0.5) by this factor.
    // Thresholds sit ABOVE the textbook Nyquist point on purpose: at 0.35
    // cycles/pixel the fade was already eating the grain at gameplay zoom
    // and the grass went flat. Let it shimmer slightly at the margin and
    // only kill it when it truly cannot resolve.
    float groundDetailFade(vec2 sampleCoord) {
        float fw = max(fwidth(sampleCoord.x), fwidth(sampleCoord.y));
        return 1.0 - smoothstep(0.8, 1.6, fw);
    }
`,Ft=Pt+`
    // Smooth 3D value noise for rock volumes. Sampling world XYZ instead of
    // only XZ keeps the same mineral structure across tops and steep faces.
    float groundNoise3(vec3 p) {
        vec3 i = floor(p);
        vec3 f = fract(p);
        vec3 u = f * f * (3.0 - 2.0 * f);
        vec2 zStride = vec2(37.0, 17.0);
        float n000 = groundHash(i.xy + (i.z + 0.0) * zStride);
        float n100 = groundHash(i.xy + vec2(1.0, 0.0) + (i.z + 0.0) * zStride);
        float n010 = groundHash(i.xy + vec2(0.0, 1.0) + (i.z + 0.0) * zStride);
        float n110 = groundHash(i.xy + vec2(1.0, 1.0) + (i.z + 0.0) * zStride);
        float n001 = groundHash(i.xy + (i.z + 1.0) * zStride);
        float n101 = groundHash(i.xy + vec2(1.0, 0.0) + (i.z + 1.0) * zStride);
        float n011 = groundHash(i.xy + vec2(0.0, 1.0) + (i.z + 1.0) * zStride);
        float n111 = groundHash(i.xy + vec2(1.0, 1.0) + (i.z + 1.0) * zStride);
        float z0 = mix(mix(n000, n100, u.x), mix(n010, n110, u.x), u.y);
        float z1 = mix(mix(n001, n101, u.x), mix(n011, n111, u.x), u.y);
        return mix(z0, z1, u.z);
    }

    float groundFbm3(vec3 p) {
        float value = 0.0;
        float amplitude = 0.5;
        for (int i = 0; i < 4; i++) {
            value += amplitude * groundNoise3(p);
            p = p * 2.03 + vec3(17.31, 9.17, 13.73);
            amplitude *= 0.5;
        }
        return value;
    }

    // Cellular (voronoi) noise: x = distance to the nearest feature point,
    // y = to the second nearest, z = the nearest cell's own hash. x makes
    // round things (pebbles), y - x is ~0 along cell borders (rock cracks),
    // z tints each cell as one object instead of a continuous gradient.
    vec3 groundVoronoi(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        float f1 = 8.0;
        float f2 = 8.0;
        float id = 0.0;
        for (int x = -1; x <= 1; x++) {
            for (int yy = -1; yy <= 1; yy++) {
                vec2 g = vec2(float(x), float(yy));
                float h = groundHash(i + g);
                vec2 o = vec2(h, groundHash(i + g + vec2(31.7, 17.3)));
                vec2 r = g + o - f;
                float d = dot(r, r);
                if (d < f1) { f2 = f1; f1 = d; id = h; }
                else if (d < f2) { f2 = d; }
            }
        }
        return vec3(sqrt(f1), sqrt(f2), id);
    }

    vec3 groundTriplanarWeights(vec3 worldNormal) {
        vec3 weights = pow(abs(worldNormal), vec3(5.0));
        return weights / max(weights.x + weights.y + weights.z, 0.0001);
    }

    vec3 groundTriplanarVoronoi(vec3 p, vec3 worldNormal) {
        vec3 weights = groundTriplanarWeights(worldNormal);
        vec3 fromX = groundVoronoi(p.yz + vec2(11.7, 3.1));
        vec3 fromY = groundVoronoi(p.xz + vec2(5.3, 17.9));
        vec3 fromZ = groundVoronoi(p.xy + vec2(23.4, 7.6));
        return fromX * weights.x + fromY * weights.y + fromZ * weights.z;
    }

    float groundTriplanarFbm(vec3 p, vec3 worldNormal) {
        vec3 weights = groundTriplanarWeights(worldNormal);
        return groundFbm(p.yz + vec2(2.9, 13.7)) * weights.x
            + groundFbm(p.xz + vec2(19.1, 4.2)) * weights.y
            + groundFbm(p.xy + vec2(7.4, 21.3)) * weights.z;
    }

    vec3 groundHeightWorldNormal(
        vec3 worldPos,
        vec3 worldNormal,
        float height,
        float strength
    ) {
        vec3 sigX = dFdx(worldPos);
        vec3 sigY = dFdy(worldPos);
        vec3 r1 = cross(sigY, worldNormal);
        vec3 r2 = cross(worldNormal, sigX);
        float det = dot(sigX, r1);
        if (abs(det) < 0.0000001) return worldNormal;
        vec2 dH = vec2(dFdx(height), dFdy(height)) * strength;
        vec3 gradient = sign(det) * (dH.x * r1 + dH.y * r2);
        return normalize(abs(det) * worldNormal - gradient);
    }

    // Shared lower-rock relief. x = per-block tint/height, y = fissure,
    // z = ridge, w = moss. Both the mountain foothill and the shoreline call
    // this exact function; the coast is no longer a second imitation of rock.
    vec4 groundFoothillRockFields(vec2 worldXZ, vec2 warp) {
        vec3 plate = groundVoronoi(worldXZ * 1.3 + warp * 1.2);
        float crackZone = smoothstep(
            0.62,
            0.86,
            groundFbm(worldXZ * 1.3 + warp * 1.6)
        );
        float crack = (1.0 - smoothstep(0.02, 0.14, plate.y - plate.x))
            * crackZone;
        float ridge = 1.0 - abs(2.0 * groundFbm(worldXZ * 5.0) - 1.0);
        float moss = smoothstep(
            0.40,
            0.75,
            groundFbm(worldXZ * 3.5 + warp * 1.8)
        );
        return vec4(plate.z, crack, ridge, moss);
    }

    float groundFoothillRockHeight(vec4 fields, float mossStrength) {
        return fields.x * 0.5 + fields.z * 0.40 - fields.y * 0.7
            + fields.w * mossStrength * 0.3;
    }

`,It=`
    // Normalised inward distance from the nearest edge that actually borders
    // water. A shoreline tile spans roughly 0..1.73 from its water edge to
    // the opposite land edge. Using that real spatial signal lets rock turn
    // into soil and then grass *inside* the tile, so the material is already
    // turf by the time it reaches its inland neighbour.
    float waterEdgeDistance(vec2 local, vec3 shoreA, vec3 shoreB) {
        float d = 10.0;
        d = min(d, mix(10.0, 0.8660254 - dot(local, vec2(cos(0.5 * 1.0471975512), sin(0.5 * 1.0471975512))), step(0.5, shoreA.x)));
        d = min(d, mix(10.0, 0.8660254 - dot(local, vec2(cos(1.5 * 1.0471975512), sin(1.5 * 1.0471975512))), step(0.5, shoreA.y)));
        d = min(d, mix(10.0, 0.8660254 - dot(local, vec2(cos(2.5 * 1.0471975512), sin(2.5 * 1.0471975512))), step(0.5, shoreA.z)));
        d = min(d, mix(10.0, 0.8660254 - dot(local, vec2(cos(3.5 * 1.0471975512), sin(3.5 * 1.0471975512))), step(0.5, shoreB.x)));
        d = min(d, mix(10.0, 0.8660254 - dot(local, vec2(cos(4.5 * 1.0471975512), sin(4.5 * 1.0471975512))), step(0.5, shoreB.y)));
        d = min(d, mix(10.0, 0.8660254 - dot(local, vec2(cos(5.5 * 1.0471975512), sin(5.5 * 1.0471975512))), step(0.5, shoreB.z)));
        return d;
    }

    float waterEdgePresence(vec3 shoreA, vec3 shoreB) {
        return step(0.5, max(max(max(shoreA.x, shoreA.y), shoreA.z), max(max(shoreB.x, shoreB.y), shoreB.z)));
    }

    // Distance to the nearest of the six hex edges, used by the grid.
    float hexEdgeDistance(vec2 local) {
        float d = 10.0;
        for (int i = 0; i < 6; i++) {
            float th = (float(i) + 0.5) * 1.0471975512;
            d = min(d, 0.8660254 - dot(local, vec2(cos(th), sin(th))));
        }
        return d;
    }

    // The grid overlay itself, as a 0..1 mask. Drawn from tile-local
    // coordinates rather than as line geometry, so it follows the terrain
    // over every slope and crater for free and costs no extra objects.
    float hexGridLine(vec2 local, float enabled) {
        if (enabled < 0.5) return 0.0;
        return 1.0 - smoothstep(0.0, 0.05, hexEdgeDistance(local));
    }

`,Lt=`vec3(0.04, 0.05, 0.07)`,Rt=`0.8`,zt=`
    {
        vec2 gp = vGroundWorldPos.xz;
        float y = vGroundWorldPos.y;
        gRockSheen = 0.0;
        gShoreStone = 0.0;
        gGrassSurface = 0.0;
        // Shared border wobble so the band lines meander organically
        // instead of tracing flat contour lines.
        float wob = groundFbm(gp * 2.2) - 0.5;

        // Band masks up the height ladder. These MUST track
        // TerrainSystem's baseHeight/heightVariation table: the shader
        // decides the look from world height alone, so lifting the terrain
        // without moving these repaints grass as forest and forest as rock.
        // Current table: lowland 0.70-0.85, grass 0.90-1.20, forest 1.10-1.70,
        // mountain 1.60-6.10.
        float toForest = smoothstep(1.04, 1.24, y + wob * 0.14);
        float toRock   = smoothstep(1.60, 2.05, y + wob * 0.30);

        // What each band is actually WORTH once the bands above it have had
        // their say -- the mix chain at the bottom is
        //   low*(1-toForest)(1-toRock) + forest*toForest(1-toRock)
        //   + rock*toRock
        // and a band whose weight is zero cannot change a single pixel.
        //
        // Every band used to be computed for every fragment and then
        // multiplied away, which is where this shader's time went: a lowland
        // pixel paid for the rock band's voronoi (nine cells, eighteen
        // hashes), its crack zones, its ridges and its lichen; a mountain
        // top paid for lowland detail it is two kilometres above.
        //
        // The gates are exact, not approximate: smoothstep returns exactly
        // 0 and exactly 1 outside its edges, so this skips only terms that
        // were already contributing nothing. Nothing about the picture
        // changes. And the branches are coherent in practice -- a warp of
        // neighbouring fragments is almost always inside one band, and
        // where it straddles a boundary both sides run and it costs what it
        // always did.
        float wRock   = toRock;
        float wForest = toForest * (1.0 - toRock);
        float wLow    = (1.0 - toForest) * (1.0 - toRock);

        // Hoisted OUT of the branches on purpose: groundDetailFade takes
        // fwidth, and a derivative inside control flow some lanes skip is
        // undefined -- the one thing that makes this restructuring unsafe
        // if done carelessly. They are pure gradient math with no hashes in
        // them, so computing them unconditionally costs nothing.
        float fade36 = groundDetailFade(gp * 36.0);
        float fade52 = groundDetailFade(gp * 52.0);
        float fade11 = groundDetailFade(gp * 11.0);
        float fade16 = groundDetailFade(gp * 16.0);

        // Cheap enough to keep in the open, and the texture-toggle path
        // below needs it whether or not the rock band is live.
        float rockLum = dot(uRockColor, vec3(0.299, 0.587, 0.114));

        // Shared domain warp: every band's patchwork is bent through the
        // same low-frequency field, so patches meander organically instead
        // of showing value-noise's axis-aligned blobbiness.
        vec2 warp = vec2(groundFbm(gp * 1.1), groundFbm(gp * 1.1 + vec2(5.2, 1.3))) - 0.5;

        // --- The LOW band: coastline stone closing directly into grass.
        // This is the old grass-front mask unchanged; only the material on
        // its low side has been replaced.
        vec3 lowC = vec3(0.0);
        float lowH = 0.0;
        float grassMask = 0.0;
        vec3 grassC = vec3(0.0);
        if (wLow > 0.0) {
            // Inland tiles retain the established height-driven front. On a
            // tile that actually touches water, however, the authoritative
            // coordinate is distance inward from that water edge. It reaches
            // full turf before the opposite tile boundary, eliminating the
            // material seam between coastline and grass tiles.
            float trans = smoothstep(0.70, 0.98, y + wob * 0.10);
            float clump = groundFbm(gp * 4.5 + warp * 3.5);
            float heightFront = trans * 0.75 + clump * 0.45;
            // Build an overlapping material transition rather than one
            // grass/stone contour. Broad patches establish the terrain front;
            // independent breakup fields will place soil, stone remnants and
            // grass tufts at different positions inside that front.
            float materialPatches = groundFbm(
                gp * 2.15 + warp * 4.2 + vec2(13.7, 4.9)
            );
            float materialBreakup = groundFbm(
                gp * 8.4 + warp * 1.7 + vec2(3.1, 19.6)
            );
            float shorePresence = waterEdgePresence(vShoreA, vShoreB);
            float shoreDistance = waterEdgeDistance(
                vTileLocal / uHexRadius,
                vShoreA,
                vShoreB
            );
            float shoreProgress = clamp(
                (shoreDistance - 0.12) / 1.34
                    + (materialPatches - 0.5) * 0.20,
                0.0,
                1.0
            );
            float front = mix(heightFront, shoreProgress, shorePresence);

            // A legacy SAND/coastline tile can sit one row inland, behind
            // another coastline tile. It then has no water-facing edge, so
            // shoreDistance carries no useful direction. The old fallback
            // painted the entire low tile as rock and exposed its exact hex
            // silhouette. Keep a broken dirty/rocky patch in its interior,
            // but force full turf around every boundary so it dissolves into
            // all neighbouring land materials instead of becoming one gray
            // hex stamped into the meadow.
            float orphanCoast = uIsCoastTile * (1.0 - shorePresence);
            float orphanInterior = smoothstep(
                0.08,
                0.72,
                hexEdgeDistance(vTileLocal / uHexRadius)
            );
            float orphanProgress = mix(1.15, 0.54, orphanInterior)
                + (materialPatches - 0.5) * 0.18;
            front = mix(front, orphanProgress, orphanCoast);
            float grassCoverageField = front
                + (materialPatches - 0.5) * 0.20
                + (materialBreakup - 0.5) * 0.08;
            float soilPatches = groundFbm(
                gp * 5.1 + warp * 2.8 + vec2(22.4, 7.6)
            );
            float grassTufts = groundFbm(
                gp * 7.3 + warp * 1.9 + vec2(5.8, 27.1)
            );
            float soilField = grassCoverageField
                + (soilPatches - 0.5) * 0.22;
            float turfField = grassCoverageField
                + (grassTufts - 0.5) * 0.20
                + (materialPatches - 0.5) * 0.08;
            // Deliberately overlapping, wide masks: scattered soil begins
            // close to the wet stone, while continuous turf only closes over
            // it near the inland edge. There is no shared threshold capable
            // of drawing a dark outline between the two materials.
            float soilMask = smoothstep(0.14, 0.72, soilField);
            grassMask = smoothstep(0.60, 0.96, turfField);

            // Exact coastline material, now the LOW material itself rather
            // than a later overlay. It is triplanar so the same blocks carry
            // continuously over top faces and the vertical water edge.
            vec3 coastWorldNormal = normalize(cross(
                dFdx(vGroundWorldPos),
                dFdy(vGroundWorldPos)
            ));
            float coastMacro = groundFbm3(
                vGroundWorldPos * 0.42 + vec3(3.8, 7.1, 11.6)
            );
            vec3 coastWarp3 = vec3(
                groundNoise3(vGroundWorldPos * 0.71 + vec3(3.1, 11.7, 5.4)),
                groundNoise3(vGroundWorldPos * 0.71 + vec3(17.3, 2.8, 9.6)),
                groundNoise3(vGroundWorldPos * 0.71 + vec3(7.9, 19.4, 1.2))
            ) - 0.5;
            vec3 coastCell = groundTriplanarVoronoi(
                vGroundWorldPos * 1.12 + coastWarp3 * 0.92,
                coastWorldNormal
            );
            float coastMedium = groundTriplanarFbm(
                vGroundWorldPos * 3.65 + coastWarp3 * 1.8,
                coastWorldNormal
            );
            float coastGrain = groundNoise3(
                vGroundWorldPos * 11.0 + vec3(12.4, 4.7, 18.1)
            );
            float blockCrown = 1.0 - smoothstep(0.10, 0.79, coastCell.x);
            float cavityLine = 1.0 - smoothstep(
                0.035,
                0.145,
                coastCell.y - coastCell.x
            );
            float cavityBreak = smoothstep(
                0.43,
                0.62,
                coastMedium * 0.62 + coastGrain * 0.38
            );
            float cavity = cavityLine * cavityBreak;
            float facet = smoothstep(
                0.48,
                0.74,
                blockCrown * 0.50 + coastMedium * 0.30 + coastMacro * 0.20
            );
            float coastHeight = coastMacro * 0.30 + blockCrown * 0.48
                + coastMedium * 0.14 + facet * 0.15 + coastGrain * 0.025
                - cavity * 0.54;
            vec3 coastNormal = groundHeightWorldNormal(
                vGroundWorldPos,
                coastWorldNormal,
                coastHeight,
                0.74
            );
            float coastSun = smoothstep(
                -0.28,
                0.76,
                dot(coastNormal, normalize(uSunDirection))
            );
            vec3 coastStone = mix(
                vec3(0.18, 0.17, 0.155),
                vec3(0.43, 0.40, 0.35),
                clamp(
                    coastCell.z * 0.16 + coastMacro * 0.43
                        + coastMedium * 0.41,
                    0.0,
                    1.0
                )
            );
            coastStone = mix(
                coastStone,
                vec3(0.60, 0.56, 0.49),
                facet * coastSun * 0.30
            );
            coastStone *= mix(0.72, 1.10, coastSun);
            coastStone *= 0.94 + coastGrain * 0.11;
            coastStone = mix(
                coastStone,
                coastStone * vec3(0.48, 0.46, 0.43),
                cavity * 0.68
            );
            vec3 dampCoastStone = pow(
                max(coastStone, vec3(0.0)),
                vec3(1.18)
            ) * vec3(0.70, 0.73, 0.75);
            coastStone = mix(coastStone, dampCoastStone, 0.72);

            // Colour only: retain the established luminance, neutralise the
            // upper rock toward gray, then add a restrained beige warmth only
            // near water level. This deliberately does not brighten the rock.
            float waterWarmth = 1.0 - smoothstep(0.16, 0.72, y);
            float coastLuminance = dot(
                coastStone,
                vec3(0.299, 0.587, 0.114)
            );
            vec3 neutralGray = vec3(coastLuminance);
            // Fixed mid-light beige target: visibly brighter than the gray
            // upper rock, but capped far below white.
            vec3 waterBeige = vec3(0.34, 0.30, 0.24);
            coastStone = mix(coastStone, neutralGray, 0.44);
            coastStone = mix(coastStone, waterBeige, waterWarmth * 0.68);

            // A restrained layer of pale, weathered scuffs. This is diffuse
            // colour only -- no specular sparkle -- and reuses the existing
            // broken rock fields so it follows the surface rather than
            // reading as dots painted on top.
            float paleScuff = smoothstep(
                0.43,
                0.60,
                coastMedium * 0.58 + coastMacro * 0.24
                    + blockCrown * 0.18
            );
            float scuffBreakup = smoothstep(0.34, 0.62, coastGrain);
            paleScuff *= mix(0.45, 1.0, scuffBreakup)
                * (1.0 - cavity * 0.90);
            // Keep the pale weathering low on the coast face: almost none on
            // the upper gray rock, reaching full strength toward the water.
            float lowerCoastScuff = smoothstep(0.24, 0.82, waterWarmth);
            paleScuff *= lowerCoastScuff;
            vec3 scuffLift = mix(
                vec3(0.13, 0.13, 0.12),
                vec3(0.15, 0.125, 0.085),
                waterWarmth
            );
            coastStone += scuffLift * paleScuff;
            // A modest contrast lift makes the existing cavities and pale
            // weathering read more clearly without shifting the established
            // gray-to-beige coastline palette.
            coastStone = max(
                (coastStone - vec3(0.30)) * 1.65 + vec3(0.30),
                vec3(0.025)
            );
            coastStone *= 1.08;
            coastStone = min(coastStone, vec3(0.58, 0.54, 0.47));
            vec4 coastRoughnessFields = groundFoothillRockFields(gp, warp);
            coastHeight += groundFoothillRockHeight(
                coastRoughnessFields,
                1.0
            );

            // --- Grass: mottled meadow -- dark mossy hollows to worn
            // yellow-green, plus a fine blade-scale shimmer. Mixing between
            // two TINTS of the palette green (not scaling one) is what
            // gives the hue drift real turf has.
            float grassH = 0.0;
            // Soil already contains sparse grass flecks before the continuous
            // turf starts. Build the grass colour throughout that transition;
            // otherwise those first flecks sample the zero-initialised
            // grassC and become the dark contour we are trying to avoid.
            if (soilMask > 0.0 || grassMask > 0.0) {
                float meadow = groundFbm(gp * 2.6 + warp * 3.0);
                float blades = mix(0.5, groundNoise(gp * 36.0), fade36);
                // Fine, band-limited ground variation keeps the tile surface
                // from reading like soft painted felt. Sparse Voronoi centres
                // become tiny embedded pebbles; their low amplitude and warm
                // gray keep this as rough meadow soil, never exposed rock.
                float grassFine = mix(
                    0.5,
                    groundNoise(gp * 16.0 + vec2(19.3, 7.1)),
                    fade16
                );
                vec3 grassPebbleCell = groundVoronoi(
                    gp * 4.4 + warp * 0.85 + vec2(11.4, 23.7)
                );
                float grassPebbles = (1.0 - smoothstep(
                    0.15,
                    0.38,
                    grassPebbleCell.x
                )) * smoothstep(0.52, 0.82, grassPebbleCell.z);
                float grassPebbleBreakup = mix(
                    0.5,
                    groundNoise(gp * 11.0 + vec2(4.8, 29.1)),
                    fade11
                );
                grassPebbles *= smoothstep(0.42, 0.62, grassPebbleBreakup);
                float grassBarePatch = smoothstep(
                    0.60,
                    0.73,
                    groundFbm(gp * 3.7 + warp * 2.2 + vec2(28.1, 6.4))
                );
                grassBarePatch *= 0.45 + 0.55 * groundNoise(
                    gp * 8.5 + vec2(2.3, 17.8)
                );
                // A few wider worn/gravel patches survive the strategy
                // camera's downsampling. Their noisy edges and mixed interior
                // prevent them reading as decals or exposed coastline rock.
                float grassGravelPatch = smoothstep(
                    0.62,
                    0.75,
                    groundFbm(gp * 2.1 + warp * 2.8 + vec2(37.2, 15.4))
                        + (grassPebbleBreakup - 0.5) * 0.18
                );
                grassC = mix(uGrassColor * vec3(0.55, 0.62, 0.45),
                             uGrassColor * vec3(1.55, 1.45, 1.00), meadow);
                grassC *= 0.90 + 0.20 * blades;
                grassC *= 0.84 + 0.30 * grassFine;
                // Amplify the rounded TERRAIN slope's relation to the sun,
                // independent of GrassSystem's individual blade shader.
                // Flat ground is neutral; faces leaning toward the sun
                // brighten, while faces leaning away deepen in shade.
                vec3 grassWorldNormal = inverseTransformDirection(normalize(vTileNormal), viewMatrix);
                float grassSunDelta = dot(grassWorldNormal, uSunDirection) - uSunDirection.y;
                grassC *= clamp(1.0 + grassSunDelta * 0.90, 0.68, 1.22);
                grassC = calibrateMaterialColor(
                    grassC,
                    uGrassCalibration,
                    uGrassCalibrationBalance
                );
                vec3 grassPebbleColor = mix(
                    vec3(0.22, 0.225, 0.205),
                    vec3(0.40, 0.385, 0.34),
                    grassPebbleCell.z
                );
                vec3 wornGrassSoil = mix(
                    vec3(0.255, 0.235, 0.155),
                    uGrassColor * vec3(0.72, 0.62, 0.38),
                    meadow
                );
                vec3 meadowGravel = mix(
                    vec3(0.29, 0.285, 0.255),
                    vec3(0.39, 0.37, 0.32),
                    grassFine
                );
                grassC = mix(grassC, wornGrassSoil, grassBarePatch * 0.42);
                grassC = mix(grassC, meadowGravel, grassGravelPatch * 0.46);
                grassC = mix(grassC, grassPebbleColor, grassPebbles * 0.82);
                // Increase luminance separation across the complete grass
                // tile surface while preserving its established hue balance.
                float grassLuminance = dot(
                    grassC,
                    vec3(0.299, 0.587, 0.114)
                );
                float contrastedGrassLuminance = max(
                    (grassLuminance - 0.25) * 1.16 + 0.25,
                    0.02
                );
                grassC *= contrastedGrassLuminance
                    / max(grassLuminance, 0.02);
                grassH = meadow * 0.30 + blades * 0.10
                    + (grassFine - 0.5) * 0.22
                    + grassBarePatch * 0.075 + grassGravelPatch * 0.10
                    + grassPebbles * 0.28;
            }

            // Earth fills the broken interval between stone and full turf.
            // It deliberately varies from warm mineral dirt to mossy soil,
            // while fine rock remnants keep it from becoming a brown ribbon.
            float earthMottle = groundFbm(
                gp * 3.8 + warp * 3.1 + vec2(31.7, 12.9)
            );
            vec3 mineralEarth = mix(
                coastStone * vec3(1.08, 0.92, 0.74),
                vec3(0.31, 0.265, 0.17),
                0.68
            );
            vec3 mossEarth = mix(
                vec3(0.22, 0.215, 0.105),
                uGrassColor * vec3(0.92, 0.78, 0.46),
                0.48
            );
            vec3 earthC = mix(mineralEarth, mossEarth, earthMottle);
            earthC *= 0.90 + soilPatches * 0.20;
            float stoneRemnants = smoothstep(
                0.73,
                0.88,
                groundNoise(gp * 13.0 + warp * 2.2)
            );
            earthC = mix(earthC, coastStone, stoneRemnants * 0.42);

            // Sparse turf starts inside the soil before the full grass
            // material closes over it, so there is no single last row of
            // dirt separating all grass from all stone.
            float grassFlecks = smoothstep(
                0.54,
                0.72,
                grassTufts * 0.58 + soilField * 0.42
            );
            grassFlecks *= soilMask * (1.0 - grassMask);
            earthC = mix(earthC, grassC, grassFlecks * 0.58);

            vec3 stoneAndSoil = mix(coastStone, earthC, soilMask);
            lowC = mix(stoneAndSoil, grassC, grassMask);
            float soilH = mix(coastHeight * 0.62, soilPatches * 0.22, soilMask);
            lowH = mix(mix(coastHeight, soilH, soilMask), grassH, grassMask);
            gShoreStone = (1.0 - soilMask) * wLow;
            gGrassSurface = grassMask * wLow;
        }

        // --- Forest floor: the same recipe pitched darker and mossier.
        vec3 forestC = vec3(0.0);
        float forestH = 0.0;
        if (wForest > 0.0) {
            float moss = groundFbm(gp * 3.2 + warp * 2.2);
            forestC = mix(uForestColor * vec3(0.62, 0.72, 0.52),
                          uForestColor * vec3(1.55, 1.50, 1.10), moss);
            forestC *= 0.88 + 0.24 * groundNoise(gp * 18.0);
            forestH = moss * 0.35;
        }

        // --- Rock. Preserve the established foothill recipe verbatim: its
        // dirty, mossy forest-to-stone transition already works. A separate
        // upperRock mask introduces the smoother brown summit treatment only
        // after the mountain has risen well above that transition.
        vec3 rockC = vec3(0.0);
        float rockH = 0.0;
        float rockAltitude = smoothstep(1.9, 4.8, y);
        vec3 summitRock = vec3(rockLum * 1.7) * vec3(0.97, 1.0, 1.05);
        vec3 foothillRock = vec3(rockLum * 0.85) * vec3(0.92, 0.80, 0.66);
        if (wRock > 0.0) {
            // Original lower-mountain material.
            vec4 rockFields = groundFoothillRockFields(gp, warp);
            float plateTint = rockFields.x;
            float crack = rockFields.y;
            float ridge = rockFields.z;
            float mossPatch = rockFields.w;
            vec3 rockBase = mix(foothillRock, summitRock, rockAltitude);
            rockC = rockBase * (0.88 + 0.22 * plateTint) * (0.86 + 0.22 * ridge)
                * (0.90 + 0.20 * groundNoise(vec2(gp.x * 1.6 + y * 3.0, gp.y * 1.6)));
            rockC = mix(rockC, rockBase * 0.50, crack * 0.45);
            rockC = mix(rockC, vec3(0.24, 0.19, 0.15), crack * 0.30);
            float stain = smoothstep(0.50, 0.80, groundFbm(gp * 2.0 + warp * 2.5));
            rockC = mix(rockC, uForestColor * vec3(1.30, 1.40, 1.00), mossPatch * 0.60 * (1.0 - rockAltitude));
            rockC = mix(rockC, vec3(0.29, 0.25, 0.21) * (0.85 + 0.30 * plateTint),
                        stain * 0.35 * (1.0 - rockAltitude));
            rockC += vec3(0.45, 0.47, 0.52) * smoothstep(0.90, 0.98, groundNoise(gp * 52.0))
                * fade52 * (1.0 - crack) * rockAltitude;
            rockH = groundFoothillRockHeight(rockFields, 1.0 - rockAltitude);

            // Upper mountain only. Keep the established stone itself and
            // change it gently: warmer mineral balance, softer relief and a
            // little 3D mottling. There is deliberately no replacement top
            // material and no seam mask capable of drawing contour lines.
            float upperRock = smoothstep(3.15, 4.15, y + wob * 0.18);
            vec3 mineralP = vGroundWorldPos * 0.78;
            float mineralBroad = groundFbm3(mineralP * 0.72 + vec3(3.7, 11.2, 6.4));
            float mineralMid = groundFbm3(mineralP * 2.15 + vec3(17.4, 5.1, 23.6));
            float mineralFine = groundNoise3(mineralP * 8.2 + vec3(31.0, 47.0, 59.0));
            vec3 upperC = rockC;
            vec3 warmRock = upperC * vec3(1.07, 0.97, 0.86);
            float warmAmount = 0.34 + mineralBroad * 0.22;
            upperC = mix(upperC, warmRock, warmAmount);
            upperC *= 0.93 + mineralMid * 0.12;
            upperC *= 0.985 + mineralFine * 0.030;

            // Dirt collects broadly in shallow upper faces and creases. Two
            // offset scales keep it stained and broken rather than painting
            // another continuous brown cap over the mountain.
            vec3 mountainWorldNormal = inverseTransformDirection(normalize(vTileNormal), viewMatrix);
            float upperFacing = smoothstep(0.30, 0.78, mountainWorldNormal.y);
            float dirtLarge = groundFbm(gp * 0.64 + warp * 0.92 + vec2(27.6, 8.4));
            float dirtBreakup = groundFbm(gp * 2.7 + warp * 1.8 + vec2(6.1, 31.7));
            float upperDirt = smoothstep(0.54, 0.70,
                dirtLarge + (dirtBreakup - 0.5) * 0.18);
            upperDirt *= mix(0.48, 1.0, upperFacing);
            vec3 dryEarth = mix(
                vec3(0.28, 0.22, 0.16),
                uForestColor * vec3(0.48, 0.39, 0.24),
                dirtBreakup
            );
            upperC = mix(upperC, dryEarth, upperDirt * 0.52);

            // Dark damp staining follows another field so it overlaps dirt
            // imperfectly, giving accumulated grime instead of one flat mask.
            float dampField = groundFbm3(mineralP * 0.86 + vec3(41.0, 7.3, 19.6));
            float dampStain = smoothstep(0.59, 0.76, dampField)
                * smoothstep(0.36, 0.72, upperDirt + upperFacing * 0.35);
            vec3 dampEarth = uForestColor * vec3(0.31, 0.32, 0.20);
            upperC = mix(upperC, dampEarth, dampStain * 0.48);

            // Moss is more present now, but remains dark olive and heavily
            // broken by a second field so it cannot read as lime-green rivers.
            float upperMossField = groundFbm(gp * 0.48 + warp * 0.65 + vec2(4.8, 11.2));
            float upperMossEdge = groundFbm(gp * 2.3 + warp * 1.4 + vec2(17.1, 3.6));
            float upperMoss = smoothstep(0.66, 0.78,
                upperMossField + (upperMossEdge - 0.5) * 0.13);
            upperMoss *= smoothstep(0.36, 0.58, upperMossEdge) * upperFacing;
            upperMoss *= mix(0.55, 1.0, dampStain);
            vec3 upperMossColor = mix(
                uForestColor * vec3(0.56, 0.68, 0.34),
                uGrassColor * vec3(0.36, 0.39, 0.20),
                upperMossEdge * 0.42
            );
            upperC = mix(upperC, upperMossColor, upperMoss * 0.68);

            // Retain the old rock shape but soften it toward the summit;
            // the 3D field adds shallow, continuous surface weathering.
            float upperH = rockH * 0.46
                + mineralBroad * 0.12 + mineralMid * 0.055
                + mineralFine * 0.012 + upperDirt * 0.035
                + upperMoss * 0.075 - dampStain * 0.025;
            rockC = mix(rockC, upperC, upperRock);
            rockH = mix(rockH, upperH, upperRock);
            gRockSheen = wRock * mix(
                mix(0.10, 0.48, rockAltitude),
                0.12,
                upperRock
            ) * uShowTextures;
        }

        // Climb the ladder.
        vec3 band = lowC;
        band = mix(band, forestC, toForest);
        band = mix(band, rockC, toRock);

        // Relief for the bump pass (normal_fragment below): each band's
        // height field reuses the values its color was already computed
        // from, so light and shadow fall exactly where the color says they
        // should -- cracks recessed, pebbles and facets raised. Rock gets
        // by far the strongest relief and continues unchanged to the summit.
        gBumpH = mix(mix(lowH, forestH, toForest), rockH * 1.1, toRock);
        gBumpH *= uShowTextures;

        // Texture toggle preserves the material ladder while dropping its
        // procedural detail. Low terrain remains coastline stone.
        vec3 flatBand = mix(vec3(0.31, 0.29, 0.255), uGrassColor, grassMask);
        flatBand = mix(flatBand, uForestColor, toForest);
        flatBand = mix(flatBand, mix(foothillRock, summitRock, rockAltitude), toRock);
        band = mix(flatBand, band, uShowTextures);

        // Building foundations are terrain, but they are not part of the
        // natural height ladder above. Their inherited world height may be
        // lowland or mountain-high; neither is allowed to repaint concrete
        // as turf or rock. Override only the base surface here, then
        // continue through the shared vertex-darkening and
        // grid code below so a concrete quay meets water exactly like land.
        if (uIsConcrete > 0.5) {
            gRockSheen = 0.0;
            gGrassSurface = 0.0;
            float concreteMottle = groundFbm(gp * 2.6);
            float poreFade = groundDetailFade(gp * 38.0);
            float pores = mix(0.5, groundNoise(gp * 38.0), poreFade);
            float aggregate = smoothstep(0.86, 0.98, pores);
            float hairline = 1.0 - smoothstep(
                0.0,
                0.035,
                abs(groundNoise(gp * 1.45 + vec2(3.7, 8.1)) - 0.5)
            );
            vec3 concrete = uConcreteColor * (0.84 + 0.24 * concreteMottle);
            concrete = mix(concrete, uConcreteColor * 0.56, hairline * 0.30);
            concrete = mix(concrete, vec3(0.64, 0.63, 0.59), aggregate * 0.22);
            band = mix(uConcreteColor, concrete, uShowTextures);
            gBumpH = (concreteMottle * 0.16 + aggregate * 0.10 - hairline * 0.18)
                * uShowTextures;
        }

        // Vertex color as a darkening signal relative to this vertex's OWN
        // pristine luminance, baked at build time: untouched tiles pass
        // exactly 1.0 whatever color the map generator gave them, and only
        // crater scorch (which darkens the live color after build) pulls
        // the ratio down. Dividing by the terrain TYPE's palette luminance
        // instead is what made lowland tiles -- whose colors are
        // lerped toward the darker grass band -- render dimmer than the
        // grass tiles next to them, when both showed the same bands.
        float vLum = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
        band *= clamp(vLum / max(vPristineLum, 0.001), 0.35, 1.05);

        // Grid last, so it draws over every ground material.
        band = mix(band, ${Lt}, hexGridLine(vTileLocal / uHexRadius, uShowGrid) * ${Rt});

        diffuseColor.rgb = band;
    }
`,Bt=`
    {
        // Flat diagnostic baseline: reflection supplies all surface detail.
        // Do not paint procedural ripples into the water body while the
        // cloud and planar projections are being judged.

        // Water carries the grid too -- a grid that stops at the coastline
        // is worse than none, since the tiles you most need to count are
        // the ones a unit cannot cross.
        diffuseColor.rgb = mix(
            diffuseColor.rgb,
            ${Lt},
            hexGridLine(vTileLocal / uHexRadius, uShowGrid) * ${Rt}
        );
    }
`,Vt=`
    // Meadow is fully matte but still receives shallow normal variation from
    // its soil grain and embedded pebbles. This removes the polished softness
    // without borrowing the coastline's heavy rock response.
    roughnessFactor = mix(
        roughnessFactor,
        max(roughnessFactor, 0.93),
        gGrassSurface
    );
    // Rock uses the same light-driven response, weighted toward clean
    // higher-altitude stone. Cracks and ridges supply its changing normal.
    roughnessFactor = mix(roughnessFactor, 0.56, gRockSheen);
    // Coast stone must not sparkle. Keep the whole exposed/submerged rock at
    // maximum roughness; wetness changes diffuse contrast only.
    roughnessFactor = mix(roughnessFactor, 1.0, gShoreStone);
`,Ht=`
    // Natural coast stone has no metallic response. Explicitly zero it for
    // the whole coast mesh, including the vertical part below water level.
    metalnessFactor = mix(metalnessFactor, 0.0, gShoreStone);
`,Ut=`
    // Three's shadow map already removes directional light, but the strong
    // ambient fill remains untouched and makes cast tree/building shadows
    // read too pale. Sample the same shadow mask and reduce only that ambient
    // contribution; fully lit ground remains byte-for-byte unchanged.
    float groundCastShadow = getShadowMask();
    reflectedLight.indirectDiffuse *= mix(0.72, 1.0, groundCastShadow);
`,Wt=`
    {
        vec4 noise = getNoise(vGroundWorldPos.xz * size);
        vec3 surfaceNormal = normalize(noise.xzy * vec3(1.5, 1.0, 1.5));
        normal = normalize(mat3(viewMatrix) * surfaceNormal);
    }
`;function Gt(e){e.colorWrite=!1,e.depthWrite=!1,e.onBeforeCompile=t=>{t.uniforms.time={value:0},t.uniforms.uHexRadius={value:I.HEX_RADIUS},t.uniforms.size={value:32},t.uniforms.normalSampler={value:Dt()},t.uniforms.uShowGrid=mt.showGrid,t.uniforms.uShowTextures=mt.showTextures,t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
 varying vec3 vGroundWorldPos;
 attribute vec3 aShoreA;
 attribute vec3 aShoreB;
 attribute float aWaterPin;
 attribute vec3 aTileNormal;
 attribute vec2 aTileLocal;
 varying vec3 vShoreA;
 varying vec3 vShoreB;
 varying vec2 vTileLocal;
 varying vec3 vTileNormal;
 attribute float aPristineLum;
 varying float vPristineLum;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
 vGroundWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
 vShoreA = aShoreA;
 vShoreB = aShoreB;
 vTileLocal = aTileLocal;
 vPristineLum = aPristineLum;
 vTileNormal = normalize(normalMatrix * aTileNormal);`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>
 varying vec3 vGroundWorldPos;
 varying vec3 vShoreA;
 varying vec3 vShoreB;
 varying vec2 vTileLocal;
 varying vec3 vTileNormal;
 uniform float uHexRadius;
 uniform float uShowGrid;
 uniform float uShowTextures;
 varying float vPristineLum;
`+Ft+f+Mt+It).replace(`#include <color_fragment>`,`#include <color_fragment>
`+Bt).replace(`#include <normal_fragment_begin>`,`#include <normal_fragment_begin>
`+Wt),e.userData.shader=t},e.customProgramCacheKey=()=>`water-surface-flat-proxy-v3`}function Kt(e,t){Nt.has(t)&&(e.onBeforeCompile=n=>{n.uniforms.uGrassColor={value:new THREE.Color(F.getTerrainColor(`GRASS`))},n.uniforms.uForestColor={value:new THREE.Color(F.getTerrainColor(`FOREST`))},n.uniforms.uRockColor={value:new THREE.Color(F.getTerrainColor(`MOUNTAIN`))},n.uniforms.uConcreteColor={value:new THREE.Color(F.getTerrainColor(`CONCRETE`))},n.uniforms.uIsConcrete={value:+(t===`CONCRETE`)},n.uniforms.uIsCoastTile={value:+(t===`SAND`)},n.uniforms.uSunDirection={value:x.getDirection()},n.uniforms.uGrassCalibration=p.grass.parameters,n.uniforms.uGrassCalibrationBalance=p.grass.balance,n.uniforms.uHexRadius={value:I.HEX_RADIUS},n.uniforms.uShowGrid=mt.showGrid,n.uniforms.uShowTextures=mt.showTextures,n.vertexShader=n.vertexShader.replace(`#include <common>`,`#include <common>
 varying vec3 vGroundWorldPos;
 attribute vec3 aShoreA;
 attribute vec3 aShoreB;
 attribute float aWaterPin;
 attribute vec3 aTileNormal;
 attribute vec2 aTileLocal;
 varying vec3 vShoreA;
 varying vec3 vShoreB;
 varying vec2 vTileLocal;
 varying vec3 vTileNormal;
 attribute float aPristineLum;
 varying float vPristineLum;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
 vGroundWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
 vShoreA = aShoreA;
 vShoreB = aShoreB;
 vTileLocal = aTileLocal;
 vPristineLum = aPristineLum;
 vTileNormal = normalize(normalMatrix * aTileNormal);`),n.fragmentShader=n.fragmentShader.replace(`#include <common>`,`#include <common>
 varying vec3 vGroundWorldPos;
 varying vec3 vShoreA;
 varying vec3 vShoreB;
 varying vec2 vTileLocal;
 varying vec3 vTileNormal;
 uniform float uHexRadius;
 uniform float uShowGrid;
 uniform float uShowTextures;
 varying float vPristineLum;
 uniform vec3 uGrassColor;
 uniform vec3 uForestColor;
 uniform vec3 uRockColor;
 uniform vec3 uConcreteColor;
 uniform float uIsConcrete;
 uniform float uIsCoastTile;
 uniform vec3 uSunDirection;
 uniform vec4 uGrassCalibration;
 uniform vec3 uGrassCalibrationBalance;
 float gBumpH;
 float gRockSheen;
 float gShoreStone;
 float gGrassSurface;
`+m+Ft+f+It).replace(`#include <color_fragment>`,`#include <color_fragment>
`+zt).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
`+Vt).replace(`#include <metalnessmap_fragment>`,`#include <metalnessmap_fragment>
`+Ht).replace(`#include <normal_fragment_begin>`,`#include <normal_fragment_begin>

    {
        vec3 tileN = normalize(vTileNormal);
        float topness = smoothstep(0.45, 0.80, dot(normal, tileN));
        normal = normalize(mix(normal, tileN, topness));
    }

    {
        float groundReliefStrength = mix(0.22, 0.42, gShoreStone);
        normal = groundPerturbNormal(
            vGroundWorldPos,
            normal,
            gBumpH,
            groundReliefStrength
        );
    }
`).replace(`#include <shadowmap_pars_fragment>`,`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>`).replace(`#include <lights_fragment_end>`,`#include <lights_fragment_end>
`+Ut),e.userData.shader=n},e.customProgramCacheKey=()=>`ground-height-banded-v39-grass-contrast`)}var qt=`
    varying vec3 vBuildingWorld;
    varying vec3 vBuildingWorldNormal;
`,Jt=`
    vBuildingWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;
    vBuildingWorldNormal = normalize(mat3(modelMatrix) * normal);
`,Yt=`
    varying vec3 vBuildingWorld;
    varying vec3 vBuildingWorldNormal;
    uniform float uBuildingGroundY;
    uniform float uBuildingWearSeed;
    float gBuildingDirt;
    float gBuildingRust;
`,Xt=e=>`
    {
        vec3 wp = vBuildingWorld;
        vec3 wn = normalize(vBuildingWorldNormal);
        float side = 1.0 - abs(wn.y);
        float exposedSurface = 0.32 + side * 0.68;
        vec2 seed = vec2(uBuildingWearSeed, uBuildingWearSeed * 1.731);

        // Mud and soot collect close to the foundation. Sparse rain streaks
        // extend farther up vertical walls without tinting the whole facade.
        float heightAboveGround = max(wp.y - uBuildingGroundY, 0.0);
        float lowDirt = (1.0 - smoothstep(0.06, 0.62, heightAboveGround))
            * groundFbm(wp.xz * 0.72 + seed);
        float rainColumn = smoothstep(
            0.57,
            0.78,
            groundNoise(vec2((wp.x + wp.z) * 2.4, uBuildingWearSeed * 1.9))
        );
        float rainBreakup = smoothstep(
            0.40,
            0.68,
            groundFbm(vec2((wp.x - wp.z) * 0.55, wp.y * 0.13) + seed)
        );
        float rain = rainColumn * rainBreakup * side;
        float roofDirt = smoothstep(
            0.55,
            0.76,
            groundFbm(wp.xz * 0.92 + seed * 1.7)
        ) * smoothstep(0.25, 0.85, wn.y);
        gBuildingDirt = clamp(
            lowDirt * 0.72 + rain * 0.46 + roofDirt * 0.42,
            0.0,
            1.0
        );
        diffuseColor.rgb = mix(
            diffuseColor.rgb,
            vec3(0.105, 0.090, 0.068),
            gBuildingDirt * 0.48
        );

        // Oxidation is restricted in JavaScript to named metal/armour/team
        // materials. A coarse patch seeds thinner vertical rust runs.
        float rustPatch = smoothstep(
            0.50,
            0.73,
            groundFbm(wp.xz * 0.78 + wp.y * 0.16 + seed * 2.3)
        );
        float rustSource = smoothstep(
            0.60,
            0.79,
            groundNoise(wp.xz * 1.35 + seed * 3.1)
        );
        float rustRun = rustSource * smoothstep(
            0.38,
            0.66,
            groundFbm(vec2((wp.x - wp.z) * 0.72, wp.y * 0.12) + seed)
        );
        gBuildingRust = clamp(
            (rustPatch * 0.76 + rustRun * side)
                * exposedSurface
                * ${e?`1.0`:`0.0`},
            0.0,
            1.0
        );
        vec3 darkRust = vec3(0.155, 0.047, 0.018);
        vec3 orangeRust = vec3(0.43, 0.115, 0.025);
        vec3 rustColor = mix(darkRust, orangeRust, rustPatch);
        diffuseColor.rgb = mix(diffuseColor.rgb, rustColor, gBuildingRust * 0.62);

        // Long diagonal score marks, broken into irregular segments by a
        // coarse mask. Unlike thresholded noise these read as scratches,
        // not another layer of freckles.
        float scratchDistance = abs(
            fract(
                (wp.x + wp.z) * 2.7
                    + wp.y * 0.82
                    + uBuildingWearSeed * 0.37
            ) - 0.5
        );
        float scratchLine = 1.0 - smoothstep(0.025, 0.075, scratchDistance);
        float scratchBreakup = smoothstep(
            0.52,
            0.72,
            groundFbm(vec2((wp.x - wp.z) * 0.80, wp.y * 0.42) + seed * 4.7)
        );
        float scratch = scratchLine
            * scratchBreakup
            * exposedSurface
            * groundDetailFade(wp.xz * 8.0);
        diffuseColor.rgb = mix(
            diffuseColor.rgb,
            vec3(0.48, 0.46, 0.42),
            scratch * 0.48
        );
        gBuildingDirt = clamp(gBuildingDirt - scratch * 0.45, 0.0, 1.0);
        gBuildingRust = clamp(gBuildingRust - scratch * 0.30, 0.0, 1.0);
    }
`,Zt=`
    roughnessFactor = clamp(
        roughnessFactor
            + gBuildingDirt * 0.28
            + gBuildingRust * 0.20,
        0.0,
        1.0
    );
`,Qt=`
    metalnessFactor = mix(metalnessFactor, 0.05, gBuildingRust * 0.82);
`,$t=[`energy`,`emissive`,`light`,`glow`,`beacon`,`void`,`glass`,`window`,`screen`],en=[`armor`,`armour`,`metal`,`steel`,`iron`,`trim`,`camo`,`panel`,`roof`];function tn(e){let t=String(e?.name??``).toLowerCase();return!$t.some(e=>t.includes(e))}function nn(e){let t=String(e?.name??``).toLowerCase();return en.some(e=>t.includes(e))||t!==`concrete`&&Number(e?.metalness??0)>=.15}function rn(e,t,n){let r=new Map,i=e=>{if(!e||!tn(e)||e.userData?.sharedGlowMaterial)return e;let i=r.get(e);if(i)return i;let a=nn(e),o=e.onBeforeCompile,s=typeof e.customProgramCacheKey==`function`?e.customProgramCacheKey.bind(e):null,c=e.clone();return c.userData={...c.userData,buildingWeathering:!0},c.onBeforeCompile=(r,i)=>{o?.call(e,r,i),r.uniforms.uBuildingGroundY={value:t},r.uniforms.uBuildingWearSeed={value:n},r.vertexShader=r.vertexShader.replace(`#include <common>`,`#include <common>
`+qt).replace(`#include <begin_vertex>`,`#include <begin_vertex>
`+Jt),r.fragmentShader=r.fragmentShader.replace(`#include <common>`,`#include <common>
`+Yt+`
`+Pt).replace(`#include <color_fragment>`,`#include <color_fragment>
`+Xt(a)).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
`+Zt).replace(`#include <metalnessmap_fragment>`,`#include <metalnessmap_fragment>
`+Qt)},c.customProgramCacheKey=()=>`building-weather-v1-${a?`rust`:`grime`}|${s?s():``}`,c.needsUpdate=!0,r.set(e,c),c};e.traverse(e=>{e.isMesh&&(e.material=Array.isArray(e.material)?e.material.map(i):i(e.material))})}var R=class e{constructor(e,t){this.q=e,this.r=t}static fromKey(t){let[n,r]=t.split(`,`).map(Number);return new e(n,r)}static isWithinMapBounds(e,t){return e>=0&&e<I.COLS&&t>=0&&t<I.ROWS}static findHex(e,t){return V.findHex(e,t)}static getHexPosition(e,t){return{x:I.HEX_RADIUS*1.5*e,z:I.HEX_RADIUS*Math.sqrt(3)*(t+e%2/2)}}static getNeighbors(e,t){return he(e,t)}static toCube(e,t){return ge(e,t)}static getDistance(e,t,n,r){return ye(e,t,n,r)}static getWorldPositionFromCoords(t,n,r=0){let i=e.getHexPosition(t,n);return new THREE.Vector3(i.x,r,i.z)}getKey(){return`${this.q},${this.r}`}getHex(){return e.findHex(this.q,this.r)}isValid(){return e.isWithinMapBounds(this.q,this.r)}getNeighbors(){return e.getNeighbors(this.q,this.r).map(t=>new e(t.q,t.r))}getValidNeighbors(e=new Set){return this.getNeighbors().filter(t=>t.isValid()&&!e.has(t.getKey())).map(e=>({coord:e,hex:e.getHex()})).filter(e=>e.hex!==void 0)}distanceTo(t){return e.getDistance(this.q,this.r,t.q,t.r)}getWorldPosition(t=0){let n=e.getHexPosition(this.q,this.r);return new THREE.Vector3(n.x,t,n.z)}isOccupied(e=null){let t=typeof window<`u`?window.HEX_ENGINE:null;return t?.getOption&&t.getOption(`enableUnitSystems`)&&H!==void 0?H.isHexOccupied(this.q,this.r,e):!1}},an=[{name:`rotor_upper`,axis:`y`,speed:9},{name:`rotor_lower`,axis:`y`,speed:-9},{name:`anti_torque_fan`,axis:`x`,speed:22}],on=class{static{this.rotors=[]}static claim(e){if(e)for(let t of an){let n=e.getObjectByName(t.name);n&&(n.traverse(e=>{if(!e.isMesh)return;e.castShadow=!1;let t=Array.isArray(e.material)?e.material:[e.material];for(let e of t)e?.name===`rotor_blur`&&(e.transparent=!0,e.depthWrite=!1)}),this.rotors.push({node:n,root:e,axis:t.axis===`x`?new THREE.Vector3(1,0,0):new THREE.Vector3(0,1,0),speed:t.speed,base:n.quaternion.clone()}))}}static animate(e){let t=new THREE.Quaternion;for(let n=this.rotors.length-1;n>=0;n--){let r=this.rotors[n];if(!r.root.parent){this.rotors.splice(n,1);continue}t.setFromAxisAngle(r.axis,e*r.speed),r.node.quaternion.copy(r.base).multiply(t)}return!1}static clear(){this.rotors.length=0}},sn=`
    {
        vec3 lp = vUnitLocal;
        vec3 on = normalize(vUnitObjNormal);

        // Broad panel mottling: plate that has seen weather, not one even
        // coat of team paint. Kept restrained because textured models
        // already carry authored surface variation.
        float mottle = groundFbm(lp.xz * 2.6 + lp.y * 1.9);
        diffuseColor.rgb *= 0.84 + 0.24 * mottle;

        // Grime: streaks running DOWN the vertical surfaces (gated off the
        // tops by the object normal), and dust collecting low on the hull.
        float side = 1.0 - abs(on.y);
        float streaks = smoothstep(0.42, 0.90, groundNoise(vec2((lp.x + lp.z) * 8.0, lp.y * 1.5)));
        // The dust climbs most of the hull now -- these are field
        // vehicles, not showroom stock.
        float low = smoothstep(0.95, 0.10, lp.y);
        float dust = groundFbm(lp.xz * 4.0 + lp.y * 2.5);
        gPlateGrime = clamp(streaks * side * 0.8 + dust * low * 1.1, 0.0, 1.0);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.17, 0.15, 0.11), gPlateGrime * 0.44);

        // Chips and scratches: sparse bare metal through the paint,
        // band-limited so distant units do not sparkle.
        float scratch = smoothstep(0.90, 0.98, groundNoise(lp.xy * 19.0 + lp.z * 11.0))
            * groundDetailFade(lp.xy * 19.0);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.60, 0.63, 0.66), scratch * 0.32);
        // Bare metal is not dusty.
        gPlateGrime = clamp(gPlateGrime - scratch, 0.0, 1.0);
    }
`,cn=`
    roughnessFactor = clamp(roughnessFactor + gPlateGrime * 0.25, 0.0, 1.0);
`;function ln(e){if(!e||!e.userData||e.userData.dirtyPlate||e.userData.sharedGlowMaterial)return;e.userData.dirtyPlate=!0;let t=e.onBeforeCompile,n=typeof e.customProgramCacheKey==`function`?e.customProgramCacheKey.bind(e):null;e.onBeforeCompile=n=>{t&&t.call(e,n),n.vertexShader=n.vertexShader.replace(`#include <common>`,`#include <common>
 varying vec3 vUnitLocal;
 varying vec3 vUnitObjNormal;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
 vUnitLocal = position;
 vUnitObjNormal = normal;`),n.fragmentShader=n.fragmentShader.replace(`#include <common>`,`#include <common>
 varying vec3 vUnitLocal;
 varying vec3 vUnitObjNormal;
 float gPlateGrime;
`+Pt).replace(`#include <color_fragment>`,`#include <color_fragment>
`+sn).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
`+cn)},e.customProgramCacheKey=()=>`unit-dirty-plate|`+(n?n():``)}function un(e){if(!e?.name)return!0;let t=e.name.toLowerCase();return![`canopy`,`glass`,`window`,`rotor`,`energy`,`emissive`,`light`,`glow`].some(e=>t.includes(e))}function dn(e){e.traverse(e=>{e.isMesh&&(Array.isArray(e.material)?e.material.forEach(e=>{un(e)&&ln(e)}):un(e.material)&&ln(e.material))})}var fn=Object.freeze({contrastStrength:.68,unitContrastStrength:.92,saturation:1.1}),pn=e=>`
vec3 unitColor = clamp(gl_FragColor.rgb, 0.0, 1.0);
vec3 unitSCurve = unitColor * unitColor * (3.0 - 2.0 * unitColor);
unitColor = mix(unitColor, unitSCurve, ${e.toFixed(2)});
float unitLuma = dot(unitColor, vec3(0.2126, 0.7152, 0.0722));
gl_FragColor.rgb = clamp(mix(vec3(unitLuma), unitColor, ${fn.saturation.toFixed(2)}), 0.0, 1.0);
`,z=class e{static{this.models={}}static async loadModels(e){let t=new THREE.MTLLoader,n=new THREE.OBJLoader,r=new THREE.GLTFLoader,i=new THREE.FBXLoader,a=new Set;Object.values(e).forEach(e=>{e.model&&a.add(e.model)});for(let o of a)try{let a=Object.values(e).find(e=>e.model===o),s,c=o.startsWith(`primitive:`)?`primitive`:o.split(`.`).pop().toLowerCase();switch(c){case`primitive`:s=this.buildPrimitive(o.slice(10));break;case`fbx`:s=await new Promise((e,t)=>{i.load(o,t=>e(t),void 0,t)});break;case`gltf`:case`glb`:s=await new Promise((e,t)=>{r.load(o,t=>e(t.scene),void 0,t)});break;case`obj`:if(a.material){let e=await new Promise((e,n)=>{t.load(a.material,t=>{t.preload(),e(t)},void 0,n)});n.setMaterials(e)}s=await new Promise((e,t)=>{n.load(o,t=>e(t),void 0,t)});break;default:throw Error(`Unsupported file format: ${c}`)}let l=new THREE.Group,u=(c===`fbx`?.05:1)*(a.scale??1);s.scale.set(u,u,u);let d=a.rotation||0;s.rotation.y=d*Math.PI/180;let f=new Map,p=e=>{e||=new THREE.MeshStandardMaterial;let t=f.get(e);if(t)return t;let n=e.clone();return n.transparent=!0,n.depthTest=!0,n.depthWrite=!0,f.set(e,n),n};s.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.material||=new THREE.MeshStandardMaterial,e.material=Array.isArray(e.material)?e.material.map(p):p(e.material))}),s.updateMatrixWorld(!0);let m=new THREE.Vector3(1/0,1/0,1/0),h=new THREE.Vector3(-1/0,-1/0,-1/0),g=new THREE.Vector3;s.traverse(e=>{let t=e.isMesh?e.geometry?.attributes?.position:null;if(t)for(let n=0;n<t.count;n++)g.fromBufferAttribute(t,n).applyMatrix4(e.matrixWorld),m.min(g),h.max(g)});let _=a.keepOrigin?new THREE.Vector3(0,0,0):new THREE.Vector3(-(h.x+m.x)/2,-m.y,-(h.z+m.z)/2);l.add(s),s.position.add(_),this.models[o]=l}catch(e){console.error(`Failed to load model ${o}:`,e)}}static buildPrimitive(e){let t=new THREE.MeshStandardMaterial({color:12568276,roughness:.55,metalness:.15}),n;switch(e){case`sphere`:n=new THREE.SphereGeometry(.5,24,16);break;case`box`:n=new THREE.BoxGeometry(.95,.8,.95);break;case`pyramid`:n=new THREE.ConeGeometry(.68,1.05,4);break;default:throw Error(`Unknown primitive shape "${e}"`)}let r=new THREE.Mesh(n,t),i=new THREE.Group;return i.add(r),i}static cloneUntouched(e,t=fn.contrastStrength){let n=e.clone();return this.useAuthoredModelColorEncoding(n),this.enhanceTexturedModelContrast(n,t),n}static enhanceTexturedModelContrast(e,t=fn.contrastStrength){if(t<=0)return;let n=new Map,r=e=>{if(!e?.map||e.userData?.sharedGlowMaterial)return e;let r=n.get(e);if(r)return r;let i=e.onBeforeCompile,a=typeof e.customProgramCacheKey==`function`?e.customProgramCacheKey.bind(e):null,o=e.clone();return o.onBeforeCompile=(n,r)=>{i?.call(e,n,r),n.fragmentShader=n.fragmentShader.replace(`#include <dithering_fragment>`,`${pn(t)}\n#include <dithering_fragment>`)},o.customProgramCacheKey=()=>`unit-contrast-v2-${t}-${fn.saturation}|${a?a():``}`,o.needsUpdate=!0,n.set(e,o),o};e.traverse(e=>{e.isMesh&&(e.material=Array.isArray(e.material)?e.material.map(r):r(e.material))})}static useAuthoredModelColorEncoding(e){let t=new Map,n=e=>{if(!e||e.userData?.sharedGlowMaterial)return e;let n=t.get(e);if(n)return n;let r=e.clone(),i=r.onBeforeCompile,a=typeof r.customProgramCacheKey==`function`?r.customProgramCacheKey.bind(r):null;return r.onBeforeCompile=(e,t)=>{i?.(e,t),e.fragmentShader=e.fragmentShader.replace(`#include <colorspace_fragment>`,`gl_FragColor = sRGBTransferOETF( gl_FragColor );`)},r.customProgramCacheKey=()=>`authored-model-srgb|${a?a():``}`,r.needsUpdate=!0,t.set(e,r),r};e.traverse(e=>{e instanceof THREE.Mesh&&(e.material=Array.isArray(e.material)?e.material.map(n):n(e.material))})}static{this.camoMaps=new Map}static teamCamoMap(e,t){if(!e?.image)return e;let n=`${e.uuid}:${t}`,r=this.camoMaps.get(n);if(r)return r;let i=new THREE.Color(1538303),a=new THREE.Color(t),o={h:0,s:0,l:0},s={h:0,s:0,l:0};i.getHSL(o),a.getHSL(s);let c=s.s<.08,l=s.h-o.h,u=e.image,d=document.createElement(`canvas`);d.width=u.width,d.height=u.height;let f=d.getContext(`2d`);f.drawImage(u,0,0);let p=f.getImageData(0,0,u.width,u.height),m=p.data,h=new THREE.Color,g={h:0,s:0,l:0};for(let e=0;e<m.length;e+=4)h.setRGB(m[e]/255,m[e+1]/255,m[e+2]/255),h.getHSL(g),!(g.s<.08)&&(c?h.setHSL(0,0,g.l):h.setHSL((g.h+l+1)%1,g.s,g.l),m[e]=Math.round(h.r*255),m[e+1]=Math.round(h.g*255),m[e+2]=Math.round(h.b*255));f.putImageData(p,0,0);let _=new THREE.CanvasTexture(d);return _.wrapS=e.wrapS,_.wrapT=e.wrapT,_.repeat.copy(e.repeat),_.offset.copy(e.offset),_.colorSpace=e.colorSpace,_.flipY=!1,_.needsUpdate=!0,this.camoMaps.set(n,_),_}static cloneWithTeamTint(t,n,r,i=0,a=fn.contrastStrength){let o=t.clone(),s=new Set(r),c=new Map,l=t=>{if(!t?.name||!s.has(t.name))return t;let r=c.get(t);if(r)return r;let i=t.clone();return i.map?(i.color.setHex(16777215),i.map=e.teamCamoMap(i.map,n)):i.color.setHex(n),c.set(t,i),i};return o.traverse(e=>{e instanceof THREE.Mesh&&(e.material=Array.isArray(e.material)?e.material.map(l):l(e.material))}),E.claim(o),e.useAuthoredModelColorEncoding(o),e.enhanceTexturedModelContrast(o,a),o}static createModelWithColor(t,n,r=!0,i=null,a=null,o=fn.contrastStrength,s=!0){let c=t.clone();if(a){let t=new Set(Array.isArray(a)?a:[a]),r=e=>{if(e?.name&&t.has(e.name)){let t=e.clone();return t.color.setHex(n),E.isGlowMaterial(t)&&t.emissive.setHex(n),t}return e};return c.traverse(e=>{e instanceof THREE.Mesh&&(e.material=Array.isArray(e.material)?e.material.map(r):r(e.material))}),E.claim(c),on.claim(c),s&&dn(c),e.enhanceTexturedModelContrast(c,o),c}if(r&&c.traverse(e=>{e instanceof THREE.Mesh&&(Array.isArray(e.material)?e.material=e.material.map(e=>{let t=e.clone();return t.color.setHex(n),t}):(e.material=e.material.clone(),e.material.color.setHex(n)))}),i!==null){let e=(e,t)=>{let n=e>>16&255,r=e>>8&255,i=e&255,a=t>>16&255,o=t>>8&255,s=t&255;return Math.sqrt((n-a)**2+(r-o)**2+(i-s)**2)<50};c.traverse(t=>{t instanceof THREE.Mesh&&(Array.isArray(t.material)?t.material=t.material.map(t=>{let r=t.clone();return e(r.color.getHex(),i)&&r.color.setHex(n),r}):(t.material=t.material.clone(),e(t.material.color.getHex(),i)&&t.material.color.setHex(n)))})}return E.claim(c),on.claim(c),s&&dn(c),e.enhanceTexturedModelContrast(c,o),c}static getModel(e){return this.models[e]}},mn=1.7320508075688772;function hn(e,t){return[1.5*e,mn*(t+.5*(e&1))]}function gn(e,t,n){let r=Math.imul(e,668265261)^Math.imul(t,374761393)^Math.imul(n,2654435761);return r=Math.imul(r^r>>>15,2246822507),r=Math.imul(r^r>>>13,3266489909),r^=r>>>16,(r>>>0)/4294967296}function _n(e){return e*e*(3-2*e)}function vn(e,t,n){let r=Math.floor(e),i=Math.floor(t),a=_n(e-r),o=_n(t-i),s=gn(r,i,n),c=gn(r+1,i,n),l=gn(r,i+1,n),u=gn(r+1,i+1,n),d=s+(c-s)*a;return d+(l+(u-l)*a-d)*o}var yn=[[11,1,1521],[4.6,.4,2855],[2,.15,941]],bn=yn.reduce((e,[,t])=>e+t,0);function xn(e,t){let[n,r]=hn(e,t),i=0;for(let[e,t,a]of yn)i+=(vn(n/e,r/e,a)-.5)*2*t;return i/bn}function Sn(e,t,n,r){return(xn(e,t)+xn(n-1-e,r-1-t))/2}function Cn(e,t,n){let r=[],i=[];for(let a=0;a<e;a++){r[a]=[];for(let e=0;e<t;e++)n(a,e)?(r[a][e]=0,i.push([a,e])):r[a][e]=1/0}for(let n=0;n<i.length;n++){let[a,o]=i[n],s=a%2==0?[[0,-1],[1,-1],[1,0],[0,1],[-1,0],[-1,-1]]:[[0,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0]];for(let[n,c]of s){let s=a+n,l=o+c;s<0||l<0||s>=e||l>=t||r[s][l]===1/0&&(r[s][l]=r[a][o]+1,i.push([s,l]))}}return r}function wn(e,t){return!isFinite(e)||e>=t?1:e<=0?0:_n(e/t)}function Tn(e,t){let n=F.terrainTypes.CONCRETE;for(let r of t){let t=e[r.q]?.[r.r];if(!t)throw Error(`Building foundation at ${r.q},${r.r} is outside the map`);t.type=`CONCRETE`,t.color=n.material.color,t.moveCost=n.moveCost,t.hasRoad=!1,t.vegetated=!1}return e}function En(e){return Tn(e.generate(),e.buildings??[])}var Dn=class{constructor(e,t,n){this.height=e,this.type=t,this.color=n,this.hasRoad=!1,this.moveCost=F.terrainTypes[t]?.moveCost??1,this.vegetated=!1,this.burning=0,this.burned=!1}},On=10,kn=10,An=[`GGGGGGGGGG`,`GGGGGFFGFG`,`GGGSGGFWWS`,`GGSGGFFFWG`,`WWSWMMWSWW`],jn={G:`GRASS`,F:`FOREST`,S:`SAND`,W:`WATER`,M:`MOUNTAIN`};if(An.length!==On/2)throw Error(`ford10: authored ${An.length} rows, needs ${On/2}`);for(let[e,t]of An.entries())if(t.length!==kn)throw Error(`ford10: row ${e} is ${t.length} characters, needs ${kn}`);var Mn=e=>9-e,Nn=e=>9-e,Pn=[[1,0],[1,1],[1,2],[1,3],[2,3],[3,3],[4,3],[2,4],[6,0],[6,1],[6,2],[6,3],[7,3],[7,4]],Fn=new Set;for(let[e,t]of Pn)Fn.add(`${e},${t}`),Fn.add(`${Mn(e)},${Nn(t)}`);var In=[{type:`Bulwark`,q:1},{type:`Halberd`,q:3},{type:`Kestrel`,q:4},{type:`Pike`,q:5},{type:`Nightjar`,q:7}],Ln={q:3,r:2},Rn=[{type:`factory`,q:Ln.q,r:Ln.r,hiddenUnitType:`Sabre`},{type:`factory`,q:Mn(Ln.q),r:Nn(Ln.r),hiddenUnitType:`Sabre`}],zn=new Set(Rn.map(e=>`${e.q},${e.r}`)),Bn=.55,Vn=.35,Hn=.5,Un=3,Wn=.1,Gn=(e,t)=>{let n=t>=On/2,r=n?Mn(e):e;return jn[An[n?Nn(t):t][r]]??`GRASS`},Kn={key:`ford10`,name:`두 개의 여울 (10x10)`,rows:On,cols:kn,randomRoads:0,buildings:Rn,spawns:{cpu:In.map(({type:e,q:t})=>({type:e,q:t,r:0})),player:In.map(({type:e,q:t})=>({type:e,q:Mn(t),r:9}))},generate(){let e=F.getTerrainBaseHeight(`WATER`),t=Cn(kn,On,(e,t)=>Gn(e,t)===`WATER`),n=[];for(let r=0;r<kn;r++){n[r]=[];for(let i=0;i<On;i++){let a=i>=On/2,o=a?Mn(r):r,s=a?Nn(i):i,c=jn[An[s][o]]??`GRASS`,l=F.getTerrainBaseHeight(c),u=Sn(r,i,kn,On),d=F.getTerrainHeightVariation(c),f=zn.has(`${r},${i}`)?0:(O(o*131+s*31)&255)/255,p;if(c===`WATER`)p=l;else if(c===`MOUNTAIN`){let e=(u+1)/2*.7+f*.3;p=l+u*Bn+e*d*Hn}else{p=l+u*Bn+f*d*Vn;let n=wn(t[r][i],Un);p=e+(p-e)*n,p=Math.max(e+Wn,p)}let m=new Dn(p,c,F.getTerrainColor(c));m.hasRoad=Fn.has(`${r},${i}`)&&c!==`WATER`&&c!==`MOUNTAIN`,n[r][i]=m}}return n}},qn=14,Jn=14,Yn=[`GGGGGGGGGGGGGG`,`GGFFGGGGGFGGFG`,`GSWWSGGGGFFGGG`,`GSWWSGGGWWSGGG`,`GGSGGFMGSWWSGG`,`GGGFSMMMGGFGGG`,`GGFSMMMMMSGFGG`],Xn={G:`GRASS`,F:`FOREST`,S:`SAND`,W:`WATER`,M:`MOUNTAIN`};if(Yn.length!==qn/2)throw Error(`crown14: authored half is the wrong height`);for(let e of Yn){if(e.length!==Jn)throw Error(`crown14: layout row "${e}" is not ${Jn} characters`);for(let t of e)if(!Xn[t])throw Error(`crown14: unknown terrain char "${t}"`)}var Zn=e=>13-e,Qn=[[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[12,0],[12,1],[12,2],[12,3],[12,4],[12,5],[12,6],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[7,2],[7,3],[7,4],[8,5],[9,5],[9,6],[2,6],[3,6],[3,5]],$n=new Set;for(let[e,t]of Qn)$n.add(`${e},${t}`),$n.add(`${Zn(e)},${13-t}`);var er=[{type:`Bulwark`,q:1},{type:`Pike`,q:4},{type:`Kestrel`,q:6},{type:`Nightjar`,q:9},{type:`Halberd`,q:11}],tr={q:4,r:5},nr=[{type:`factory`,q:tr.q,r:tr.r,hiddenUnitType:`Sabre`},{type:`factory`,q:Zn(tr.q),r:13-tr.r,hiddenUnitType:`Sabre`}],rr=.55,ir=.35,ar=3,or=.1,sr=(e,t)=>{let n=t>=qn/2,r=n?Zn(e):e;return Xn[Yn[n?13-t:t][r]]??`GRASS`},cr={key:`crown14`,name:`왕관 (14x14)`,rows:qn,cols:Jn,randomRoads:0,buildings:nr,spawns:{cpu:er.map(({type:e,q:t})=>({type:e,q:t,r:0})),player:er.map(({type:e,q:t})=>({type:e,q:Zn(t),r:13}))},generate(){let e=F.getTerrainBaseHeight(`WATER`),t=Cn(Jn,qn,(e,t)=>sr(e,t)===`WATER`),n=[];for(let r=0;r<Jn;r++){n[r]=[];for(let i=0;i<qn;i++){let a=i>=qn/2,o=a?Zn(r):r,s=a?13-i:i,c=Xn[Yn[s][o]]??`GRASS`,l=F.getTerrainBaseHeight(c),u=Sn(r,i,Jn,qn),d=(O(o*131+s*31)&255)/255,f=F.getTerrainHeightVariation(c),p;if(c===`WATER`)p=l;else if(c===`MOUNTAIN`){let e=(u+1)/2*.7+d*.3;p=l+u*rr+e*f}else{p=l+u*rr+d*f*ir;let n=wn(t[r][i],ar);p=e+(p-e)*n,p=Math.max(e+or,p)}let m=new Dn(p,c,F.getTerrainColor(c));m.hasRoad=$n.has(`${r},${i}`)&&c!==`WATER`&&c!==`MOUNTAIN`,n[r][i]=m}}return n}},lr=8,ur=8,dr=[`GGGGGGGG`,`GFFGGFFG`,`SWWSSWWS`,`GGSMMSGG`],fr={G:`GRASS`,F:`FOREST`,S:`SAND`,W:`WATER`,M:`MOUNTAIN`},pr=[0,7],mr=[{type:`Bulwark`,q:2},{type:`Kestrel`,q:3},{type:`Halberd`,q:4},{type:`Nightjar`,q:5},{type:`Pike`,q:6}],hr=(e,t)=>[7-e,7-t],gr={q:4,r:2},_r=[{type:`factory`,q:gr.q,r:gr.r,hiddenUnitType:`Sabre`},(([e,t])=>({type:`factory`,q:e,r:t,hiddenUnitType:`Sabre`}))(hr(gr.q,gr.r))],vr=e=>mr.map(({type:t,q:n})=>e===0?{type:t,q:7-n,r:e}:{type:t,q:n,r:e}),yr={key:`mirror8`,name:`쌍둥이 능선 (8x8)`,rows:lr,cols:ur,randomRoads:0,buildings:_r,spawns:{player:vr(7),cpu:vr(0)},generate(){let e=[];for(let t=0;t<ur;t++){e[t]=[];for(let n=0;n<lr;n++){let[r,i]=n>=lr/2?hr(t,n):[t,n],a=fr[dr[i][r]]??`GRASS`,o=F.getTerrainBaseHeight(a),s;s=a===`WATER`?o:o+(O(r*131+i*31)&255)/255*F.getTerrainHeightVariation(a);let c=new Dn(s,a,F.getTerrainColor(a));c.hasRoad=pr.includes(t)&&a!==`WATER`,e[t][n]=c}}return e}},br=18,xr=12,Sr=[`GGGGGGGGGGGG`,`GGFFGGGGFGGG`,`GSWWGGGSFGGG`,`GSWWSGGWWSGG`,`GGSSGGMWWSGG`,`GGGGGMMGSSGG`,`GFGGGMGGGGFG`,`GFFGGGGFFGGG`,`GGGGGSSGGGGG`],Cr={G:`GRASS`,F:`FOREST`,S:`SAND`,W:`WATER`,M:`MOUNTAIN`},wr=[[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[2,6],[2,7],[3,7],[4,7],[5,7],[6,7],[7,7],[8,7],[10,0],[10,1],[10,2],[10,3],[10,4],[10,5],[10,6],[10,7],[9,7],[5,8]],Tr=new Set;for(let[e,t]of wr)Tr.add(`${e},${t}`),Tr.add(`${11-e},${17-t}`);var Er=[{type:`Bulwark`,q:3},{type:`Kestrel`,q:4},{type:`Halberd`,q:6},{type:`Nightjar`,q:7},{type:`Pike`,q:8}],Dr=e=>11-e,Or={q:8,r:5},kr=(e,t,n)=>{let r=[[`forgeDepotN`,e,t],[`forgeDepotW`,e-1,t],[`forgeDepotE`,e+1,t],[`forgeDepotS`,e,t+1]],i=`forgeDepot@${e},${t}/${n}`;return r.map(([e,t,r])=>({type:e,q:n?11-t:t,r:n?17-r:r,hiddenUnitType:e===`forgeDepotS`?`Sabre`:null,groupId:i,isEntrance:e===`forgeDepotS`,rotationDeg:n}))},Ar=[...kr(Or.q,Or.r,0),...kr(Or.q,Or.r,180)],jr=.55,Mr=.35,Nr=3,Pr=.1,Fr=(e,t)=>{let n=t>=br/2,r=n?Dr(e):e;return Cr[Sr[n?17-t:t][r]]??`GRASS`},Ir=new Map(Ar.map(e=>[`${e.q},${e.r}`,e.groupId]));function Lr(){let e=new Map;for(let t of Ar){let n=t.groupId,r=F.getTerrainBaseHeight(Fr(t.q,t.r));e.set(n,Math.max(e.get(n)??0,r))}for(let t of Ar){if(t.type!==`forgeDepotN`)continue;let n=Sn(t.q,t.r,xr,br);e.set(t.groupId,e.get(t.groupId)+n*jr)}return e}var Rr={key:`rotor12x18`,name:`반바퀴 (12x18)`,rows:br,cols:xr,randomRoads:0,buildings:Ar,spawns:{cpu:Er.map(({type:e,q:t})=>({type:e,q:t,r:0})),player:Er.map(({type:e,q:t})=>({type:e,q:Dr(t),r:17}))},generate(){let e=F.getTerrainBaseHeight(`WATER`),t=Cn(xr,br,(e,t)=>Fr(e,t)===`WATER`),n=Lr(),r=[];for(let i=0;i<xr;i++){r[i]=[];for(let a=0;a<br;a++){let o=a>=br/2,s=o?Dr(i):i,c=o?17-a:a,l=Cr[Sr[c][s]]??`GRASS`,u=F.getTerrainBaseHeight(l),d=Sn(i,a,xr,br),f=Ir.get(`${i},${a}`),p;if(l===`WATER`)p=u;else if(f)p=n.get(f);else{let n=(O(s*131+c*31)&255)/255,r=F.getTerrainHeightVariation(l);if(p=u+d*jr+n*r*Mr,l===`MOUNTAIN`){let e=(d+1)/2*.7+n*.3;p=u+d*jr+e*r}else{let n=wn(t[i][a],Nr);p=e+(p-e)*n,p=Math.max(e+Pr,p)}}let m=new Dn(p,l,F.getTerrainColor(l));m.hasRoad=Tr.has(`${i},${a}`)&&l!==`WATER`,r[i][a]=m}}return r}},zr=[`...B...`,`.......`,`.......`,`.......`,`.......`,`~~~.~~~`,`.......`,`...K...`,`.......`,`...A...`],Br={K:{type:`Kloss`,player:0},A:{type:`Pyramid`,player:0},B:{type:`Boll`,player:1}};zr.length,zr[0].length;var Vr={"~":`WATER`,"#":`FOREST`,".":`GRASS`};function Hr(e,t,n,r){let i=n.length,a=n[0].length,o=e=>{let t=[];for(let o=0;o<i;o++)for(let i=0;i<a;i++){let a=r[n[o][i]];a&&a.player===e&&t.push({type:a.type,q:i,r:o})}return t};return{key:e,name:t,rows:i,cols:a,randomRoads:0,buildings:[],spawns:{player:o(0),cpu:o(1)},generate(){let e=[];for(let t=0;t<a;t++){e[t]=[];for(let a=0;a<i;a++){let i=n[a][t],o=r[i]?.ground??i,s=Vr[r[i]?o:i]??`GRASS`,c=F.getTerrainBaseHeight(s)+(s===`WATER`?0:.1);e[t][a]=new Dn(c,s,F.getTerrainColor(s))}}return e}}}var Ur=Hr(`choke`,`Vattenchoken (7x10)`,zr,Br),Wr=Hr(`chokeRetreat`,`Reträtten (7x10)`,[`...B...`,`.......`,`...K...`,`.......`,`.......`,`~~~.~~~`,`.......`,`.......`,`.......`,`...A...`],Br),Gr=Hr(`chokeTwin`,`Tvillingpasset (8x9)`,[`B.......`,`........`,`........`,`........`,`~~~..~~~`,`........`,`...KK...`,`........`,`...A....`],Br),Kr=Hr(`grove`,`Skogsbranden (17x3)`,[`.........########`,`.......P########A`,`.........########`],{P:{type:`Pike`,player:0},A:{type:`Kestrel`,player:1,ground:`#`}}),qr=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],B=Array(512);for(let e=0;e<256;e++)B[e]=B[e+256]=qr[e];function Jr(e){return e*e*e*(e*(e*6-15)+10)}function Yr(e,t,n){return t+e*(n-t)}function Xr(e,t,n,r){let i=e&15,a=i<8?t:n,o=i<4?n:i===12||i===14?t:r;return(i&1?-a:a)+(i&2?-o:o)}function Zr(e,t,n=0){let r=Math.floor(e)&255,i=Math.floor(t)&255,a=Math.floor(n)&255,o=e-Math.floor(e),s=t-Math.floor(t),c=n-Math.floor(n),l=Jr(o),u=Jr(s),d=Jr(c),f=B[B[B[r]+i]+a],p=B[B[B[r]+i+1]+a],m=B[B[B[r]+i]+a+1],h=B[B[B[r]+i+1]+a+1],g=B[B[B[r+1]+i]+a],_=B[B[B[r+1]+i+1]+a],v=B[B[B[r+1]+i]+a+1],y=B[B[B[r+1]+i+1]+a+1];return Yr(d,Yr(u,Yr(l,Xr(f,o,s,c),Xr(g,o-1,s,c)),Yr(l,Xr(p,o,s-1,c),Xr(_,o-1,s-1,c))),Yr(u,Yr(l,Xr(m,o,s,c-1),Xr(v,o-1,s,c-1)),Yr(l,Xr(h,o,s-1,c-1),Xr(y,o-1,s-1,c-1))))}var Qr=[[`forgeDepotN`,0,0,0],[`forgeDepotW`,-1,0,1],[`forgeDepotS`,0,-1,1],[`forgeDepotE`,1,-1,0]],$r=[0,1,2,3,4,5];function ei(e,t,n=0){let r=ge(e,t),i=(n%6+6)%6;return Qr.map(([e,t,n,a])=>{let o={x:t,y:n,z:a};for(let e=0;e<i;e++)o=ve(o.x,o.y,o.z);let s=_e(r.x+o.x,r.z+o.z);return[e,s.q,s.r]})}function ti(e){return(e%6+6)%6*60}function ni(e){let t=e>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var ri=817954798,ii=[`Bulwark`,`Pike`,`Drover`],ai=[`Bulwark`,`Halberd`,`Nightjar`,`Kestrel`,`Pike`,`Pike`,`Drover`,`Drover`],oi=[`Bulwark`,`Halberd`,`Nightjar`,`Kestrel`,`Sabre`,`Lynx`,`Shrike`,`Pike`,`Pike`,`Pike`,`Drover`,`Drover`,`Drover`],si=`AttackBoat`,ci=e=>e%2==0?[[0,-1],[1,-1],[1,0],[0,1],[-1,0],[-1,-1]]:[[0,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0]];function li(e,t,n){let r=new Set;for(let i=0;i<t;i++)for(let t=0;t<n;t++)F.isImpassable(e[i]?.[t]?.type??`WATER`)||r.add(`${i},${t}`);let i=new Set;for(;r.size;){let e=r.values().next().value,t=new Set([e]);r.delete(e);let n=[e];for(let e=0;e<n.length;e++){let[i,a]=n[e].split(`,`).map(Number);for(let[e,o]of ci(i)){let s=`${i+e},${a+o}`;r.has(s)&&(r.delete(s),t.add(s),n.push(s))}}t.size>i.size&&(i=t)}return i}function ui(e,t,n){let r=new Set;for(let i=0;i<t;i++)for(let t=0;t<n;t++)e[i]?.[t]?.type===`WATER`&&r.add(`${i},${t}`);let i=new Set;for(;r.size;){let e=r.values().next().value,t=new Set([e]);r.delete(e);let n=[e];for(let e=0;e<n.length;e++){let[i,a]=n[e].split(`,`).map(Number);for(let[e,o]of ci(i)){let s=`${i+e},${a+o}`;r.has(s)&&(r.delete(s),t.add(s),n.push(s))}}t.size>i.size&&(i=t)}return i}function di(e,t,n,r,i){let a=new Set([`${n},${r}`]),o=[[n,r]];for(let n=0;n<o.length;n++){let[r,s]=o[n];if(i(r,s))return[r,s];for(let[n,i]of ci(r)){let c=r+n,l=s+i;c<0||l<0||c>=e||l>=t||a.has(`${c},${l}`)||(a.add(`${c},${l}`),o.push([c,l]))}}return null}function fi(e,t){return[[e,t],...ci(e).map(([n,r])=>[e+n,t+r])]}function pi(e,t,n){let r=ge(e,t),i={x:0,y:-2,z:2},a=(n%6+6)%6;for(let e=0;e<a;e++)i=ve(i.x,i.y,i.z);let o=_e(r.x+i.x,r.z+i.z);return[o.q,o.r]}function mi(e,t,n){let r=ge(e,t),i={x:0,y:-1,z:1},a=(n%6+6)%6;for(let e=0;e<a;e++)i=ve(i.x,i.y,i.z);let o=_e(r.x+i.x,r.z+i.z);return[o.q,o.r]}function hi(e=Math.random){return ti(Math.min($r.length-1,Math.floor(e()*$r.length)))}function gi(e,t,n){let r=(e-1)/2,i=(t-1)/2,a=[];n%2==1&&a.push([r,i]);let o=[[.24,.12],[.1,.3],[.32,.3]];for(let s=0;s<Math.floor(n/2);s++){let[n,c]=o[s%o.length],l=n*(e-1),u=c*(t-1);a.push([r-l,i-u]),a.push([r+l,i+u])}return a.map(([e,t])=>[Math.round(e),Math.round(t)])}function _i(e,t,n,r,i,a,o=Math.random){let s=e.length?li(e,t,n):new Set,c=e.length?ui(e,t,n):new Set,l=new Set,u=(e,t)=>s.has(`${e},${t}`)&&!l.has(`${e},${t}`),d=[],f=[{ownerIndex:0,q:Math.floor(t/2),r:Math.max(0,n-2)},{ownerIndex:1,q:Math.floor(t/2),r:Math.min(n-1,1)}],p=(e,r,i)=>{let[a,o]=pi(e,r,i);return fi(e,r).every(([e,r])=>e>=0&&e<t&&r>=0&&r<n&&u(e,r))&&a>=0&&a<t&&o>=0&&o<n&&u(a,o)},m=(e,t)=>$r.some(n=>p(e,t,n));for(let e of f){let r=s.size?di(t,n,e.q,e.r,m):[e.q,e.r];if(!r)throw Error(`Random map ${t}x${n} has no free mainland hex for player ${e.ownerIndex}'s HQ`);let[i,a]=r,c=`hq@player${e.ownerIndex}`,u=s.size?hi(o)/60:0,f=u;for(let e=0;e<$r.length;e++){let t=(u+e)%$r.length;if(!s.size||p(i,a,t)){f=t;break}}let h=ti(f),[g,_]=mi(i,a,f);for(let[t,[n,r]]of fi(i,a).entries())l.add(`${n},${r}`),d.push({type:`hq`,q:n,r,ownerIndex:e.ownerIndex,hiddenUnitType:null,groupId:c,isEntrance:n===g&&r===_,drawnByAnchor:t!==0,rotationDeg:h});let[v,y]=pi(i,a,f);l.add(`${v},${y}`)}let h=e=>r.map((i,a)=>{let o=Math.floor((t-r.length)/2)+a;if(!s.size)return{type:i,q:o,r:e};let[c,d]=di(t,n,o,e,u)??[o,e];return l.add(`${c},${d}`),{type:i,q:c,r:d}}),g={player:h(n-1),cpu:h(0)},_=e=>Array.from({length:a},(r,i)=>{let o=Math.floor((t-a)/2)+i;if(!c.size)return{type:si,q:o,r:e};let s=di(t,n,o,e,(e,t)=>c.has(`${e},${t}`)&&!l.has(`${e},${t}`));if(!s)throw Error(`Random map ${t}x${n} has fewer than ${a*2} connected water hexes`);let[u,d]=s;return l.add(`${u},${d}`),{type:si,q:u,r:d}});g.player.push(..._(n-1)),g.cpu.push(..._(0));let v=(e,r,i)=>ei(e,r,i).every(([,e,r])=>e>=0&&e<t&&r>=0&&r<n&&u(e,r)),y=(e,t)=>$r.some(n=>v(e,t,n));if(s.size)for(let[e,r]of gi(t,n,i)){let i=di(t,n,e,r,y);if(!i)continue;let[a,s]=i,c=Math.floor(o()*$r.length),u=c;for(let e=0;e<$r.length;e++){let t=(c+e)%$r.length;if(v(a,s,t)){u=t;break}}let f=`forgeDepot@${a},${s}`;for(let[e,t,n]of ei(a,s,u)){l.add(`${t},${n}`);for(let[e,r]of ci(t))l.add(`${t+e},${n+r}`);d.push({type:e,q:t,r:n,hiddenUnitType:e===`forgeDepotS`?`Sabre`:null,groupId:f,isEntrance:e===`forgeDepotS`,rotationDeg:ti(u)})}}return{spawns:g,buildings:d}}function vi(e,t){let n=new Map;for(let e of t)e.groupId&&n.set(e.groupId,[...n.get(e.groupId)??[],e]);for(let t of n.values()){let n=Math.max(...t.map(t=>e[t.q][t.r].height));for(let r of t)e[r.q][r.r].height=n}}function yi(e,t,n,r,i){let a=Math.min(t,n,r-1-t,i-1-n),o=Math.max(2,Math.round(Math.min(r,i)*.1)),s=Math.max(0,Math.min(1,a/o)),c=s*s*(3-2*s),l=.18;return l+(e-l)*c}function bi(e,t,n,r,i,a,o,s){let c=_i([],n,n,r,i,a,o===void 0?Math.random:ni(o));return{key:e,name:t,rows:n,cols:n,randomRoads:10,...o===void 0?{}:{seed:o},...s===void 0?{}:{colorGrade:s},get spawns(){return c.spawns},get buildings(){return c.buildings},generate(){let e=o===void 0?Math.random:ni(o),t=e()*4096,s=e()*4096,l=[];for(let n=0;n<this.cols;n++){l[n]=[];for(let r=0;r<this.rows;r++){let i=yi((Zr((n+t)/ot.PERLIN_SCALE,(r+s)/ot.PERLIN_SCALE)+1)/2,n,r,this.cols,this.rows),a=F.getTerrainTypeFromNoise(i),o=F.getTerrainBaseHeight(a),c=e()*F.getTerrainHeightVariation(a),u;u=a===`WATER`?o:o+i*ot.HEIGHT_SCALE+c-ot.VALLEY_OFFSET;let d=F.getLerpedTerrainColor(i,e);l[n][r]=new Dn(u,a,d)}}return c=_i(l,n,n,r,i,a,e),vi(l,c.buildings),l}}}var xi=bi(`random20`,`Random — Small`,20,ii,2,1),Si=bi(`random30`,`Random — Medium`,30,ai,3,2),Ci=bi(`random30fixed`,`Random — Medium · Fixed seed`,30,[],3,0,ri,{exposure:1,contrast:1,saturation:1,gamma:1,balance:[1,1,1]}),wi=bi(`random50`,`Random — Large`,50,oi,7,3),Ti=[yr,Rr,Kn,cr],Ei=[xi,Si,Ci,wi],Di=[Ur,Wr,Gr,Kr],Oi=[Rr,...Ti.filter(e=>e!==Rr),...Ei,...Di];function ki(e){return Oi.find(t=>t.key===e)}function Ai(){let e=ki(rt)??Oi[0];if(e.rows!==I.ROWS||e.cols!==I.COLS)throw Error(`Map size mismatch for "${e.key}": provider is ${e.cols}x${e.rows}, MAP_CONFIG is ${I.COLS}x${I.ROWS}. Update MAP_SIZES in constants.ts.`);return e}var ji=`Sabre`;function Mi(e,t,n){let r=M[n]?.terrainCosts;if(!r)return null;let i=(t,n)=>{let i=e.getTile(t,n);return!!i&&r[i.type]!=null};if(i(t.q,t.r)&&!e.isOccupied(t.q,t.r))return{q:t.q,r:t.r};for(let n of he(t.q,t.r))if(i(n.q,n.r)&&!e.isOccupied(n.q,n.r)&&!e.isBuilding(n.q,n.r))return n;return null}var Ni=8947848,Pi=1/7.2,Fi={factory:{model:`assets/buildings/factory-building.glb`,scale:.12,yOffset:0},hq:{model:`assets/buildings/grand-hall.glb`,scale:Pi,yOffset:0,rawMaterials:!0,teamTint:[`teamCamo`]},forgeDepotN:{model:`assets/buildings/apex-hall.glb`,scale:Pi,yOffset:0,zOffset:Math.sqrt(3)/2,keepOrigin:!0,rawMaterials:!0,teamTint:[`teamCamo`]},forgeDepotS:{model:`assets/buildings/apex-hall.glb`,scale:Pi,yOffset:0,keepOrigin:!0,drawnByAnchor:!0},forgeDepotE:{model:`assets/buildings/apex-hall.glb`,scale:Pi,yOffset:0,keepOrigin:!0,drawnByAnchor:!0},forgeDepotW:{model:`assets/buildings/apex-hall.glb`,scale:Pi,yOffset:0,keepOrigin:!0,drawnByAnchor:!0}},Ii=class{static async loadBuildingModels(){await z.loadModels(Fi)}static groupOf(e){return e.groupId?A().buildings.filter(t=>t.groupId===e.groupId&&!t.destroyed):[e]}static isEntrance(e){return e.isEntrance??!e.groupId}static tintFor(e){return e===null?Ni:A().players[e].color}static attachVisual(e){let t=R.findHex(e.q,e.r),r=Fi[e.type];if(r.drawnByAnchor||e.drawnByAnchor)return;let i=z.getModel(r.model);if(!t||!i)return;e.visual&&E.stopIlluminatingSurroundings(e.visual),e.visual&&t.userData.decorator===e.visual&&(t.remove(e.visual),t.userData.decorator=null);let a=r.rawMaterials?r.teamTint?z.cloneWithTeamTint(i,this.tintFor(e.ownerIndex),r.teamTint):z.cloneUntouched(i):z.createModelWithColor(i,this.tintFor(e.ownerIndex),!1,null,e.ownerIndex===null?`teamCamo`:[`teamCamo`,`energy`],void 0,!1),o=F.getHeight(t)+Fi[e.type].yOffset;a.position.set(t.userData.x,o,t.userData.z),e.rotationDeg&&(a.rotation.y=e.rotationDeg*Math.PI/180),r.zOffset&&a.translateZ(r.zOffset),rn(a,o,e.q*12.9898+e.r*78.233),t.userData.decorator=a,t.add(a),E.illuminateSurroundings(a),e.visual=a,n(),V.updateDecoratorTransparency(t)}static initializeBuildings(e){let t=Ai().buildings??[];for(let n of t){let t={type:n.type,q:n.q,r:n.r,ownerIndex:n.ownerIndex??null,hiddenUnitType:n.hiddenUnitType,groupId:n.groupId,isEntrance:n.isEntrance,rotationDeg:n.rotationDeg,drawnByAnchor:n.drawnByAnchor,destroyed:!1,visual:null};e.buildings.push(t);let r=e.map?.getTile(t.q,t.r);r&&(r.vegetated=!1),this.attachVisual(t)}}static getBuildingAt(e,t){return A().buildings.find(n=>n.q===e&&n.r===t&&!n.destroyed)}static tryCapture(e){if(!H.unitTypesRecord[e.type]?.canCapture)return!1;let t=this.getBuildingAt(e.q,e.r);if(!t||t.ownerIndex===e.playerIndex||t.type===`hq`||!this.isEntrance(t))return!1;let n=this.groupOf(t);for(let t of n)t.ownerIndex=e.playerIndex,t.productionCountdown=4,this.attachVisual(t);for(let r of n){if(!r.hiddenUnitType)continue;let n=r.hiddenUnitType;r.hiddenUnitType=null,t.productType=n,this.yieldHiddenUnit(t,n,e.playerIndex)}return!0}static yieldHiddenUnit(e,t,n){let r=A(),i=H.unitTypesRecord[t],a=[];for(let t=-2;t<=2;t++)for(let n=-2;n<=2;n++){let r=e.q+t,i=e.r+n;R.getDistance(e.q,e.r,r,i)===2&&a.push({q:r,r:i})}let o=[...R.getNeighbors(e.q,e.r),...a];for(let e of o){let a=r.map.getTile(e.q,e.r);if(a&&i.terrainCosts[a.type]!=null&&!r.getUnitAt(e.q,e.r)&&!this.getBuildingAt(e.q,e.r)){r.spawnUnit(t,e.q,e.r,n);return}}console.warn(`Factory at (${e.q},${e.r}): no free tile to yield ${t} -- unit lost`)}static onTileSunk(e,t){let n=this.getBuildingAt(e,t);if(!n)return;let r=A(),i=n.type===`hq`&&n.groupId?r.buildings.filter(e=>e.groupId===n.groupId):[n];for(let e of i){if(e.visual){E.stopIlluminatingSurroundings(e.visual);let t=R.findHex(e.q,e.r);t?.userData.decorator===e.visual&&(t.remove(e.visual),t.userData.decorator=null)}e.destroyed=!0,e.visual=null}r.checkHeadquartersDefeat()}},Li=new WeakMap;function Ri(e){return e?.material?Array.isArray(e.material)?e.material:[e.material]:[]}function zi(e,t){e?.traverse?.(e=>{if(e.isMesh)for(let n of Ri(e)){if(!n)continue;if(t){let e=Li.get(n);e||(e={transparent:!!n.transparent,opacity:n.opacity??1,depthWrite:n.depthWrite??!0},Li.set(n,e)),n.transparent=!0,n.opacity=e.opacity*.3,n.depthWrite=!1,n.needsUpdate=!0;continue}let e=Li.get(n);e&&(n.transparent=e.transparent,n.opacity=e.opacity,n.depthWrite=e.depthWrite,n.needsUpdate=!0,Li.delete(n))}})}var Bi=class{constructor(){this.heap=[]}enqueue(e,t){this.heap.push({item:e,priority:t}),this._bubbleUp(this.heap.length-1)}dequeue(){if(this.heap.length===0)return null;let e=this.heap[0],t=this.heap.pop();return this.heap.length>0&&(this.heap[0]=t,this._sinkDown(0)),e.item}isEmpty(){return this.heap.length===0}_bubbleUp(e){let t=this.heap[e];for(;e>0;){let n=Math.floor((e-1)/2),r=this.heap[n];if(t.priority>=r.priority)break;this.heap[n]=t,this.heap[e]=r,e=n}}_sinkDown(e){let t=this.heap.length,n=this.heap[e];for(;;){let r=2*e+1,i=2*e+2,a=null;if(r<t&&this.heap[r].priority<n.priority&&(a=r),i<t){let e=this.heap[i];(a===null&&e.priority<n.priority||a!==null&&e.priority<this.heap[a].priority)&&(a=i)}if(a===null)break;this.heap[e]=this.heap[a],this.heap[a]=n,e=a}}};function Vi(e){return e.type===`hq`||e.isHeadquarters===!0}function Hi(e,t){return!Vi(e)||e.destroyed?!0:e.isEntrance===!0&&e.ownerIndex===t}function Ui(e,t){return Array.from({length:t},(e,t)=>t).filter(t=>e.some(e=>Vi(e)&&e.ownerIndex===t&&e.destroyed))}var Wi=class{static heuristic(e,t){return t?.5*R.getDistance(e.q,e.r,t.q,t.r):0}static dijkstra(e,t,n=1/0,r,i=null,a=null){let o=new Map,s=new Map,c=new Set,l=new Set;V.hexGrid.forEach(e=>{let t=new R(e.userData.q,e.userData.r).getKey();o.set(t,1/0)});let u=new R(e,t),d=u.getKey();o.set(d,0),c.add(d);let f=null,p=i!==null&&a!==null?(f=new R(i,a)).getKey():null,m=new Bi;for(m.enqueue(d,0+(f?this.heuristic(u,f):0));!m.isEmpty();){let e=m.dequeue();if(l.has(e))continue;l.add(e);let t=o.get(e);if(t>n||p&&e===p)break;let i=R.fromKey(e);i.getHex()&&i.getValidNeighbors().forEach(({coord:i,hex:a})=>{if(i.isOccupied())return;if(M[r.type]?.unitClass!==`air`){let e=ie()?.buildings.find(e=>e.q===i.q&&e.r===i.r&&!e.destroyed);if(e&&!Hi(e,r.playerIndex))return}let u=i.getKey();if(l.has(u))return;let d=F.getMoveCost(a,r);if(!d)return;let p=t+d;if(p<o.get(u)&&(o.set(u,p),s.set(u,e),p<=n)){c.add(u);let e=f?this.heuristic(i,f):0;m.enqueue(u,p+e)}})}return{distances:o,previous:s,reachable:c}}static getPath(e,t,n,r,i,a){let o=new R(e,t),s=new R(n,r),{previous:c,reachable:l}=this.dijkstra(o.q,o.r,i,a,n,r),u=[],d=s.getKey();if(!l.has(d))return[];for(;c.has(d);){let e=R.fromKey(d).getHex();e&&u.unshift(e),d=c.get(d)}let f=o.getHex();return f&&u.unshift(f),u.slice(1)}},Gi=` varying vec2 vDecalLocal;
 varying vec2 vDecalWorld;
 varying vec3 vDecalWorldPos;
 uniform float uHexRadius;
 uniform float uDirection;
 uniform float uShowTextures;
 float dcBumpH;`,Ki=`
    vec2 decalHeading(float rotation) {
        return vec2(sin(rotation), cos(rotation));
    }
`,qi=`
    {
        vec2 p = vDecalLocal / uHexRadius;
        vec2 wp = vDecalWorld;
        vec2 d = decalHeading(uDirection);

        float along = dot(p, d);
        // World-sampled wobble, so the ragged edge of this half lines up
        // with the half it meets and with the next tile's.
        float across = abs(dot(p, vec2(-d.y, d.x))) + (groundFbm(wp * 3.5) - 0.5) * 0.07;

        // The half itself, plus the cap that ties it to the other halves
        // on this tile. Not 'half' -- reserved word once three compiles
        // this as GLSL ES 3.00 on a WebGL2 context.
        // The ramps are deliberately wide: the alpha threshold below only
        // has this gradient to fade across, so a steep mask leaves a hard
        // rim however soft the threshold is.
        float arm = smoothstep(0.36, 0.14, across) * smoothstep(-0.02, 0.10, along);
        float road = max(arm, smoothstep(0.33, 0.11, length(p)));

        // Crushed aggregate: a mottled base with grit on top of it, rather
        // than one flat swatch of grey. This is most of what stops it
        // looking moulded.
        float grit = mix(0.5, groundNoise(wp * 42.0), groundDetailFade(wp * 42.0));
        // Not 'patch' -- also a reserved word in GLSL ES 3.00.
        float mottle = groundFbm(wp * 3.2);
        // Kept in the mid tones: a near-black metalling reads as a hole
        // cut in the map against this pastel terrain palette.
        vec3 surface = mix(vec3(0.34, 0.32, 0.30), vec3(0.53, 0.50, 0.46), mottle);
        surface *= 0.86 + 0.28 * grit;

        // Worn wheel ruts either side of the centreline, polished darker
        // by traffic; the crown between them stays lighter.
        float rut = exp(-pow((across - 0.115) / 0.05, 2.0));
        surface *= 1.0 - rut * 0.20;

        // Cracks: the ridge line of a noise field, so they wander and
        // branch instead of tiling.
        float crack = smoothstep(0.035, 0.0, abs(groundFbm(wp * 4.0 + 13.0) - 0.5));
        surface = mix(surface, surface * 0.5, crack * 0.7);

        // Gravel shoulder where the metalling gives out, dusted with the
        // dirt it was cut into.
        float shoulder = smoothstep(0.9, 0.3, road);
        surface = mix(surface, vec3(0.50, 0.41, 0.30) * (0.8 + 0.4 * grit), shoulder * 0.75);

        // Relief for the bump pass: BROAD, gentle undulation -- the light
        // drifting along the road the way it does over the ground beside
        // it -- with only a whisper of grit. The cracks stay a COLOR
        // detail: engraving them into the relief turned the whole road
        // into cracked concrete.
        dcBumpH = (groundFbm(wp * 1.1) * 0.7 + grit * 0.10 - rut * 0.15) * uShowTextures;

        diffuseColor.rgb = surface;
        // Alpha, not a hard rim: the edge dissolves into the terrain over a
        // wide noisy threshold, so the road thins out into the dirt instead
        // of ending on a cut-out silhouette. Two noise scales -- a coarse
        // one that makes the verge wander, a fine one that breaks the last
        // of it into grit.
        float verge = (groundFbm(wp * 6.0) - 0.5) * 0.26 + (groundNoise(wp * 26.0) - 0.5) * 0.12;
        diffuseColor.a *= smoothstep(0.02, 0.62, road + verge);
        // Roads and tracks are textures too: the toolbar's texture
        // toggle takes them out with the grass and the rock.
        diffuseColor.a *= uShowTextures;
    }
`,Ji=`
    {
        roughnessFactor *= 0.85 + 0.30 * mix(0.5, groundNoise(vDecalWorld * 42.0), groundDetailFade(vDecalWorld * 42.0));
        // Traffic polishes the RUTS smoother than the crown between
        // them -- the two worn lines catch the sun first, which is what
        // makes a used road read as used.
        vec2 rp = vDecalLocal / uHexRadius;
        vec2 rd = decalHeading(uDirection);
        float rAcross = abs(dot(rp, vec2(-rd.y, rd.x)));
        float rRut = exp(-pow((rAcross - 0.115) / 0.05, 2.0));
        roughnessFactor -= rRut * 0.22;
        roughnessFactor = clamp(roughnessFactor, 0.08, 1.0);
    }
`;function Yi(e,t){e.onBeforeCompile=e=>{e.uniforms.uHexRadius={value:I.HEX_RADIUS},e.uniforms.uDirection={value:t},e.uniforms.uShowTextures=mt.showTextures,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
 varying vec2 vDecalLocal;
 varying vec2 vDecalWorld;
 varying vec3 vDecalWorldPos;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
 vDecalLocal = position.xz;
 vDecalWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
 vDecalWorld = vDecalWorldPos.xz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
 varying vec2 vDecalLocal;
 varying vec2 vDecalWorld;
 varying vec3 vDecalWorldPos;
 uniform float uHexRadius;
 uniform float uDirection;
 uniform float uShowTextures;
 float dcBumpH;
`+Pt+f+Ki).replace(`#include <color_fragment>`,`#include <color_fragment>
`+qi).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
`+Ji).replace(`#include <normal_fragment_begin>`,`#include <normal_fragment_begin>
 normal = groundPerturbNormal(vDecalWorldPos, normal, dcBumpH, 0.07);`)},e.customProgramCacheKey=()=>`road-surface`}function Xi(e){e.onBeforeCompile=e=>{e.uniforms.uHexRadius={value:I.HEX_RADIUS},e.uniforms.uShowTextures=mt.showTextures;let t=Gi.replace(` uniform float uDirection;
`,``)+`
 varying float vRoadDirection;`,n=qi.replace(/uDirection/g,`vRoadDirection`),r=Ji.replace(/uDirection/g,`vRoadDirection`);e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
 varying vec2 vDecalLocal;
 varying vec2 vDecalWorld;
 varying vec3 vDecalWorldPos;
 attribute float aRoadDirection;
 attribute vec2 aRoadLocal;
 varying float vRoadDirection;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
 vDecalLocal = position.xz;
 vDecalWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
 vDecalWorld = vDecalWorldPos.xz;
 vDecalLocal = aRoadLocal;
 vRoadDirection = aRoadDirection;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
`+t+`
`+Pt+f+Ki).replace(`#include <color_fragment>`,`#include <color_fragment>
`+n).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
`+r).replace(`#include <normal_fragment_begin>`,`#include <normal_fragment_begin>
 normal = groundPerturbNormal(vDecalWorldPos, normal, dcBumpH, 0.07);`)},e.customProgramCacheKey=()=>`chunked-road-surface`}var Zi=`
    {
        vec2 p = vDecalLocal / uHexRadius;
        vec2 wp = vDecalWorld;
        vec2 d = decalHeading(uDirection);

        float along = dot(p, d);
        float across = abs(dot(p, vec2(-d.y, d.x)));

        // Two ruts a track-width apart -- across is unsigned, so one band
        // measured from the centreline gives both at once. Its edges are
        // chewed up by noise sampled in WORLD space, so the wobble carries
        // across the tile border into the next print.
        float wob = (groundFbm(wp * 4.0) - 0.5) * 0.06;
        float rut = smoothstep(0.10, 0.02, abs(across - 0.20 + wob));

        // Tread bars stamped along the rut.
        float bars = 0.5 + 0.5 * sin(along * 28.0 + groundNoise(wp * 5.0) * 3.0);
        rut *= 0.55 + 0.45 * smoothstep(0.25, 0.75, bars);

        // A narrow dark floor and a faint churned shoulder make the print
        // read as pressed into the soil instead of painted onto it.
        float rutCore = smoothstep(0.045, 0.005, abs(across - 0.20 + wob));
        float churn = smoothstep(0.15, 0.07, abs(across - 0.20 + wob));

        // The half: from the tile centre outward, then easing off at the
        // rim so it does not cut off squarely on the hex border.
        rut *= smoothstep(-0.02, 0.08, along) * smoothstep(1.12, 0.85, along);

        // Dark turned earth. Raising the alpha alone only washes the grass
        // out; the mark has to be darker than the ground to read as a rut.
        diffuseColor.rgb = mix(vec3(0.09, 0.05, 0.02), vec3(0.20, 0.11, 0.05), groundNoise(wp * 20.0));
        diffuseColor.rgb *= 1.0 - rutCore * 0.30;
        diffuseColor.rgb += vec3(0.035, 0.020, 0.010) * churn * (1.0 - rutCore);
        // diffuseColor.a already carries the material's opacity, which
        // FootprintSystem winds down each turn -- so the print fades.
        diffuseColor.a *= rut;
        diffuseColor.a *= uShowTextures;
    }
`;function Qi(e,t){e.onBeforeCompile=e=>{e.uniforms.uHexRadius={value:I.HEX_RADIUS},e.uniforms.uDirection={value:t},e.uniforms.uShowTextures=mt.showTextures,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
 varying vec2 vDecalLocal;
 varying vec2 vDecalWorld;
 varying vec3 vDecalWorldPos;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
 vDecalLocal = position.xz;
 vDecalWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
 vDecalWorld = vDecalWorldPos.xz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
 varying vec2 vDecalLocal;
 varying vec2 vDecalWorld;
 varying vec3 vDecalWorldPos;
 uniform float uHexRadius;
 uniform float uDirection;
 uniform float uShowTextures;
 float dcBumpH;
`+Pt+Ki).replace(`#include <color_fragment>`,`#include <color_fragment>
`+Zi)},e.customProgramCacheKey=()=>`track-surface`}var $i=class{static{this.roads=[]}static{this.roadTextures={}}static{this.roadTexturePromises={}}static{this.terrainCosts={SAND:1,GRASS:1,FOREST:2,MOUNTAIN:1/0,WATER:1/0}}static async initialize(){}static generateRoad(e,t,n,r){let i={type:`Road`,move:1/0,q:e,r:t,playerIndex:0},a=Wi.getPath(e,t,n,r,1/0,i);return a.length===0?(console.warn(`No valid path found for road construction`),!1):(a.forEach(e=>{let t=A().map.getTile(e.userData.q,e.userData.r);t&&(t.hasRoad=!0,t.vegetated=!1,V.smoothHexTile(e))}),!0)}static getRoadCost(e){return this.terrainCosts[e]||1/0}static createRoad(e){let t=J.getObjectByName(`roads`)||new THREE.Group;t.name=`roads`;let n=V.getHexNeighborsCoords(e.userData.q,e.userData.r),r=new THREE.Group,i=V.getWorldCoordinates(e.userData.q,e.userData.r);for(let t=0;t<6;t++){let[i,a]=n[t];if(A().map.getTile(i,a)?.hasRoad){let t=H.getRotation(e.userData.q,e.userData.r,i,a),n=W.createTexturedHexGeometry(e,null,{heightOffset:0,color:`#ffffff`,opacity:1,renderOrder:0,depthWrite:!0,materialType:`MeshStandardMaterial`,receiveShadow:!0,castShadow:!1,metalness:.05,roughness:.62,flatShading:!1,dithering:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});n&&(Yi(n.material,t),n.userData.roadDirection=t,n.castShadow=!1,n.receiveShadow=!0,r.add(n))}}return r.position.copy(i),r.userData.isRoadSource=!0,r.userData.q=e.userData.q,r.userData.r=e.userData.r,t.add(r),J.getObjectByName(`roads`)||J.add(t),this.roads.push(r),r}static removeRoad(e){let t=this.roads.indexOf(e);t>-1&&this.roads.splice(t,1);let n=J.getObjectByName(`roads`);n&&n.remove(e),e.traverse(e=>{if(!e.isMesh)return;e.geometry?.dispose?.();let t=Array.isArray(e.material)?e.material:[e.material];for(let e of t)e?.dispose?.()})}static removeRoadsAt(e,t){this.roads.filter(n=>{let r=n.position,i=V.getWorldCoordinates(e,t);return r.distanceTo(i)<.1}).forEach(e=>this.removeRoad(e))}},ea=5;function ta(e){return e?.children?.find(e=>e instanceof THREE.Mesh&&!e.userData?.isBoundingMesh&&e.userData?.isTerrainTile)}function na(e){return Math.floor(e/ea)}function ra(e,t){return`${na(e)}:${na(t)}`}var ia=class{static{this.parent=null}static{this.grid=[]}static{this.chunks=new Map}static{this.dirty=new Set}static rebuildAll(e,t){this.dispose(),this.parent=e,this.grid=t;let n=new Set;for(let e of t)e.userData.type!==`water`&&n.add(ra(e.userData.q,e.userData.r));for(let e of n)this.rebuildChunk(e);this.syncSourceVisibility()}static markTileAndNeighborsDirty(e){if(this.parent)for(let t of e)t?.userData&&this.dirty.add(ra(t.userData.q,t.userData.r))}static flush(){if(!(!this.parent||!this.dirty.size)){for(let e of this.dirty)this.rebuildChunk(e);this.dirty.clear(),this.syncSourceVisibility()}}static dispose(){for(let e of this.chunks.values())for(let t of e)t.mesh.parent?.remove(t.mesh),t.mesh.geometry?.dispose?.();this.chunks.clear(),this.dirty.clear(),this.parent=null,this.grid=[]}static rebuildChunk(e){let t=this.chunks.get(e)??[];for(let e of t)e.mesh.parent?.remove(e.mesh),e.mesh.geometry?.dispose?.();let n=new Map;for(let t of this.grid){if(ra(t.userData.q,t.userData.r)!==e||t.userData.type===`water`)continue;let r=ta(t);if(!r)continue;let i=n.get(r.material);i?i.push(r):n.set(r.material,[r])}let r=[];for(let[t,i]of n){let n=i.map(e=>{let t=e.geometry.clone();return e.updateMatrix(),t.applyMatrix4(e.matrix),t}),a=y(n,!1);for(let e of n)e.dispose();if(!a)continue;a.computeBoundingBox(),a.computeBoundingSphere();let o=new THREE.Mesh(a,t);o.name=`terrainChunk:${e}`,o.castShadow=!0,o.receiveShadow=!0,o.userData.isTerrainChunk=!0,this.parent.add(o),r.push({mesh:o,material:t})}this.chunks.set(e,r)}static syncSourceVisibility(){for(let e of this.grid){let t=ta(e);t&&(t.visible=e.userData.type===`water`)}}},aa=5;function oa(e,t){return`${Math.floor(e/aa)}:${Math.floor(t/aa)}`}var sa=class{static{this.parent=null}static{this.chunks=new Map}static rebuildAll(e){this.dispose(),this.parent=e;let t=new Set;for(let n of e.children)n.userData?.isRoadSource&&t.add(oa(n.userData.q,n.userData.r));for(let e of t)this.rebuildChunk(e);this.syncVisibility()}static tileGeometryChanged(e,t){this.parent&&(this.rebuildChunk(oa(e,t)),this.syncVisibility())}static dispose(){for(let e of this.chunks.values())e.parent?.remove(e),e.geometry?.dispose?.(),e.material?.dispose?.();this.chunks.clear(),this.parent=null}static rebuildChunk(e){let t=this.chunks.get(e);t&&(t.parent?.remove(t),t.geometry?.dispose?.(),t.material?.dispose?.(),this.chunks.delete(e)),this.parent.updateWorldMatrix(!0,!0);let n=new THREE.Matrix4().copy(this.parent.matrixWorld).invert(),r=[];for(let t of this.parent.children)t.userData?.isRoadSource&&oa(t.userData.q,t.userData.r)===e&&t.traverse(e=>{e.isMesh&&e.userData?.roadDirection!==void 0&&r.push(e)});if(!r.length)return;let i=r.map(e=>{e.updateWorldMatrix(!0,!1);let t=e.geometry.clone(),r=t.getAttribute(`position`),i=r.count,a=new Float32Array(i*2);for(let e=0;e<i;e++)a[e*2]=r.getX(e),a[e*2+1]=r.getZ(e);return t.setAttribute(`aRoadDirection`,new THREE.Float32BufferAttribute(new Float32Array(i).fill(e.userData.roadDirection),1)),t.setAttribute(`aRoadLocal`,new THREE.Float32BufferAttribute(a,2)),t.applyMatrix4(new THREE.Matrix4().multiplyMatrices(n,e.matrixWorld)),t}),a=y(i,!1);for(let e of i)e.dispose();if(!a)return;a.computeBoundingBox(),a.computeBoundingSphere();let o=r[0].material.clone();Xi(o),o.needsUpdate=!0;let s=new THREE.Mesh(a,o);s.name=`roadChunk:${e}`,s.castShadow=!1,s.receiveShadow=!0,s.userData.isRoadChunk=!0,this.parent.add(s),this.chunks.set(e,s)}static syncVisibility(){for(let e of this.parent.children)e.userData?.isRoadSource&&(e.visible=!1)}},ca=5;function la(e,t){return`${Math.floor(e/ca)}:${Math.floor(t/ca)}`}function ua(e){let t=Array.isArray(e?.material)?e.material:[e?.material];return!!e?.isMesh&&t.some(e=>e?.userData?.burnUniform)}var da=class{static{this.parent=null}static{this.grid=[]}static{this.chunks=new Map}static rebuildAll(e,t){this.dispose(),this.parent=e,this.grid=t;let n=new Set;for(let e of t)ua(e.userData?.decorator)&&n.add(la(e.userData.q,e.userData.r));for(let e of n)this.rebuildChunk(e);this.syncVisibility()}static setTileDynamic(e,t){let n=e?.userData?.decorator;!this.parent||!ua(n)||!!e.userData.decorationChunkDynamic!==t&&(e.userData.decorationChunkDynamic=t,this.rebuildChunk(la(e.userData.q,e.userData.r)),this.syncVisibility())}static tileGeometryChanged(e){!this.parent||!e?.userData||(this.rebuildChunk(la(e.userData.q,e.userData.r)),this.syncVisibility())}static dispose(){for(let e of this.chunks.values())e.parent?.remove(e),e.geometry?.dispose?.();this.chunks.clear(),this.parent=null,this.grid=[]}static rebuildChunk(e){let t=this.chunks.get(e);t&&(t.parent?.remove(t),t.geometry?.dispose?.(),this.chunks.delete(e));let n=this.grid.filter(t=>la(t.userData.q,t.userData.r)===e).filter(e=>!e.userData.decorationChunkDynamic).map(e=>e.userData.decorator).filter(ua);if(!n.length)return;let r=n.map(e=>{let t=e.geometry.clone();return e.updateMatrix(),t.applyMatrix4(e.matrix),t}),i=y(r,!1);for(let e of r)e.dispose();if(!i)return;i.computeBoundingBox(),i.computeBoundingSphere();let a=n[0],o=new THREE.Mesh(i,a.material);o.name=`decorationChunk:${e}`,o.castShadow=!0,o.receiveShadow=!0,o.customDepthMaterial=a.customDepthMaterial,o.userData.isDecorationChunk=!0,this.parent.add(o),this.chunks.set(e,o)}static syncVisibility(){for(let e of this.grid){let t=e.userData?.decorator;ua(t)&&(t.visible=!!e.userData.decorationChunkDynamic)}}};function fa(e,t){let n=Ai().seed;return n===void 0?Math.random()*Math.PI*2:ni(n^Math.imul(e+1,2654435761)^Math.imul(t+1,2246822507))()*Math.PI*2}var V=class e{static{this.hexGrid=[]}static{this.textureLoader=new THREE.TextureLoader}static{this.textures={}}static{this.materialCache=new Map}static getOption(e){let t=typeof window<`u`?window.HEX_ENGINE:null;if(t?.getOption){let n=t.getOption(e);if(n!==void 0)return n}throw Error(`GridSystem option "${e}" is not configured.`)}static generateHexBufferData(e,t){let n=[],r=[],i=[];for(let t=0;t<6;t++){let i=t*Math.PI/3;n.push(e*Math.cos(i),0,e*Math.sin(i)),r.push(.5+Math.cos(i)*.5,.5+Math.sin(i)*.5)}for(let i=0;i<6;i++){let a=i*Math.PI/3;n.push(e*Math.cos(a),t,e*Math.sin(a)),r.push(.5+Math.cos(a)*.5,.5+Math.sin(a)*.5)}n.push(0,0,0,0,t,0),r.push(.5,.5,.5,.5);for(let e=0;e<6;e++)i.push(13,6+(e+1)%6,6+e);for(let e=0;e<6;e++)i.push(12,e,(e+1)%6);for(let e=0;e<6;e++){let t=(e+1)%6;i.push(e,e+6,t),i.push(e+6,t+6,t)}return{vertices:n,uvs:r,indices:i}}static applyVertexColors(e,t){let n=new Float32Array(t.length),r=new Float32Array(t.length/3),i=e.userData.intendedColor;for(let e=0;e<t.length;e+=3)i?(n[e]=i.r,n[e+1]=i.g,n[e+2]=i.b,r[e/3]=.299*i.r+.587*i.g+.114*i.b):(n[e]=n[e+1]=n[e+2]=1,r[e/3]=1);e.setAttribute(`color`,new THREE.Float32BufferAttribute(n,3)),e.setAttribute(`aPristineLum`,new THREE.Float32BufferAttribute(r,1))}static createHexGeometryWithColor(e,t,n){let r=new THREE.BufferGeometry;r.userData.intendedColor=new THREE.Color(n);let{vertices:i,uvs:a,indices:o}=this.generateHexBufferData(e,t);r.setAttribute(`position`,new THREE.Float32BufferAttribute(i,3)),r.setAttribute(`uv`,new THREE.Float32BufferAttribute(a,2));let s=[];for(let e=0;e<i.length;e+=3)s.push(i[e],i[e+2]);r.setAttribute(`aTileLocal`,new THREE.Float32BufferAttribute(s,2)),r.setIndex(o),r.computeVertexNormals(),this.applyVertexColors(r,i);let c=i.length/3;r.setAttribute(`aShoreA`,new THREE.Float32BufferAttribute(new Float32Array(c*3),3)),r.setAttribute(`aShoreB`,new THREE.Float32BufferAttribute(new Float32Array(c*3),3)),r.setAttribute(`aWaterPin`,new THREE.Float32BufferAttribute(new Float32Array(c),1));let l=new Float32Array(c*3);for(let e=0;e<c;e++)l[e*3+1]=1;return r.setAttribute(`aTileNormal`,new THREE.Float32BufferAttribute(l,3)),r}static createHexGeometry(e=I.HEX_RADIUS,t=1){return this.createHexGeometryWithColor(e,t,16777215)}static createBoundingMesh(e,t,n){let r=this.createHexGeometry(I.HEX_RADIUS,e),i=new THREE.MeshBasicMaterial({visible:!1,side:THREE.DoubleSide}),a=new THREE.Mesh(r,i);return a.position.set(t,0,n),a.userData={isBoundingMesh:!0},a.raycast=THREE.Mesh.prototype.raycast,a}static createBaseHexMesh(e,t,n,r,i){let a=this.createHexGeometryWithColor(I.HEX_RADIUS,t,e),o=this.createStandardMaterial(i),s=new THREE.Mesh(a,o);return s.position.set(n,0,r),s.castShadow=!0,s.receiveShadow=i!==`water`,s.userData.isTerrainTile=!0,s.userData.terrainType=i,s}static loadTexture(e){return this.textures[e]||(this.textures[e]=this.textureLoader.load(e,e=>{e.wrapS=THREE.RepeatWrapping,e.wrapT=THREE.RepeatWrapping,e.repeat.set(1,1),e.colorSpace=THREE.SRGBColorSpace,e.minFilter=THREE.LinearMipMapLinearFilter,e.magFilter=THREE.LinearFilter,q&&(e.anisotropy=q.capabilities.getMaxAnisotropy()),e.needsUpdate=!0},void 0,t=>{console.error(`Error loading texture ${e}:`,t)})),this.textures[e]}static createStandardMaterial(e){if(this.materialCache.has(e))return this.materialCache.get(e);let t=new THREE.Color(16777215),n=F.getTerrainMaterial(e.toUpperCase()),r=new THREE.MeshStandardMaterial({color:t,metalness:n.metalness,roughness:n.roughness,flatShading:!0,dithering:!1,vertexColors:!0});return e.toUpperCase()===`WATER`?Gt(r):Kt(r,e.toUpperCase()),this.materialCache.set(e,r),r}static createDecoratorMaterial(e){let t=new THREE.Color(e);return new THREE.MeshStandardMaterial({color:t,metalness:.2,roughness:.7,flatShading:!0,dithering:!0})}static addHex(e){this.hexGrid.push(e)}static getHexIntersects(t){let n=[];return e.hexGrid.forEach((e,t)=>{let r=!1;e.children.forEach(e=>{e instanceof THREE.Mesh&&e.userData.isBoundingMesh&&(r=!0,n.push(e))}),r||console.warn(`Hex ${t} has no bounding mesh!`)}),t.intersectObjects(n,!1)}static createHexShape(e=I.HEX_RADIUS){let t=new THREE.Shape;for(let n=0;n<6;n++){let r=n*Math.PI/3,i=e*Math.cos(r),a=e*Math.sin(r);n===0?t.moveTo(i,a):t.lineTo(i,a)}return t}static createHexPrism(e,t,n,r,i,a=`grass`,o,s){let c=new THREE.Group,l=this.createBoundingMesh(r,t,n);c.add(l);let u=this.createBaseHexMesh(e,r,t,n,a);c.add(u);let d={x:t,z:n,height:r,moveCost:i,type:a,q:o,r:s};return a===`water`&&(d.timeOffset=fa(o,s),d.originalHeight=r),c.userData=d,l.userData={...d,isBoundingMesh:!0},c}static surfaceHeightAt(e,t,n){let r=e?.geometry?.attributes?.position;if(!r||r.count<14)return 0;let i=Math.atan2(n,t);i<0&&(i+=Math.PI*2);let a=Math.floor(i/(Math.PI/3))%6,o=(a+1)%6,s=r.getX(6+a),c=r.getZ(6+a),l=r.getY(6+a),u=r.getX(6+o),d=r.getZ(6+o),f=r.getY(6+o),p=r.getY(13),m=s*d-c*u;if(Math.abs(m)<1e-9)return p;let h=(t*d-n*u)/m,g=(s*n-c*t)/m;return p*(1-h-g)+l*h+f*g}static decorateTerrain(){if(!this.getOption(`enableDecorations`))return;let e=ie(),t=new Set((Ai().buildings??[]).map(e=>`${e.q},${e.r}`));for(let n of this.hexGrid){let{q:r,r:i,x:a,z:o,height:s,type:c}=n.userData;if(n.userData.decorator||t.has(`${r},${i}`)||e?.map?.getTile(r,i)?.hasRoad)continue;let l=n.children.find(e=>e instanceof THREE.Mesh&&!e.userData.isBoundingMesh),u=g(c.toUpperCase(),r,i,s,(e,t)=>this.surfaceHeightAt(l,e,t)-s-.02);u&&(u.position.set(a,s,o),n.userData.decorator=u,n.add(u))}}static createMiniMapTerrain(e){let t=hs.getObjectByName(`miniMapTerrain`);t&&(hs.remove(t),t.geometry?.dispose?.(),t.material?.dispose?.());let n=[],r=[],i=[],a=new THREE.Color,o=I.HEX_RADIUS*.8;for(let t of e){let e=n.length/3;a.set(t.color).multiplyScalar(1.5);for(let e=0;e<6;e++){let i=e*Math.PI/3;n.push(t.x+Math.cos(i)*o,0,t.z+Math.sin(i)*o),r.push(a.r,a.g,a.b)}n.push(t.x,0,t.z),r.push(a.r,a.g,a.b);for(let t=0;t<6;t++)i.push(e+6,e+t,e+(t+1)%6)}let s=new THREE.BufferGeometry;s.setAttribute(`position`,new THREE.Float32BufferAttribute(n,3)),s.setAttribute(`color`,new THREE.Float32BufferAttribute(r,3)),s.setIndex(i),s.computeBoundingSphere();let c=new THREE.MeshBasicMaterial({vertexColors:!0,transparent:!0,opacity:.6,side:THREE.DoubleSide,depthWrite:!1,depthTest:!1}),l=new THREE.Mesh(s,c);l.name=`miniMapTerrain`,hs.add(l)}static async createMap(e){this.clear();let t=I.COLS*I.HEX_RADIUS*1.5/2,n=I.ROWS*I.HEX_RADIUS*Math.sqrt(3)/2,r=e?.map?e.map:e,i=[];for(let e=0;e<I.COLS;e++)for(let t=0;t<I.ROWS;t++){let n=I.HEX_RADIUS*1.5*e,a=I.HEX_RADIUS*Math.sqrt(3)*(t+e%2/2),o=r?.getTile(e,t);if(o){let r=o.type.toLowerCase(),{color:s,height:c,moveCost:l}=o,u=this.createHexPrism(s,n,a,c,l,r,e,t);u.userData.q=e,u.userData.r=t,u.userData.type=r,u.children.forEach(n=>{n.userData.isBoundingMesh&&(n.userData.q=e,n.userData.r=t)}),J.add(u),this.addHex(u),i.push({color:s,x:n,z:a})}}return this.createMiniMapTerrain(i),{mapCenterX:t,mapCenterZ:n,mapReady:!0}}static getWorldCoordinates(e,t){let n=I.HEX_RADIUS*1.5*e,r=I.HEX_RADIUS*Math.sqrt(3)*(t+e%2/2);return new THREE.Vector3(n,0,r)}static getWorldCoordinatesWithHeight(e,t,n=0){let r=this.getWorldCoordinates(e,t);return r.y=n,r}static getHexNeighborsCoords(e,t){return(e%2==1?[[1,0],[0,-1],[-1,0],[-1,1],[0,1],[1,1]]:[[1,-1],[0,-1],[-1,-1],[-1,0],[0,1],[1,0]]).map(([n,r])=>[e+n,t+r])}static getHexNeighbors(e,t){return this.getHexNeighborsCoords(e,t).map(([e,t])=>this.findHex(e,t))}static paintShoreEdges(e,t,n){let r=e.attributes.aShoreA,i=e.attributes.aShoreB,a=e.attributes.aWaterPin;if(!r||!i)return;let o=[];for(let e=0;e<6;e++){let r=t[5-e],i=!!r&&r.userData.type===`water`,a=n===`water`?!!r&&!i:i;o.push(+!!a)}for(let e=0;e<r.count;e++)r.setXYZ(e,o[0],o[1],o[2]),i.setXYZ(e,o[3],o[4],o[5]);if(r.needsUpdate=!0,i.needsUpdate=!0,a){for(let e=0;e<a.count;e++){let t=e<12?e%6:-1,r=+(n===`water`&&t>=0&&(o[t]>0||o[(t+5)%6]>0));a.setX(e,r)}a.needsUpdate=!0}}static smoothHexTile(e){let t=e.children.find(e=>e instanceof THREE.Mesh&&!e.userData.isBoundingMesh);if(!t)return;let n=t.geometry,r=n.attributes.position,{q:i,r:a,height:o,type:s}=e.userData,c=this.getHexNeighbors(i,a);if(this.paintShoreEdges(n,c,s),(Ai().buildings??[]).some(e=>e.q===i&&e.r===a))return;let l=this.getWorldCoordinatesWithHeight(i,a,o),u=[[c[0],c[5]],[c[5],c[4]],[c[4],c[3]],[c[3],c[2]],[c[2],c[1]],[c[1],c[0]]];for(let e=0;e<6;e++)r.setY(e,0);r.setY(12,0);let d=new Float32Array(r.count*3);for(let e=0;e<6;e++){let i=e+6,a=o,c=1,f=[l],p=t.geometry.userData.intendedColor,m=p.r,h=p.g,g=p.b;u[e].forEach(e=>{if(e){a+=e.userData.height,c++;let t=e.children.find(e=>e instanceof THREE.Mesh&&!e.userData.isBoundingMesh);if(t&&e.userData.type!==`water`&&s!==`water`){let e=t.geometry.userData.intendedColor;m+=e.r,h+=e.g,g+=e.b}let n=this.getWorldCoordinatesWithHeight(e.userData.q,e.userData.r,e.userData.height);f.push(n)}});let _=u[e].some(e=>e&&e.userData.type===`water`)||s===`water`?F.getTerrainBaseHeight(`WATER`):a/c,[v,y,b]=s===`water`?[p.r,p.g,p.b]:[m/c,h/c,g/c],x=ee(_*1e3);r.setXYZ(i,r.getX(i)+x.x,_,r.getZ(i)+x.z);let S=n.attributes.color;if(s===`water`)S.setXYZ(i,p.r,p.g,p.b);else{S.setXYZ(i,v,y,b);let e=n.attributes.aPristineLum;e&&(e.setX(i,.299*v+.587*y+.114*b),e.needsUpdate=!0)}S.needsUpdate=!0;let C;if(f.length>=3){let e=new THREE.Vector3().subVectors(f[1],f[0]),t=new THREE.Vector3().subVectors(f[2],f[0]);C=new THREE.Vector3().crossVectors(e,t).normalize()}else if(f.length===2){let e=new THREE.Vector3().subVectors(f[1],f[0]),t=new THREE.Vector3(0,1,0);C=new THREE.Vector3().crossVectors(e,t).normalize().add(t).normalize()}else C=new THREE.Vector3(0,1,0);d.set([C.x,C.y,C.z],i*3),d.set([C.x,C.y,C.z],e*3)}r.setY(12,0);let f=0,p=0,m=0;for(let e=6;e<12;e++)f+=r.getX(e),p+=r.getY(e),m+=r.getZ(e);r.setXYZ(13,f/6,p/6,m/6);let h=new THREE.Vector3(r.getX(13),r.getY(13),r.getZ(13)),g=e=>new THREE.Vector3(r.getX(6+e),r.getY(6+e),r.getZ(6+e)),_=new THREE.Vector3;for(let e=0;e<6;e++){let t=g((e+1)%6).sub(h),n=g(e).sub(h);_.add(new THREE.Vector3().crossVectors(t,n))}_.lengthSq()<1e-12&&_.set(0,1,0),_.normalize(),_.y<0&&_.negate(),e.userData.rawTileNormal=_.clone();let v=n.attributes.aTileNormal;if(v){for(let e=0;e<v.count;e++)v.setXYZ(e,_.x,_.y,_.z);v.needsUpdate=!0}let y=new THREE.Vector3(0,0,0),b=0;for(let e=0;e<6;e++){let t=e*3;d[t]!==void 0&&(y.add(new THREE.Vector3(d[t],d[t+1],d[t+2])),b++)}b>0?y.divideScalar(b).normalize():y.set(0,1,0),d.set([y.x,y.y,y.z],36),d.set([y.x,y.y,y.z],39),n.setAttribute(`normal`,new THREE.Float32BufferAttribute(d,3)),r.needsUpdate=!0,A().map.getTile(i,a)?.hasRoad&&($i.removeRoadsAt(i,a),$i.createRoad(e),sa.tileGeometryChanged(i,a))}static smoothTerrain(){this.hexGrid.forEach(e=>this.smoothHexTile(e)),this.smoothTileNormals(),ia.rebuildAll(J,this.hexGrid);let e=J.getObjectByName(`roads`);e&&sa.rebuildAll(e)}static smoothTileNormals(){let e=new Set((Ai().buildings??[]).map(e=>`${e.q},${e.r}`)),t=new THREE.Vector3(0,1,0),n=e=>e?.userData?.rawTileNormal??t;for(let t of this.hexGrid){let{q:r,r:i}=t.userData;if(e.has(`${r},${i}`))continue;let a=t.children.find(e=>e instanceof THREE.Mesh&&!e.userData.isBoundingMesh)?.geometry?.attributes?.aTileNormal;if(!a||!t.userData.rawTileNormal)continue;let o=this.getHexNeighbors(r,i),s=[[o[0],o[5]],[o[5],o[4]],[o[4],o[3]],[o[3],o[2]],[o[2],o[1]],[o[1],o[0]]];for(let e=0;e<6;e++){let r=n(t).clone(),i=1;for(let t of s[e])t&&(r.add(n(t)),i++);r.divideScalar(i).normalize(),a.setXYZ(e,r.x,r.y,r.z),a.setXYZ(e+6,r.x,r.y,r.z)}let c=n(t);a.setXYZ(12,c.x,c.y,c.z),a.setXYZ(13,c.x,c.y,c.z),a.needsUpdate=!0}}static animateWater(e){this.materialCache.forEach(t=>{let n=t?.userData?.shader?.uniforms;n?.uTime&&(n.uTime.value=e),n?.time&&(n.time.value=e*yt)})}static updateDecoratorTransparency(e){if(!e||!e.userData||!e.userData.decorator)return;let t=A().getUnitAt(e.userData.q,e.userData.r);zi(e.userData.decorator,!!t);let n=(Array.isArray(e.userData.decorator.material)?e.userData.decorator.material:[e.userData.decorator.material]).some(e=>(e?.userData?.burnUniform?.value??0)>.5);da.setTileDynamic(e,!!t||n)}static updateAllDecoratorTransparency(){this.hexGrid.forEach(e=>this.updateDecoratorTransparency(e))}static buildDecorationChunks(){da.rebuildAll(J,this.hexGrid),this.updateAllDecoratorTransparency()}static updateHexGeometry(e,t,r=!1){if(!e)return;n();let i=e.geometry,a=i.attributes.position,o=i.attributes.color;for(let e=0;e<6;e++)a.setY(e,0);a.setY(12,0);let s=r?t:e.userData.height;for(let e=6;e<12;e++)a.setY(e,s);if(a.setY(13,s),r){let e=new THREE.Color(F.getTerrainColor(`WATER`));for(let t=0;t<a.count;t++)o.setXYZ(t,e.r,e.g,e.b);o.needsUpdate=!0}a.needsUpdate=!0,i.computeVertexNormals()}static updateHexAndBoundingMeshHeight(e,t,r){n();let i=e.children.find(e=>e instanceof THREE.Mesh&&!e.userData.isBoundingMesh);if(i){let e=i.geometry,n=e.attributes.position,a=e.attributes.color;n.setY(13,t),a.setXYZ(13,r.r,r.g,r.b),a.needsUpdate=!0,n.needsUpdate=!0}let a=e.children.find(e=>e.userData.isBoundingMesh);if(a){let e=a.geometry.attributes.position;e.setY(13,t),e.needsUpdate=!0}e.userData.decorator&&(e.userData.decorator.position.y=t,da.tileGeometryChanged(e))}static convertHexToWater(e,t){let n=F.getTerrainBaseHeight(`WATER`);t.type=`WATER`,t.height=n,t.color=F.getTerrainColor(`WATER`),t.moveCost=F.terrainTypes.WATER.moveCost,e.userData.type=`water`,e.userData.height=n,e.userData.originalHeight=n,e.userData.timeOffset=fa(e.userData.q,e.userData.r),e.userData.decorator&&(e.remove(e.userData.decorator),e.userData.decorator=null,da.tileGeometryChanged(e));let r=e.children.find(e=>e instanceof THREE.Mesh&&!e.userData.isBoundingMesh);r&&(r.material=this.createStandardMaterial(`water`),r.geometry.userData.intendedColor=new THREE.Color(t.color),this.updateHexGeometry(r,n,!0));let i=e.children.find(e=>e.userData.isBoundingMesh);i&&(i.userData.type=`water`,this.updateHexGeometry(i,n,!0))}static modifyHexHeight(e,t){let n=ie();if(!n?.map)return!1;let r=this.findHex(e.q,e.r),i=n.map.getTile(e.q,e.r);if(!r||!i||r.userData.type===`water`)return!1;let a=Math.max(0,i.height+t);if(a<=F.getTerrainBaseHeight(`WATER`))this.convertHexToWater(r,i),Ii.onTileSunk(e.q,e.r);else{i.height=a,r.userData.height=a,r.userData.originalHeight=a;let e=new THREE.Color(ut);this.updateHexAndBoundingMeshHeight(r,a,e)}ha.removeFootprintsAt(e.q,e.r);let o=this.getHexNeighbors(e.q,e.r);this.smoothHexTile(r),o.forEach(e=>{e&&this.smoothHexTile(e)}),this.smoothTileNormals();let s=new Set([r,...o.filter(Boolean)]);for(let e of o)if(e)for(let t of this.getHexNeighbors(e.userData.q,e.userData.r))t&&s.add(t);return ia.markTileAndNeighborsDirty([...s]),ia.flush(),!0}static findHex(e,t){return this.hexGrid.find(n=>n.userData.q===e&&n.userData.r===t)}static getUnitAtHex(e){if(!e)return null;let t=ie();return t?.units?t.units.find(t=>t.q===e.userData.q&&t.r===e.userData.r):null}static clear(){ia.dispose(),da.dispose(),sa.dispose(),this.hexGrid.length=0}};window.hexGrid=V.hexGrid,window.GridSystem=V;var pa=.86,ma=3,ha=class{static{this.footprints=[]}static{this.trackTextures={}}static{this.trackTexturePromises={}}static async initialize(){}static getFootprintTexture(e){return H.unitTypes[e]?.footprintTexture??null}static createFootprint(e,t=0,n=null){if(A().map.getTile(e.userData.q,e.userData.r)?.hasRoad||!n||!this.getFootprintTexture(n))return null;let r=J.getObjectByName(`footprints`)||new THREE.Group;r.name=`footprints`;let i=W.createTexturedHexGeometry(e,null,{heightOffset:lt.FOOTPRINT_OFFSET,color:`#ffffff`,opacity:pa,renderOrder:25,materialType:`MeshStandardMaterial`,receiveShadow:!0,castShadow:!1,metalness:0,roughness:.95,flatShading:!0,dithering:!1});if(!i)return null;Qi(i.material,t);let a=new THREE.Group;a.add(i);let o=V.getWorldCoordinates(e.userData.q,e.userData.r);return a.position.copy(o),r.add(a),J.getObjectByName(`footprints`)||J.add(r),a.userData.turnsLeftToLive=ma,this.footprints.push(a),a}static removeFootprint(e){let t=this.footprints.indexOf(e);t>-1&&this.footprints.splice(t,1);let n=J.getObjectByName(`footprints`);n&&n.remove(e)}static removeFootprintsAt(e,t){this.footprints.filter(n=>{let r=n.position,i=V.getWorldCoordinates(e,t);return r.distanceTo(i)<.1}).forEach(e=>this.removeFootprint(e))}static update(){for(let e=this.footprints.length-1;e>=0;e--){let t=this.footprints[e];t.userData.turnsLeftToLive--;let n=t.userData.turnsLeftToLive/ma*pa;t.traverse(e=>{e.isMesh&&(e.material.opacity=n)}),t.userData.turnsLeftToLive<=0&&this.removeFootprint(t)}}},ga=class{static{this.audioContext=null}static{this.sounds=new Map}static{this.music=null}static{this.initialized=!1}static{this.FADE_DURATION=.2}static async initialize(){this.initialized||=(this.audioContext=new(window.AudioContext||window.webkitAudioContext),await this.loadSound(`rlauncher1`,`assets/sounds/rlauncher.ogg`),await this.loadSound(`rlauncher2`,`assets/sounds/rlauncher2.ogg`),await this.loadSound(`rlauncher3`,`assets/sounds/rlauncher3.ogg`),await this.loadSound(`explosion`,`assets/sounds/explosion.ogg`),await this.loadSound(`engine_heavy`,`assets/sounds/engine_heavy_loop.mp3`),await this.loadSound(`engine_light`,`assets/sounds/Car_Engine_Loop.ogg`),await this.loadSound(`step1`,`assets/sounds/step_lth33.ogg`),await this.loadSound(`battleship_movement`,`assets/sounds/BattleShipMovementAmbient.ogg`),await this.loadSound(`jet`,`assets/sounds/jet.wav`),await this.loadSound(`cannon`,`assets/sounds/glauncher.ogg`),this.sounds.set(`rotor`,this.createRotorBuffer()),!0)}static createRotorBuffer(){let e=this.audioContext,t=e.sampleRate,n=Math.floor(t*1),r=e.createBuffer(1,n,t),i=r.getChannelData(0),a=0;for(let e=0;e<n;e++){let n=e/t,r=n*16%1,o=Math.exp(-r*7)-Math.exp(-7),s=Math.random()*2-1;a+=(s-a)*.06;let c=.05*Math.sin(2*Math.PI*190*n)+.03*Math.sin(2*Math.PI*377*n);i[e]=(a*(.35+.65*o)*1.6+o*.22+c)*.6}return r}static async loadSound(e,t){try{let n=await(await fetch(t)).arrayBuffer(),r=await this.audioContext.decodeAudioData(n);this.sounds.set(e,r)}catch(t){console.error(`Error loading sound ${e}:`,t)}}static async loadMusic(e){try{let t=await(await fetch(e)).arrayBuffer(),n=await this.audioContext.decodeAudioData(t),r=this.audioContext.createBufferSource();r.buffer=n;let i=this.audioContext.createGain();i.gain.value=.5,r.connect(i),i.connect(this.audioContext.destination),this.music={source:r,gainNode:i,isPlaying:!1}}catch(e){console.error(`Error loading music:`,e)}}static playSound(e,t=1,n=null){let r=this.sounds.get(e);if(r){let e=this.audioContext.createBufferSource(),i=this.audioContext.createGain();e.buffer=r,i.gain.value=t,e.connect(i),i.connect(this.audioContext.destination),e.start(0),n!==null&&setTimeout(()=>{e.stop()},n)}}static playMusic(e=!0){this.music&&!this.music.isPlaying&&(this.music.source.loop=e,this.music.source.start(0),this.music.isPlaying=!0)}static stopMusic(){this.music&&this.music.isPlaying&&(this.music.source.stop(),this.music.isPlaying=!1)}static setMusicVolume(e){this.music&&(this.music.gainNode.gain.value=e)}static playEngineSound(e){e.engineSound&&this.stopEngineSound(e);let t=H.unitTypes[e.type];if(!t||!t.sounds||!t.sounds.movement)return;let n=this.audioContext.createBufferSource(),r=this.audioContext.createGain();if(n.buffer=this.sounds.get(t.sounds.movement)??null,!n.buffer){console.warn(`Movement sound ${t.sounds.movement} not found for unit type ${e.type}`);return}n.loop=!0,r.gain.value=0,n.connect(r),r.connect(this.audioContext.destination),e.engineSound={source:n,gainNode:r},n.start(0),r.gain.setTargetAtTime(.3,this.audioContext.currentTime,this.FADE_DURATION)}static stopEngineSound(e){if(e.engineSound){let{source:t,gainNode:n}=e.engineSound;n.gain.setTargetAtTime(0,this.audioContext.currentTime,this.FADE_DURATION),setTimeout(()=>{t.stop(),e.engineSound=null},this.FADE_DURATION*1e3)}}static playAttackSound(e){let t=H.unitTypes[e.type];!t||!t.sounds||!t.sounds.attack||this.playSound(t.sounds.attack,.8)}};function _a(e,t,n){if(e<=0||t<=0||n<=0)return 0;let r=Math.min(t/n,1);return Math.max(1,Math.round(e*r))}var va=-.1,ya=.25;function ba(e){let t=e>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function xa(...e){let t=2654435769;for(let n of e)t=Math.imul(t^n+2654435769,2246822507),t^=t>>>13;return t>>>0}function Sa(e){let t=M[e];return Math.round((t.minDamage+t.maxDamage)/2)}function Ca(e){return e.effect.kind===`attack`?Math.round((e.effect.minDamage+e.effect.maxDamage)/2):0}function wa(e,t,n,r,i){let a=e.getUnit(t),o=e.getUnit(n);if(!a||!o)return null;let s=(i?P(a.type,i):void 0)??Qe(a.type),c=M[a.type],l=s?.effect.kind===`attack`?s.effect.attackEffect:c.attackEffect,u=s?Ca(s):Sa(a.type),d=e=>_a(e,a.hp,a.maxHp),f=[],p=[];if(!N(a.type,o.type))return{attackerIndex:t,defenderIndex:n,hits:f,impacts:p};if(l===`projectile`||l===`laser`||l===`cannon`||l===`flak`){let e=Ke(a.type,o.type);f.push({unitIndex:n,damage:d(Math.floor(u*e))})}else if(l===`rocketBarrage`){let t=[{q:o.q,r:o.r}];for(let n of be(o.q,o.r))n.q>=0&&n.q<e.cols&&n.r>=0&&n.r<e.rows&&t.push({q:n.q,r:n.r});for(let n of t){let t=e.getUnitAt(n.q,n.r);if(!t)continue;let[r,i]=t;if(!N(a.type,i.type))continue;let s=n.q===o.q&&n.r===o.r,c=Ke(a.type,i.type);f.push({unitIndex:r,damage:d(Math.floor(u*(s?1:ya)*c))})}let n=ba(r);for(let e=0;e<6;e++){let e=t[Math.floor(n()*t.length)];p.push({q:e.q,r:e.r,craterDelta:va})}}else if(l===`rocketVolley`){let e=Ke(a.type,o.type),t=d(Math.floor(u*e)),r=Math.floor(t/4),i=t-r*4;for(let e=0;e<4;e++){let e=r+ +(i-->0);e>0&&f.push({unitIndex:n,damage:e}),p.push({q:o.q,r:o.r,craterDelta:0})}}return{attackerIndex:t,defenderIndex:n,hits:f,impacts:p}}var Ta=null,Ea=null,Da=null,Oa=null;function ka(e){Oa=e}function Aa(){Oa?.(Ea,Ma())}function ja(){return Ta?.isConnected?Ta:(Ta=document.createElement(`div`),Ta.id=`skill-bar`,document.body.appendChild(Ta),Ta)}function Ma(){return!Ea||!Da?null:Ze(Ea.type).find(e=>e.id===Da)??null}function Na(e){Ea=e;let t=ja();if(t.replaceChildren(),!e){t.style.display=`none`,Da=null;return}let n=Ze(e.type);if(n.length===0){t.style.display=`none`,Da=null;return}t.style.display=`flex`,Da=n[0].id;for(let r of n){let n=document.createElement(`button`);n.className=`skill`,n.dataset.skill=r.id,n.title=`${r.name} — range ${r.minRange}-${r.maxRange}`+(r.cooldown>0?`, every ${r.cooldown} turns`:``);let i=document.createElement(`span`);i.className=`skill-glyph`,i.textContent=r.glyph,n.appendChild(i);let a=e.cooldowns?.[r.id]??0;if(a>0){let e=document.createElement(`span`);e.className=`skill-cooldown`,e.textContent=String(a),n.appendChild(e)}let o=ze(e,r);n.disabled=!o,n.classList.toggle(`is-selected`,r.id===Da),n.addEventListener(`click`,()=>{o&&(Da=r.id,Pa(),Aa())}),t.appendChild(n)}}function Pa(){if(Ta?.isConnected)for(let e of Array.from(Ta.children)){let t=e;t.classList.toggle(`is-selected`,t.dataset.skill===Da)}}function Fa(){Ea&&Na(Ea)}var Ia=44,La=18,Ra=300,za=.9,Ba=1.2,Va=1.1,Ha=2.6,Ua=.85,Wa=2.4,Ga=2.3,Ka=16753960,qa=14169350,Ja=2827810,Ya=[`assets/textures/explosion1.png`,`assets/textures/explosion2.png`,`assets/textures/explosion3.png`,`assets/textures/explosion4.png`],Xa=[`assets/textures/smoke1.png`,`assets/textures/smoke2.png`,`assets/textures/smoke3.png`,`assets/textures/smoke4.png`],Za=[.34,.62,.88,1.2,.88,.62],Qa=2,$a=[.85,.45];function eo(e){let t={trunks:[],crowns:[]};if(!(Array.isArray(e?.material)?e.material:[e?.material]).some(e=>e?.userData?.burnUniform))return t;let n=e?.geometry?.attributes?.position,r=e?.geometry?.attributes?.aDecorKind;if(!n||!r||n.count!==r.count)return t;for(let e=0;e<n.count;e++){let i={x:n.getX(e),y:n.getY(e),z:n.getZ(e)};r.getX(e)>.5?t.crowns.push(i):t.trunks.push(i)}return t}function to(e){let t=[...e.trunks,...e.crowns];if(!t.length)return{flames:Ia,smoke:La};let n=1/0,r=-1/0,i=1/0,a=-1/0,o=1/0,s=-1/0;for(let e of t)n=Math.min(n,e.x),r=Math.max(r,e.x),i=Math.min(i,e.y),a=Math.max(a,e.y),o=Math.min(o,e.z),s=Math.max(s,e.z);let c=a-i,l=Math.hypot(r-n,s-o),u=c*.8+l*.35,d=Math.max(14,Math.min(88,Math.round(8+u*22)));return{flames:d,smoke:Math.max(6,Math.min(36,Math.round(d*La/Ia)))}}var no=class{static{this.fires=new Map}static{this.group=null}static key(e,t){return`${e},${t}`}static root(){return(!this.group||this.group.parent!==G)&&(this.group=new THREE.Group,this.group.name=`fires`,G.add(this.group)),this.group}static sync(e){if(!G||typeof THREE>`u`)return;let t=new Set;for(let n=0;n<e.cols;n++)for(let r=0;r<e.rows;r++){let i=e.getTile(n,r);if(!Se(i))continue;t.add(this.key(n,r)),this.fires.has(this.key(n,r))||this.light(n,r,i.height);let a=this.fires.get(this.key(n,r));this.setScale(a,this.growthOf(i.burning)),i.burning<=1&&!a.charred&&(this.char(n,r),a.charred=!0)}for(let[n,r]of[...this.fires])if(!t.has(n)){if(e.getTile(r.q,r.r)?.burned&&r.smoulder<0){r.charred||=(this.char(r.q,r.r),!0),r.smoulder=Qa,r.layers[0].points.visible=!1,this.setScale(r,$a[0]);continue}r.smoulder>0||this.extinguish(n,r)}}static growthOf(e){let t=6-e;return Za[Math.min(Math.max(t,0),Za.length-1)]}static setScale(e,t){for(let n of e.layers)n.material.uniforms.uScale.value=t}static tickSmoulder(){for(let[e,t]of[...this.fires])if(!(t.smoulder<0)){if(t.smoulder--,t.smoulder<=0){this.extinguish(e,t);continue}this.setScale(t,$a[Qa-t.smoulder]??$a[$a.length-1])}}static light(e,t,n){let r=new R(e,t).getWorldPosition(),i={x:r.x,y:n+.04,z:r.z},a={q:e,r:t,layers:[],smoulder:-1,charred:!1},o=V.findHex(e,t)?.userData?.decorator,s=eo(o),c=to(s),l=e=>{let t=new THREE.Vector3(e.x,e.y,e.z);return o.localToWorld(t),{x:t.x,y:t.y,z:t.z}};(s.trunks.length||s.crowns.length)&&o.updateWorldMatrix(!0,!1);let u=s.trunks.map(l),d=s.crowns.map(l),f=d.reduce((e,t)=>Math.min(e,t.y),1/0),p=d.reduce((e,t)=>Math.max(e,t.y),-1/0),m=d.filter(e=>e.y>=f+(p-f)*.55),h=[{points:u,weight:.38},{points:d,weight:.62}].filter(e=>e.points.length>0);a.layers.push(this.layer({base:i,anchorGroups:h,count:c.flames,texturePaths:Ya,size:za,life:Va,rise:Ua,spread:h.length?.045:.55,hot:Ka,cool:qa,emissive:Ga,additive:!0})),a.layers.push(this.layer({base:{...i,y:i.y+.35},anchorGroups:m.length?[{points:m,weight:1}]:h,count:c.smoke,texturePaths:Xa,size:Ba,life:Ha,rise:Wa,spread:h.length?.055:.42,hot:Ja,cool:Ja,emissive:1,additive:!1})),this.fires.set(this.key(e,t),a)}static layer(e){let{base:t,anchorGroups:n=[],count:r,texturePaths:i,size:a,life:o,rise:s,spread:c,hot:l,cool:u,emissive:d,additive:f}=e,p=new Float32Array(r*3),m=new Float32Array(r),h=new Float32Array(r),g=new Float32Array(r*2),_=new Float32Array(r),v=n.filter(e=>e.points?.length&&e.weight>0),y=v.reduce((e,t)=>e+t.weight,0),b=()=>{if(!v.length)return t;let e=Math.random()*y,n=v[v.length-1];for(let t of v)if(e-=t.weight,e<=0){n=t;break}return n.points[Math.floor(Math.random()*n.points.length)]};for(let e=0;e<r;e++){let t=b(),n=Math.random()*Math.PI*2,r=Math.sqrt(Math.random())*I.HEX_RADIUS*c;p[e*3]=t.x+Math.cos(n)*r,p[e*3+1]=t.y,p[e*3+2]=t.z+Math.sin(n)*r,m[e]=Math.random(),h[e]=a*(.65+Math.random()*.7),g[e*2]=(Math.random()-.5)*.35,g[e*2+1]=(Math.random()-.5)*.35,_[e]=Math.floor(Math.random()*4)}let x=new THREE.BufferGeometry;x.setAttribute(`position`,new THREE.BufferAttribute(p,3)),x.setAttribute(`aPhase`,new THREE.BufferAttribute(m,1)),x.setAttribute(`aSize`,new THREE.BufferAttribute(h,1)),x.setAttribute(`aDrift`,new THREE.BufferAttribute(g,2)),x.setAttribute(`aTexIndex`,new THREE.BufferAttribute(_,1));let S=new THREE.ShaderMaterial({uniforms:{uTime:{value:0},pointTextures:{value:i.map(e=>W.particleTexture(e))},uHot:{value:new THREE.Color(l)},uCool:{value:new THREE.Color(u)},uEmissive:{value:d},uLife:{value:o},uRise:{value:s},uSizeScale:{value:Ra},uScale:{value:Za[0]}},vertexShader:`
                attribute float aPhase;
                attribute float aSize;
                attribute vec2 aDrift;
                attribute float aTexIndex;
                uniform float uTime;
                uniform float uLife;
                uniform float uRise;
                uniform float uSizeScale;
                uniform float uScale;
                varying float vLife;
                varying float vTexIndex;
                void main() {
                    // The wrap. One object, burning forever.
                    vLife = mod(uTime / uLife + aPhase, 1.0);
                    vTexIndex = aTexIndex;

                    vec3 p = position;
                    p.y += vLife * uRise * uScale;
                    // Lean as it rises, so the column curls instead of
                    // standing like a pillar.
                    p.xz += aDrift * vLife * vLife;

                    vec4 mv = modelViewMatrix * vec4(p, 1.0);
                    gl_Position = projectionMatrix * mv;
                    // Swells then shrinks, the same sin(progress) shape the
                    // explosion uses -- a sprite that only ever shrinks
                    // reads as debris rather than as flame.
                    float swell = sin(vLife * 3.14159);
                    gl_PointSize = aSize * uScale * (0.35 + swell) * (uSizeScale / -mv.z);
                }
            `,fragmentShader:`
                uniform sampler2D pointTextures[4];
                uniform vec3 uHot;
                uniform vec3 uCool;
                uniform float uEmissive;
                varying float vLife;
                varying float vTexIndex;
                void main() {
                    vec4 tex;
                    if (vTexIndex < 0.5) tex = texture2D(pointTextures[0], gl_PointCoord);
                    else if (vTexIndex < 1.5) tex = texture2D(pointTextures[1], gl_PointCoord);
                    else if (vTexIndex < 2.5) tex = texture2D(pointTextures[2], gl_PointCoord);
                    else tex = texture2D(pointTextures[3], gl_PointCoord);

                    // Hot and pale where it is born, cooling as it climbs.
                    vec3 color = mix(uHot, uCool, vLife);
                    // Fades in fast, out slow, so the base of the column
                    // stays solid and only the top dissolves.
                    // Peaks well below 1, and this -- not the sprite size --
                    // is what keeps a dense column from summing to white.
                    // Forty overlapping additive sprites reach full
                    // brightness long before any single one does.
                    float fade = 0.30 * smoothstep(0.0, 0.10, vLife) * (1.0 - smoothstep(0.40, 1.0, vLife));

                    // THE SHAPE COMES FROM ALPHA, THE COLOUR FROM US.
                    // createParticleEffect multiplies by tex.rgb, which is
                    // right for its own sprites but renders these ones
                    // BLACK: the smoke and explosion PNGs carry their shape
                    // in the alpha channel over near-black colour, so
                    // tinting through rgb multiplies the flame down to
                    // nothing. Measured, not guessed -- at 12x size the
                    // sprites drew as black streaks over the map.
                    float alpha = tex.a * fade;
                    if (alpha < 0.01) discard;
                    gl_FragColor = vec4(color * uEmissive, alpha);
                }
            `,transparent:!0,depthWrite:!1,depthTest:!0,blending:f?THREE.AdditiveBlending:THREE.NormalBlending}),C=new THREE.Points(x,S);return C.frustumCulled=!1,C.renderOrder=f?101:100,this.root().add(C),{points:C,material:S}}static extinguish(e,t){for(let e of t.layers)e.points.parent?.remove(e.points),e.points.geometry.dispose(),e.material.dispose();this.fires.delete(e)}static char(e,t){let r=V.findHex(e,t),i=r?.userData?.decorator;i?.material?.userData?.burnUniform&&(i.material.userData.burnUniform.value=1,n(),V.updateDecoratorTransparency?.(r))}static animate(e){for(let t of this.fires.values())for(let n of t.layers)n.material.uniforms.uTime.value=e}static clear(){for(let[e,t]of[...this.fires])this.extinguish(e,t);this.fires.clear()}},ro=class{static{this.geometry=null}static{this.material=null}static getMaterial(){if(this.material)return this.material;let e=document.createElement(`canvas`);e.width=128,e.height=128;let t=e.getContext(`2d`);if(!t)return null;let n=t.createRadialGradient(64,64,5,64,64,62);n.addColorStop(0,`rgba(0, 0, 0, 0.72)`),n.addColorStop(.48,`rgba(0, 0, 0, 0.42)`),n.addColorStop(.78,`rgba(0, 0, 0, 0.13)`),n.addColorStop(1,`rgba(0, 0, 0, 0)`),t.fillStyle=n,t.fillRect(0,0,128,128);let r=new THREE.CanvasTexture(e);return r.needsUpdate=!0,this.material=new THREE.MeshBasicMaterial({map:r,color:0,transparent:!0,opacity:.55,depthTest:!0,depthWrite:!1,toneMapped:!1,side:THREE.DoubleSide,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),this.material}static attach(e,t,n=0){let r=this.getMaterial();if(!r)return;this.geometry||=new THREE.PlaneGeometry(1,1);let i=t.getSize(new THREE.Vector3),a=new THREE.Mesh(this.geometry,r);a.name=`contactShadow`,a.scale.set(Math.max(.32,Math.min(1.45,i.x*.88)),Math.max(.32,Math.min(1.45,i.z*.88)),1),a.rotation.x=-Math.PI/2,a.position.y=.018-n,a.renderOrder=2,a.castShadow=!1,a.receiveShadow=!1,e.add(a)}},io=new Set([`tank`,`artillery`,`aa`]);function ao(e,t){if(!io.has(e))return null;switch(t.toUpperCase()){case`SAND`:return{count:12,radius:.26,opacity:.72,color:11183517,size:.62,duration:1.35,horizontalSpeed:.38,upwardSpeed:.19,growth:.95,backwardBias:.4,sideOffset:.2,sideSpeed:.1};case`GRASS`:case`FOREST`:return{count:14,radius:.1,opacity:.92,color:8805176,size:.46,duration:1.15,horizontalSpeed:.2,upwardSpeed:.56,growth:.2,backwardBias:.68,sideOffset:.3,sideSpeed:.52};default:return null}}var oo=class{static{this.clouds=[]}static{this.texture=null}static getTexture(){return this.texture||(this.texture=new THREE.TextureLoader().load(`/assets/textures/smoke1.png`),this.texture.colorSpace=THREE.SRGBColorSpace),this.texture}static emitMovementSurface(e,t,n,r,i=1){let a=ao(t,n);a&&this.emit(e,{...a,count:Math.max(2,Math.round(a.count*i)),size:a.size*Math.sqrt(i)},r)}static emitRotorWash(e){this.emit(e,{count:16,radius:.72,opacity:.34,color:9142383,size:.48,duration:.62,horizontalSpeed:.95,upwardSpeed:.1,growth:1,backwardBias:0,sideOffset:0,sideSpeed:0},null)}static emit(e,t,n){let r=new Float32Array(t.count*3),i=[],a=n?new THREE.Vector3(-n.x,0,-n.z).normalize():new THREE.Vector3,o=n?new THREE.Vector3(n.z,0,-n.x).normalize():new THREE.Vector3;for(let n=0;n<t.count;n++){let s=Math.random()*Math.PI*2,c=n%2==0?-1:1,l=t.sideOffset*(.82+Math.random()*.18),u=Math.random()*t.radius;r[n*3]=e.x+Math.cos(s)*u+o.x*c*l,r[n*3+1]=e.y+.06+Math.random()*.07,r[n*3+2]=e.z+Math.sin(s)*u+o.z*c*l;let d=t.horizontalSpeed*(.65+Math.random()*.55);i.push(new THREE.Vector3(Math.cos(s)*d+a.x*t.backwardBias,t.upwardSpeed*(.72+Math.random()*.56),Math.sin(s)*d+a.z*t.backwardBias+o.z*c*t.sideSpeed)),i[n].x+=o.x*c*t.sideSpeed}let s=new THREE.BufferGeometry;s.setAttribute(`position`,new THREE.BufferAttribute(r,3));let c=new THREE.PointsMaterial({color:t.color,map:this.getTexture(),transparent:!0,depthWrite:!1,opacity:t.opacity,size:t.size,sizeAttenuation:!0,blending:THREE.NormalBlending}),l=new THREE.Points(s,c);l.frustumCulled=!1,l.renderOrder=18,G.add(l),this.clouds.push({points:l,velocities:i,start:performance.now()/1e3,duration:t.duration,baseSize:c.size,baseOpacity:t.opacity,growth:t.growth})}static animate(e){for(let t=this.clouds.length-1;t>=0;t--){let n=this.clouds[t],r=e-n.start,i=r/n.duration;if(i>=1||r<-1){G.remove(n.points),n.points.geometry.dispose(),n.points.material.dispose(),this.clouds.splice(t,1);continue}let a=1/60,o=n.points.geometry.attributes.position;for(let e=0;e<n.velocities.length;e++)o.setXYZ(e,o.getX(e)+n.velocities[e].x*a,o.getY(e)+n.velocities[e].y*a,o.getZ(e)+n.velocities[e].z*a);o.needsUpdate=!0,n.points.material.opacity=n.baseOpacity*(1-i)*(1-i),n.points.material.size=n.baseSize*(1+i*n.growth)}}static clear(){for(let e of this.clouds)G.remove(e.points),e.points.geometry.dispose(),e.points.material.dispose();this.clouds.length=0}},so=class{static{this.units=[]}static claim(e,t){if(!e||t===`infantry`)return;let n=e.getObjectByName(`chin_turret`)||e.getObjectByName(`turret_body`)||e.getObjectByName(`turret`);this.units.push({root:e,unitClass:t,moving:!1,baseRoll:e.rotation.z,baseScaleZ:e.scale.z,lastHeading:null,turret:n,turretBase:n?.quaternion.clone()??null,turretLag:0,recoilStarted:-10,recoilStrength:0})}static setMoving(e,t){let n=this.units.find(t=>t.root===e);n&&(n.moving=t,t||(n.root.rotation.z=n.baseRoll))}static headingChanged(e,t){let n=this.units.find(t=>t.root===e);if(n){if(n.lastHeading!==null&&n.turret){let e=t-n.lastHeading;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;n.turretLag=THREE.MathUtils.clamp(n.turretLag-e*.42,-.24,.24)}n.lastHeading=t}}static recoil(e,t){let n=this.units.find(t=>t.root===e);n&&(n.recoilStarted=performance.now()/1e3,n.recoilStrength=t.includes(`rocket`)?.018:.035)}static animate(e){let t=new THREE.Quaternion;for(let n=this.units.length-1;n>=0;n--){let r=this.units[n];if(!r.root.parent){this.units.splice(n,1);continue}if(r.moving){let t=r.unitClass===`tank`||r.unitClass===`artillery`||r.unitClass===`aa`;r.root.rotation.z=r.baseRoll+Math.sin(e*(t?18:23))*(t?.006:.009)}let i=e-r.recoilStarted,a=i>=0&&i<.24?Math.sin(i/.24*Math.PI)*r.recoilStrength:0;r.root.scale.z=r.baseScaleZ*(1-a),r.turret&&r.turretBase&&(r.turretLag*=.88,t.setFromAxisAngle(new THREE.Vector3(0,1,0),r.turretLag),r.turret.quaternion.copy(r.turretBase).multiply(t))}}static clear(){this.units.length=0}},H=class e{static{this.unitTypes=Ue}static get unitTypesRecord(){return M}static{this.CLASS_COUNTERS=We}static{this.canTarget=N}static{this.getClassModifier=Ke}static{this.getMovementCost=qe}static async loadUnitModels(){await z.loadModels(this.unitTypes)}static createUnitSprite(e,t,n,r){let i=document.createElement(`canvas`);i.width=256,i.height=256;let a=i.getContext(`2d`);a.fillStyle=`rgba(0, 0, 0, 0.82)`,((e,t,n,r,i)=>{a.beginPath(),a.moveTo(e+i,t),a.arcTo(e+n,t,e+n,t+r,i),a.arcTo(e+n,t+r,e,t+r,i),a.arcTo(e,t+r,e,t,i),a.arcTo(e,t,e+n,t,i),a.closePath()})(12,18,232,104,16),a.fill(),a.strokeStyle=`rgba(255, 255, 255, 0.16)`,a.lineWidth=3,a.stroke();let o=208/n,s=t<n*.33;for(let e=0;e<n;e++){let n=24+e*o;a.fillStyle=e<t?s?`#ff3b30`:`#3ddc5b`:`rgba(255, 255, 255, 0.13)`,a.fillRect(n+3/2,30,o-3,26),e<t&&(a.fillStyle=s?`rgba(255, 190, 185, 0.75)`:`rgba(200, 255, 210, 0.75)`,a.fillRect(n+3/2,30,o-3,4))}let c=this.unitTypesRecord[e].name,l=`"Avenir Next", "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif`,u=38;for(a.font=`700 ${u}px ${l}`;a.measureText(c).width>208&&u>20;)u--,a.font=`700 ${u}px ${l}`;return a.textAlign=`center`,a.textBaseline=`middle`,a.fillStyle=`#ffffff`,a.fillText(c,128,87),new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(i),transparent:!0,depthWrite:!1}))}static createModelWithColor(e,t,n=!0,r=null){let i=e.clone();if(n)i.traverse(e=>{e instanceof THREE.Mesh&&(Array.isArray(e.material)?e.material=e.material.map(e=>{let n=e.clone();return n.color.setHex(t),n}):(e.material=e.material.clone(),e.material.color.setHex(t)))});else if(r!==null){let e=(e,t)=>{let n=e>>16&255,r=e>>8&255,i=e&255,a=t>>16&255,o=t>>8&255,s=t&255;return Math.sqrt((n-a)**2+(r-o)**2+(i-s)**2)<50};i.traverse(n=>{n instanceof THREE.Mesh&&(Array.isArray(n.material)?n.material=n.material.map(n=>{let i=n.clone();return e(i.color.getHex(),r)&&i.color.setHex(t),i}):(n.material=n.material.clone(),e(n.material.color.getHex(),r)&&n.material.color.setHex(t)))})}return i}static createUnit(e,t,n,r){let i=this.createUnitSprite(e,this.unitTypesRecord[e].hp,this.unitTypesRecord[e].maxHp,r);i.scale.set(1,1,1),i.rotation.x=0,G.add(i);let a=this.unitTypesRecord[e];if(a.model&&z.getModel(a.model)){let o=z.getModel(a.model),s=a.authoredMaterialsOnly?0:fn.unitContrastStrength,c;if(a.rawMaterials){let e=a.teamColorMaterial?[a.teamColorMaterial]:[];c=e.length?z.cloneWithTeamTint(o,st[r].color,e,0,s):z.cloneUntouched(o,s),on.claim(c)}else c=z.createModelWithColor(o,st[r].color,a.usePlayerColor,a.replaceColor,a.teamColorMaterial,s);a.authoredMaterialsOnly||dn(c);let l=new THREE.Box3().setFromObject(c),u=l.max.y-l.min.y,d=a.unitClass===`tank`||a.unitClass===`artillery`||a.unitClass===`aa`?-.025:a.unitClass===`naval`?-.012:0;if(a.unitClass!==`air`&&ro.attach(c,l,d),c.userData={type:e,q:t,r:n,hp:this.unitTypesRecord[e].hp,maxHp:this.unitTypesRecord[e].maxHp,move:this.unitTypesRecord[e].move,attack:this.unitTypesRecord[e].attack,minRange:this.unitTypesRecord[e].minRange,maxRange:this.unitTypesRecord[e].maxRange,playerIndex:r,hasAttacked:!1,sprite:i,modelHeight:u,flightAltitude:this.unitTypesRecord[e].flightAltitude||0,unitClass:a.unitClass,airGlyph:this.unitTypesRecord[e].airGlyph,yOffset:this.unitTypesRecord[e].yOffset||0,groundSink:d,terrainCosts:this.unitTypesRecord[e].terrainCosts},a.unitClass===`naval`){let e=Math.max(0,l.max.z-l.min.z);c.userData.waterSampleHalfLength=THREE.MathUtils.clamp(e*.38,.35,.85)}so.claim(c,a.unitClass);let f=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color:st[r].color}));f.scale.set(.5,.5,.5),f.position.y=.5,hs.add(f),c.userData.miniUnit=f;let p=R.findHex(t,n);if(p){let e=new R(t,n);this.setPosition(c,e,p)}return G.add(c),c}return null}static setPosition(e,t,r,i,a=null){let o=R.findHex(e.userData.q,e.userData.r),s=a||t.getWorldPosition(),c=a?a.y:F.getHeight(r)+(e.userData.flightAltitude||0)+(e.userData.yOffset||0)+(e.userData.groundSink||0),l=new THREE.Vector3(s.x,c,s.z);if(e.position.copy(l),e.userData.unitClass===`naval`&&(e.userData.waterBaseY=c),n(),a||(e.userData.q=t.q,e.userData.r=t.r),i!==void 0&&(e.rotation.y=i,so.headingChanged(e,i)),e.userData.sprite){let t=new THREE.Vector3(s.x,c+1.5,s.z);e.userData.sprite.position.copy(t)}e.userData.miniUnit&&e.userData.miniUnit.position.set(s.x,.5,s.z),o&&V.updateDecoratorTransparency(o),r&&V.updateDecoratorTransparency(r),a||i!==void 0&&o&&r&&(ha.createFootprint(o,i,e.userData.type),ha.createFootprint(r,i+Math.PI,e.userData.type))}static getUnitStats(e){return this.unitTypesRecord[e]}static isHexOccupied(e,t,n=null){return A().units.some(r=>r.q===e&&r.r===t&&r!==n)}static getRotation(e,t,n,r){let i=n-e,a=r-t,o=e%2==1;if(i===0&&a===1)return 0;if(i===0&&a===-1)return Math.PI;if(o){if(i===1&&a===0)return 2*Math.PI/3;if(i===1&&a===1)return Math.PI/3;if(i===-1&&a===0)return-2*Math.PI/3;if(i===-1&&a===1)return-Math.PI/3}else{if(i===1&&a===-1)return 2*Math.PI/3;if(i===1&&a===0)return Math.PI/3;if(i===-1&&a===-1)return-2*Math.PI/3;if(i===-1&&a===0)return-Math.PI/3}return 0}static move(t,n){if(n.length===0)return Promise.resolve();let r=this.unitTypesRecord[t.type],i,a=new Promise(e=>{i=e});ga.playEngineSound(t),so.setMoving(t.visualUnit,!0),W.clearHighlights();let o=0;return n.forEach((a,s)=>{setTimeout(()=>{let o=t.q,c=t.r,l=a.userData.q,u=a.userData.r;t.q=l,t.r=u;let d=new R(l,u),f=this.getRotation(o,c,l,u),p=R.findHex(o,c),m=new R(o,c).getWorldPosition(),h=d.getWorldPosition(),g=A().map.getTile(l,u),_=g?.type??``,v=(t.visualUnit.userData.flightAltitude||0)+(t.visualUnit.userData.yOffset||0)+(t.visualUnit.userData.groundSink||0);m.y=F.getHeight(p)+v,h.y=F.getHeight(a)+v;let y=F.getHeight(p),b=F.getHeight(a),x=h.clone().sub(m);x.y=0,x.normalize();let S=r.unitClass!==`air`&&_!==`WATER`&&!g?.hasRoad,C=.12,w=new THREE.Vector3,T=t.visualUnit.rotation.y,E=f-T;for(;E>Math.PI;)E-=2*Math.PI;for(;E<-Math.PI;)E+=2*Math.PI;let D=!1,O=()=>{if(D)return;if(D=!0,this.setPosition(t.visualUnit,d,a,f),r.unitClass===`air`){if(t.visualUnit.userData.airGlyph===`helo`&&g?.type!==`WATER`){let e=h.clone();e.y=F.getHeight(a)+.08,oo.emitRotorWash(e)}}else if(S&&C<=1){let e=h.clone();e.y=b+.05,oo.emitMovementSurface(e,r.unitClass,_,x,1.65)}for(let e of A().units)e.carriedBy===t&&(e.q=t.q,e.r=t.r);let o=A().map.getTile(t.q,t.r),c=e.unitTypesRecord[t.type]?.unitClass===`air`,l=Oe({getTile:(e,t)=>A().map.getTile(e,t),setTile:()=>{}},[{q:t.q,r:t.r}],c);l>0&&o&&(e.applyDamage(t,l),W.showDamageNumber(t.visualUnit.position.clone(),l),t.hp<=0&&e.removeUnit(t)),s===n.length-1&&(Ii.tryCapture(t),setTimeout(()=>{W.clearHighlights(),this.highlightMoveRange(t),this.highlightAttackRange(t),ga.stopEngineSound(t),so.setMoving(t.visualUnit,!1),i()},50))},k=e=>{if(D)return;let n=e-ee,i=Math.min(n/200,1),o=i*i;if(w.lerpVectors(m,h,o),S&&o>=C){let e=w.clone();e.y=THREE.MathUtils.lerp(y,b,o)+.05,oo.emitMovementSurface(e,r.unitClass,_,x,.72),C=o+.18}let s=T+E*o;this.setPosition(t.visualUnit,d,a,s,w),i<1?requestAnimationFrame(k):O()},ee=performance.now();requestAnimationFrame(k),setTimeout(O,250)},o),o+=250}),a}static handleSelection(e){Na(e),im(e),W.clearPathLine(),W.clearHighlights(),e&&(this.highlightMoveRange(e),this.highlightAttackRange(e))}static highlightSkillTargets(e,t){W.clearHighlights();let n=A();for(let r=0;r<n.map.cols;r++)for(let i=0;i<n.map.rows;i++){if(!Be(t,this.getHexDistance(e.q,e.r,r,i)))continue;let a=V.findHex(r,i);if(!a)continue;let o=n.getUnitAt(r,i),s=n.map.getTile(r,i);Ve(t,e,o?{...o,unitClass:M[o.type]?.unitClass??``}:null,s?{vegetated:s.vegetated,burning:s.burning>0,burned:s.burned}:null)&&W.highlightHex(a,ct.SKILL_TARGET,!0)}}static handleMovement(e,t){let n=Wi.getPath(e.q,e.r,t.userData.q,t.userData.r,e.move,e);if(n.length>0){let t=0;for(let r of n){let n=F.getMoveCost(r,e);n&&(t+=n)}if(t<=e.move)return e.move-=t,this.move(e,n),W.clearPathLine(),!0}return!1}static highlightMoveRange(e){let t=new R(e.q,e.r),{reachable:n}=Wi.dijkstra(t.q,t.r,e.move,e);n.forEach(t=>{let n=R.fromKey(t),r=n.getHex();r&&!this.isHexOccupied(n.q,n.r,e)&&W.highlightHex(r,ct.MOVE_RANGE)})}static offsetToCube(e,t){let n=e,r=t-(e-(e&1))/2;return{x:n,y:-n-r,z:r}}static getHexDistance(e,t,n,r){let i=this.offsetToCube(e,t),a=this.offsetToCube(n,r);return Math.max(Math.abs(i.x-a.x),Math.abs(i.y-a.y),Math.abs(i.z-a.z))}static highlightAttackRange(e){A().units.forEach(t=>{if(t.playerIndex===e.playerIndex||!this.canTarget(e.type,t.type))return;let n=this.getHexDistance(e.q,e.r,t.q,t.r);if(n>=e.minRange&&n<=e.maxRange){let n=R.findHex(t.q,t.r);if(n){let t=this.hasUnitAttacked(e)?ct.CANT_ATTACK:ct.ATTACK_RANGE;W.highlightHex(n,t)}}})}static isValidMove(e,t){if(!t)return!1;let n=new R(e.q,e.r),r=new R(t.userData.q,t.userData.r),{reachable:i}=Wi.dijkstra(n.q,n.r,e.move,e);return i.has(r.getKey())}static setHasAttacked(e,t){e.hasAttacked=t,e.visualUnit.userData.hasAttacked=t}static hasUnitAttacked(e){return e.hasAttacked}static calculateDamage(e,t,n){let r=n?.effect.kind===`attack`?{min:n.effect.minDamage,max:n.effect.maxDamage}:{min:e.minDamage,max:e.maxDamage};return Math.floor(Math.random()*(r.max-r.min+1))+r.min}static repair(e,t,n){n&&this.chargeFor(n,P(n.type,Fe.id));let r=Math.min(t,e.maxHp-e.hp);r<=0||(e.hp+=r,n&&ga.playSound(`step1`,.4),W.showDamageNumber(e.visualUnit.position.clone(),r),this.updateUnitVisuals(e))}static rollWreckFire(e){if(!Ge(e.type))return;let t=A().map;xe(t.getTile(e.q,e.r))&&(Math.random()>=.5||this.igniteTile(e.q,e.r))}static igniteTile(e,t){let n=A().map;Te({getTile:(e,t)=>n.getTile(e,t),setTile:(e,t,r)=>{let i=n.getTile(e,t);i&&Object.assign(i,r)}},e,t),no.sync(n)}static startFire(e,t,n,r){let i=A().map;xe(i.getTile(t,n))&&(Te({getTile:(e,t)=>i.getTile(e,t),setTile:(e,t,n)=>{let r=i.getTile(e,t);r&&Object.assign(r,n)}},t,n),this.chargeFor(e,r),no.sync(i))}static setUnitVisible(e,t){let n=e.visualUnit;n&&(n.visible=t,n.userData?.sprite&&(n.userData.sprite.visible=t))}static loadPassenger(e,t){t.carriedBy=e,t.q=e.q,t.r=e.r,t.move=0,this.setUnitVisible(t,!1),this.chargeFor(e,P(e.type,Le.id))}static unloadPassenger(e,t,n,r){t.carriedBy=null,t.q=n,t.r=r;let i=R.findHex(n,r);i&&t.visualUnit&&this.setPosition(t.visualUnit,new R(n,r),i),t.move=0,this.setUnitVisible(t,!0),this.chargeFor(e,P(e.type,Re.id))}static chargeFor(e,t){if(!t)return;let n=He(e,t);e.cooldowns=n.cooldowns,e.move=n.move,n.hasAttacked!==e.hasAttacked&&this.setHasAttacked(e,n.hasAttacked)}static applyDamage(e,t){e.hp-=t,this.updateUnitVisuals(e)}static getAttackAngle(e,t){let n=new R(e.userData.q,e.userData.r).getWorldPosition(),r=new R(t.userData.q,t.userData.r).getWorldPosition(),i=r.x-n.x,a=r.z-n.z,o=(Math.atan2(i,a)*180/Math.PI+360)%360;return[0,60,120,180,240,300].reduce((e,t)=>{let n=Math.abs(o-e),r=Math.abs(o-t);return n>180&&(n=360-n),r>180&&(r=360-r),n<r?e:t})*Math.PI/180}static async attack(e,t,n,r,i=!1){if(!i&&this.hasUnitAttacked(e)||!this.canTarget(e.type,t.type))return;let a=this.getHexDistance(e.q,e.r,t.q,t.r);if(a<e.minRange||a>e.maxRange)return;let o=V.findHex(e.q,e.r),s=V.findHex(t.q,t.r);if(!o||!s){console.error(`Invalid hex coordinates for attack`);return}let c=this.getUnitStats(e.type);if(!c){console.error(`Invalid attacker unit type:`,e.type);return}i||this.setHasAttacked(e,!0);let l=(r?P(e.type,r):void 0)??Qe(e.type),u=l?.effect.kind===`attack`?l.effect.attackEffect:c.attackEffect,d=n??this.resolveLiveAttack(e,t,c,l);if(u&&u!==`laser`&&so.recoil(e.visualUnit,u),u===`projectile`)W.showAttackEffect(o,s),await new Promise(e=>setTimeout(e,500)),this.applyResolvedOutcome(d);else if(u===`cannon`)W.showCannonShotEffect(o,s),await new Promise(e=>setTimeout(e,300)),this.applyResolvedOutcome(d);else if(u===`rocketBarrage`||u===`rocketVolley`){let n=d.impacts;u===`rocketVolley`&&n.length===0&&(n=Array.from({length:4},()=>({q:t.q,r:t.r,craterDelta:0})));let r=u===`rocketVolley`?{arcHeight:0,launchPos:e.visualUnit?.getWorldPosition(new THREE.Vector3),impactPos:t.visualUnit?.getWorldPosition(new THREE.Vector3)}:{};W.showRocketBarrageEffect(o,s,{impacts:n,...r}),await new Promise(e=>setTimeout(e,1e3)),this.applyResolvedOutcome(d)}else u===`flak`?(W.showFlakEffect(o,s,{launchPos:e.visualUnit?.getWorldPosition(new THREE.Vector3),impactPos:t.visualUnit?.getWorldPosition(new THREE.Vector3)}),await new Promise(e=>setTimeout(e,1e3)),this.applyResolvedOutcome(d)):u===`laser`&&(W.showLaserAttackEffect(o,s),await new Promise(e=>setTimeout(e,400)),this.applyResolvedOutcome(d));!n&&!i&&A().units.includes(e)&&A().units.includes(t)&&await this.counterAttack(t,e),i||(im(null),Na(null),W.clearHighlights())}static async counterAttack(e,t,n){await this.attack(e,t,n,void 0,!0)}static resolveLiveAttack(e,t,n,r){let i=this.calculateDamage(n,t,r),a=t=>_a(t,e.hp,e.maxHp),o=r?.effect.kind===`attack`?r.effect.attackEffect:n.attackEffect,s=[],c=[];if(o===`rocketBarrage`){let n=[{q:t.q,r:t.r}];R.getNeighbors(t.q,t.r).forEach(e=>{R.isWithinMapBounds(e.q,e.r)&&n.push({q:e.q,r:e.r})});for(let r of n){let n=A().getUnitAt(r.q,r.r);if(!n||!this.canTarget(e.type,n.type))continue;let o=r.q===t.q&&r.r===t.r,c=this.getClassModifier(e.type,n.type);s.push({unit:n,damage:a(Math.floor(i*(o?1:ya)*c))})}for(let e=0;e<6;e++){let e=n[Math.floor(Math.random()*n.length)];c.push({q:e.q,r:e.r,craterDelta:va})}}else if(o===`rocketVolley`){let n=this.getClassModifier(e.type,t.type),r=a(Math.floor(i*n)),o=Math.floor(r/4),l=r-o*4;for(let e=0;e<4;e++){let e=o+ +(l-->0);e>0&&s.push({unit:t,damage:e}),c.push({q:t.q,r:t.r,craterDelta:0})}}else{let n=this.getClassModifier(e.type,t.type);s.push({unit:t,damage:a(Math.floor(i*n))})}return{damages:s,impacts:c}}static applyResolvedOutcome(e){for(let{unit:t,damage:n}of e.damages)A().units.includes(t)&&(W.showDamageNumber(t.visualUnit.position.clone(),n),this.applyDamage(t,n),t.hp<=0&&(e.ignitions||this.rollWreckFire(t),this.removeUnit(t)));for(let t of e.impacts){if(t.craterDelta===0)continue;let e=A().map.getTile(t.q,t.r),n=e&&e.type!==`WATER`;V.modifyHexHeight(new R(t.q,t.r),t.craterDelta);let r=A().map.getTile(t.q,t.r);if(n&&r&&r.type===`WATER`){let e=A().getUnitAt(t.q,t.r);e&&this.unitTypesRecord[e.type].terrainCosts.WATER==null&&(W.showDamageNumber(e.visualUnit.position.clone(),e.hp),this.removeUnit(e))}}}static resetTurnFlags(){A().units.forEach(e=>{this.setHasAttacked(e,!1)})}static updateUnitVisuals(e){e.visualUnit.userData.hp=e.hp;let t=e.visualUnit.userData.sprite;if(!t)return;let n=this.createUnitSprite(e.type,e.hp,e.maxHp,e.playerIndex);t.material.map.dispose(),t.material.map=n.material.map,t.material.needsUpdate=!0}static removeUnit(e){let t=A().units.filter(t=>t.carriedBy===e);for(let e of t)e.carriedBy=null,this.removeUnit(e);let n=R.findHex(e.q,e.r),r=A().units.indexOf(e);r>-1&&A().units.splice(r,1),e.visualUnit.userData.sprite&&(G.remove(e.visualUnit.userData.sprite),e.visualUnit.userData.sprite.material.map.dispose(),e.visualUnit.userData.sprite.material.dispose()),e.visualUnit.userData.miniUnit&&G.remove(e.visualUnit.userData.miniUnit),G.remove(e.visualUnit),n&&V.updateDecoratorTransparency(n),W.showDeathEffect(e.visualUnit.position)}},co=class{static{this.pathIndicators=[]}static{this.pathTexture=null}static{this.pathTexturePromise=null}static{this.animationFrameId=null}static{this.animationStartTime=0}static{this.animationSpeed=3}static{this.animationScale=.2}static async initialize(){this.pathTexturePromise=new Promise((e,t)=>{new THREE.TextureLoader().load(`assets/textures/path.png`,t=>{this.pathTexture=t,t.needsUpdate=!0,t.flipY=!1,t.format=THREE.RGBAFormat,t.minFilter=THREE.LinearFilter,t.magFilter=THREE.LinearFilter,e(t)},void 0,e=>{console.error(`Error loading path texture:`,e),t(e)})}),await this.pathTexturePromise,this.startAnimation()}static startAnimation(){this.animationStartTime=performance.now(),this.animate()}static stopAnimation(){this.animationFrameId&&=(cancelAnimationFrame(this.animationFrameId),null)}static animate(){let e=(performance.now()-this.animationStartTime)/1e3,t=1+Math.sin(e*this.animationSpeed)*this.animationScale;this.pathIndicators.forEach(e=>{let n=e.children[0];n&&n.material&&n.material.map&&(n.material.map.repeat.set(t,t),n.material.map.needsUpdate=!0)}),this.animationFrameId=requestAnimationFrame(()=>this.animate())}static createPathIndicator(e,t=0){let n=J.getObjectByName(`pathIndicators`)||new THREE.Group;n.name=`pathIndicators`;let r=W.createTexturedHexGeometry(e,this.pathTexture,{heightOffset:lt.PATH_HEIGHT,color:`#00ff00`,opacity:.8,renderOrder:100,textureRotation:-t});if(!r)return null;let i=new THREE.Group;i.add(r);let a=V.getWorldCoordinates(e.userData.q,e.userData.r);return i.position.copy(a),n.add(i),J.getObjectByName(`pathIndicators`)||J.add(n),this.pathIndicators.push(i),i}static clearPathIndicators(){let e=J.getObjectByName(`pathIndicators`);e&&J.remove(e),this.pathIndicators=[]}static showPath(e,t){if(this.clearPathIndicators(),e.length<1)return;let n=new R(t.q,t.r);for(let t=0;t<e.length;t++){let r=e[t],i=new R(r.userData.q,r.userData.r),a=H.getRotation(n.q,n.r,i.q,i.r);this.createPathIndicator(r,a),n.q=i.q,n.r=i.r}}},lo=4,U=class{static{this.lights=[]}static{this.home=null}static{this.lent=new Set}static init(e){if(!(this.lights.length>0||!e)){this.home=e;for(let t=0;t<lo;t++){let t=new THREE.PointLight(16777215,0,8);t.userData.pooled=!0,e.add(t),this.lights.push(t)}}}static owns(e){return!!e?.userData?.pooled}static setIntensity(e,t){this.owns(e)&&(e.intensity=t)}static setPosition(e,t){this.owns(e)&&e.position.copy(t)}static claim(e,t,n){for(let r of this.lights)if(!this.lent.has(r))return this.lent.add(r),r.color.setHex(e),r.intensity=t,r.distance=n,r.position.set(0,0,0),r;return null}static release(e){this.owns(e)&&(this.lent.delete(e),e.intensity=0,e.position.set(0,0,0),this.home?.add(e))}static releaseAll(){for(let e of this.lights)this.release(e)}},W=class{static{this.pathLine=null}static{this.highlightGroup=null}static{this.highlightMeshes=new Map}static{this.highlightMaterials=new Map}static{this.highlightGeometries=new Map}static{this.highlightGroups=new Map}static{this.initialized=!1}static{this.initializationPromise=null}static{this.particleTextures=new Map}static{this.particleTextureLoader=null}static particleTexture(e){let t=this.particleTextures.get(e);return t||(this.particleTextureLoader??=new THREE.TextureLoader,t=this.particleTextureLoader.load(e),this.particleTextures.set(e,t)),t}static{this.PARTICLE_TEXTURE_PATHS=[`assets/textures/smoke1.png`,`assets/textures/smoke2.png`,`assets/textures/smoke3.png`,`assets/textures/smoke4.png`,`assets/textures/explosion1.png`,`assets/textures/explosion2.png`,`assets/textures/explosion3.png`,`assets/textures/explosion4.png`]}static preloadParticleTextures(){for(let e of this.PARTICLE_TEXTURE_PATHS)this.particleTexture(e)}static{this.cachedRocketModel=null}static{this.rocketModelPromise=null}static disposeObject(e){if(e){if(e instanceof THREE.Group){[...e.children].forEach(e=>this.disposeObject(e)),e.parent&&e.parent.remove(e);return}if(e instanceof THREE.Mesh||e instanceof THREE.Points){e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(e=>this.disposeMaterial(e)):this.disposeMaterial(e.material)),e.parent&&e.parent.remove(e);return}if(e instanceof THREE.Light){if(U.owns(e)){U.release(e);return}e.parent&&e.parent.remove(e);return}}}static disposeMaterial(e){e&&(e.map&&e.map.dispose(),e.normalMap&&e.normalMap.dispose(),e.roughnessMap&&e.roughnessMap.dispose(),e.metalnessMap&&e.metalnessMap.dispose(),e.aoMap&&e.aoMap.dispose(),e.emissiveMap&&e.emissiveMap.dispose(),e.bumpMap&&e.bumpMap.dispose(),e.displacementMap&&e.displacementMap.dispose(),e.alphaMap&&e.alphaMap.dispose(),e.envMap&&e.envMap.dispose(),e.dispose())}static async initialize(){return this.initializationPromise||=(async()=>{await co.initialize(),await this.loadRocketModel(),this.initialized=!0})(),this.initializationPromise}static async loadRocketModel(){return this.rocketModelPromise||=new Promise((e,t)=>{new THREE.FBXLoader().load(`assets/bullet_1_bw.fbx`,t=>{this.cachedRocketModel=t,e(t)},void 0,e=>{console.error(`Error loading rocket model:`,e),t(e)})}),this.rocketModelPromise}static async ensureInitialized(){this.initialized||await this.initialize()}static async clearPathLine(){await this.ensureInitialized(),co.clearPathIndicators()}static async drawPath(e,t){await this.ensureInitialized(),co.showPath(t,e)}static clearHighlights(){let e=J.getObjectByName(`highlights`);e&&J.remove(e)}static highlightHex(e,t=ct.MOVE_RANGE,n=!1,r=`highlights`){let i=J.getObjectByName(r)||new THREE.Group;i.name=r;let a=this.createHexTopGeometry(e,lt.HIGHLIGHT_OFFSET);if(!a)return null;let o=`
            uniform vec3 color;
            varying vec2 vUv;

            // Function to calculate hex-shaped distance
            float hexDistance(vec2 p) {
                p = p * 2.0 - 1.0;  // Convert UV to -1 to 1 range
                
                // Convert to hex coordinates
                vec2 q = abs(p);
                float d = max(
                    q.x * 0.866025 + q.y * 0.5,
                    q.y
                );
                
                return d;
            }

            void main() {
                // Calculate hex-shaped distance from center
                float dist = hexDistance(vUv);
                
                // Create main hex gradient from center outward
                float mainGradient = smoothstep(0.4, 0.7, dist);
                
                // Create sharp falloff at the edges
                float edgeFade = 1.0 - smoothstep(0.80, 0.81, dist);
                
                // Create black outline gradient
                float outlineGradient = smoothstep(0.78, 0.79, dist) * (1.0 - smoothstep(0.81, 0.82, dist));
                
                // Combine the gradients and apply opacity
                float mainOpacity = mainGradient * edgeFade * 0.7;
                
                // Final color and opacity based on showOutline parameter
                vec3 finalColor = ${n?`mix(color, vec3(0.0), outlineGradient)`:`color`};
                float finalOpacity = ${n?`max(mainOpacity, outlineGradient)`:`mainOpacity`};
                
                gl_FragColor = vec4(finalColor, finalOpacity);
            }
        `,s=new THREE.Mesh(a,new THREE.ShaderMaterial({uniforms:{color:{value:new THREE.Color(t)}},vertexShader:`
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,fragmentShader:o,side:THREE.DoubleSide,transparent:!0,depthTest:!0,depthWrite:!1})),c=new THREE.Group;c.add(s);let l=V.getWorldCoordinates(e.userData.q,e.userData.r);return c.position.copy(l),i.add(c),J.getObjectByName(r)||J.add(i),c}static updatePathAnimation(){this.pathLine&&this.pathLine.material&&(this.dashOffset-=.1,this.pathLine.material instanceof THREE.LineDashedMaterial&&(this.pathLine.material.scale=2+Math.sin(this.dashOffset)*.5,this.pathLine.material.needsUpdate=!0))}static createHexGeometry(e=1){let t=new THREE.BufferGeometry,n=[],r=[],i=[];for(let t=0;t<6;t++){let r=t*Math.PI/3;n.push(e*Math.cos(r),0,e*Math.sin(r)),i.push((Math.cos(r)+1)/2,(Math.sin(r)+1)/2)}n.push(0,0,0),i.push(.5,.5);for(let e=0;e<6;e++)r.push(6,e,(e+1)%6);return t.setAttribute(`position`,new THREE.Float32BufferAttribute(n,3)),t.setAttribute(`uv`,new THREE.Float32BufferAttribute(i,2)),t.setIndex(r),t.computeVertexNormals(),t}static createHexMaterial(e=65280){return new THREE.MeshStandardMaterial({color:e,side:THREE.DoubleSide})}static createHexMesh(e,t){return new THREE.Mesh(e,t)}static createHexHighlight(e=16776960){let t=this.createHexGeometry(1.1),n=new THREE.MeshBasicMaterial({color:e,transparent:!0,opacity:.5,side:THREE.DoubleSide,depthTest:!0,depthWrite:!0});return this.createHexMesh(t,n)}static createHexOutline(e=0){let t=new THREE.BufferGeometry,n=[],r=[];for(let e=0;e<6;e++){let t=e*Math.PI/3;n.push(Math.cos(t),0,Math.sin(t))}for(let e=0;e<6;e++)r.push(e,(e+1)%6);t.setAttribute(`position`,new THREE.Float32BufferAttribute(n,3)),t.setIndex(r);let i=new THREE.LineBasicMaterial({color:e});return new THREE.LineSegments(t,i)}static showDamageNumber(e,t){let n=document.createElement(`canvas`);n.width=256,n.height=128;let r=n.getContext(`2d`);r.font=`bold 96px Arial`,r.fillStyle=`#ff0000`,r.strokeStyle=`#ffffff`,r.lineWidth=6,r.textAlign=`center`,r.textBaseline=`middle`,r.strokeText(t.toString(),128,64),r.fillText(t.toString(),128,64);let i=new THREE.CanvasTexture(n),a=new THREE.SpriteMaterial({map:i,transparent:!0,opacity:1,depthTest:!0,depthWrite:!0}),o=new THREE.Sprite(a);o.position.copy(e),o.scale.set(3,1.5,1),o.position.set(e.x,e.y+1,e.z),o.renderOrder=999,G.add(o);let s=Date.now(),c=o.position.y;function l(){let e=Date.now()-s,t=Math.min(e/800,1),n=1-(1-t)**2;o.position.y=c+3*n,t>.6&&(a.opacity=1-(t-.6)/.4),t<1?requestAnimationFrame(l):(G.remove(o),a.dispose(),i.dispose())}requestAnimationFrame(l)}static createExplosion(e,t={}){let{particleCount:n=100,size:r=3,duration:i=1500,particleTexturePaths:a=[`assets/textures/smoke1.png`,`assets/textures/smoke2.png`,`assets/textures/smoke3.png`,`assets/textures/smoke4.png`],particleBaseSize:o=.5,particleMaxSizeFactor:s=1.5,particleColor:c=11184810,particleOpacity:l=.9}=t;this.createSmokeParticles(e,t),this.createExplosionParticles(e,{particleCount:n*.5,size:r*.4,duration:i*.6,particleTexturePaths:[`assets/textures/explosion1.png`,`assets/textures/explosion2.png`,`assets/textures/explosion3.png`,`assets/textures/explosion4.png`],particleBaseSize:o*1.2,particleMaxSizeFactor:s*1.2,particleColor:16737792,particleOpacity:.8})}static createParticleEffect(e,t={}){let{particleCount:n=100,size:r=3,duration:i=1500,particleTexturePaths:a=[`assets/textures/smoke1.png`,`assets/textures/smoke2.png`,`assets/textures/smoke3.png`,`assets/textures/smoke4.png`],particleBaseSize:o=.5,particleMaxSizeFactor:s=1.5,particleColor:c=11184810,particleOpacity:l=.9,gravityFactor:u=1.8,upwardBias:d=1.5}=t,f=new THREE.BufferGeometry,p=[],m=[],h=[],g=[],_=[],v=a.map(e=>this.particleTexture(e));for(let t=0;t<n;t++){p.push(e.x,e.y,e.z);let t=Math.random()*Math.PI*2,n=Math.acos(Math.random()*2-1),i=Math.random()*r*.5+r*.2;m.push(Math.sin(n)*Math.cos(t)*i,Math.cos(n)*i*d,Math.sin(n)*Math.sin(t)*i),h.push(performance.now()+Math.random()*200),g.push(o+Math.random()*o*s),_.push(Math.floor(Math.random()*v.length))}f.setAttribute(`position`,new THREE.Float32BufferAttribute(p,3)),f.setAttribute(`velocity`,new THREE.Float32BufferAttribute(m,3)),f.setAttribute(`startTime`,new THREE.Float32BufferAttribute(h,1)),f.setAttribute(`startSize`,new THREE.Float32BufferAttribute(g,1)),f.setAttribute(`textureIndex`,new THREE.Float32BufferAttribute(_,1));let y=new THREE.ShaderMaterial({uniforms:{time:{value:performance.now()},duration:{value:i},pointTextures:{value:v},baseColor:{value:new THREE.Color(c)},baseOpacity:{value:l},gravityFactor:{value:u}},vertexShader:`
                attribute vec3 velocity;
                attribute float startTime;
                attribute float startSize;
                attribute float textureIndex;
                uniform float time;
                uniform float duration;
                uniform float gravityFactor;
                varying float vProgress;
                varying float vOpacity;
                varying float vTextureIndex;

                void main() {
                    float elapsed = max(0.0, time - startTime);
                    vProgress = clamp(elapsed / duration, 0.0, 1.0);
                    vTextureIndex = textureIndex;

                    if (vProgress >= 1.0) {
                         gl_Position = vec4(0.0, 0.0, 0.0, 0.0);
                         gl_PointSize = 0.0;
                         vOpacity = 0.0;
                         return;
                    }
                    
                    float timeSinceStart = elapsed / 1000.0;
                    vec3 gravity = vec3(0.0, -gravityFactor * timeSinceStart * timeSinceStart, 0.0);
                    vec3 currentPos = position + velocity * timeSinceStart + gravity;
                    
                    vec4 mvPosition = modelViewMatrix * vec4(currentPos, 1.0);
                    gl_Position = projectionMatrix * mvPosition;
                    
                    float sizeFactor = sin(vProgress * 3.14159) * 1.5;
                    gl_PointSize = startSize * sizeFactor * (300.0 / -mvPosition.z);

                    vOpacity = (1.0 - vProgress); 
                }
            `,fragmentShader:`
                uniform sampler2D pointTextures[4];
                uniform vec3 baseColor;
                uniform float baseOpacity;
                varying float vProgress;
                varying float vOpacity;
                varying float vTextureIndex;

                void main() {
                    if (vOpacity <= 0.01) discard;
                    
                    vec4 texColor;
                    if (vTextureIndex < 0.5) texColor = texture2D(pointTextures[0], gl_PointCoord);
                    else if (vTextureIndex < 1.5) texColor = texture2D(pointTextures[1], gl_PointCoord);
                    else if (vTextureIndex < 2.5) texColor = texture2D(pointTextures[2], gl_PointCoord);
                    else texColor = texture2D(pointTextures[3], gl_PointCoord);
                    
                    gl_FragColor = vec4(baseColor * texColor.rgb, texColor.a * baseOpacity * vOpacity);
                }
            `,blending:THREE.NormalBlending,transparent:!0,depthTest:!0,depthWrite:!1}),b=new THREE.Points(f,y);b.renderOrder=100,G.add(b);let x=performance.now();function S(e){let t=e-x;y.uniforms.time.value=e,t<i+200?requestAnimationFrame(S):(G.remove(b),f.dispose(),y.dispose(),v.forEach(e=>e.dispose()))}requestAnimationFrame(S)}static createSmokeParticles(e,t={}){this.createParticleEffect(e,{...t,particleTexturePaths:t.particleTexturePaths||[`assets/textures/smoke1.png`,`assets/textures/smoke2.png`,`assets/textures/smoke3.png`,`assets/textures/smoke4.png`],particleColor:t.particleColor||11184810,particleOpacity:t.particleOpacity||.9,gravityFactor:1.8,upwardBias:1.5})}static createExplosionParticles(e,t={}){this.createParticleEffect(e,{...t,particleTexturePaths:t.particleTexturePaths||[`assets/textures/explosion1.png`,`assets/textures/explosion2.png`,`assets/textures/explosion3.png`,`assets/textures/explosion4.png`],particleColor:t.particleColor||16737792,particleOpacity:t.particleOpacity||.8,gravityFactor:.9,upwardBias:2})}static showDeathEffect(e){this.createExplosion(e,{particleCount:300,size:2,duration:1500,particleBaseSize:.4,particleMaxSizeFactor:1.5,particleColor:16737792,particleOpacity:.9}),this.createDebrisEffect(e)}static createDebrisEffect(e){for(let t=0;t<24;t++){let t,n=1,r=Math.random();r<.3?(t=new THREE.BoxGeometry(.4,.08,.2),n=.8+Math.random()*.4):r<.5?(t=new THREE.CylinderGeometry(.08,.08,.15,8),n=.6+Math.random()*.4):r<.7?(t=new THREE.TorusGeometry(.12,.03,8,16),n=.7+Math.random()*.3):r<.85?(t=new THREE.CylinderGeometry(.03,.03,.2,8),n=.8+Math.random()*.4):(t=new THREE.BoxGeometry(.15,.15,.08),n=.6+Math.random()*.3);let i=new THREE.MeshStandardMaterial({color:2236962,transparent:!1,opacity:1,emissive:1118481,emissiveIntensity:.2,metalness:.8,roughness:.2}),a=new THREE.Mesh(t,i);a.castShadow=!0,a.receiveShadow=!0,a.scale.set(n,n,n),a.rotation.x=Math.random()*Math.PI,a.rotation.y=Math.random()*Math.PI,a.rotation.z=Math.random()*Math.PI,a.position.copy(e),a.position.x+=(Math.random()-.5)*.3,a.position.z+=(Math.random()-.5)*.3;let o={x:(Math.random()-.5)*.3,y:(Math.random()-.5)*.3,z:(Math.random()-.5)*.3},s={x:(Math.random()-.5)*.1,z:(Math.random()-.5)*.1};G.add(a);let c=performance.now(),l=.15;function u(e){let n=e-c,r=Math.min(n/2e3,1);a.position.y+=l,a.position.x+=s.x,a.position.z+=s.z,l-=.01;let d=Math.sin(r*Math.PI);a.rotation.x+=o.x*d,a.rotation.y+=o.y*d,a.rotation.z+=o.z*d,r>.7&&(i.opacity=1*(1-(r-.7)/.3)),r<1?requestAnimationFrame(u):(G.remove(a),t.dispose(),i.dispose())}requestAnimationFrame(u)}}static showAttackEffect(e,t){if(ga.playSound(`jet`,.5,500),!this.cachedRocketModel){this.showAttackEffectFallback(e,t);return}{let n=this.cachedRocketModel.clone();n.scale.set(.02,.02,.02);let r=new THREE.Group;r.add(n);let i=U.claim(16711680,10,8);i&&r.add(i);let a=new R(e.userData.q,e.userData.r),o=new R(t.userData.q,t.userData.r),s=a.getWorldPosition(),c=o.getWorldPosition();s.y=F.getHeight(e)+1,c.y=F.getHeight(t)+1,r.position.copy(s),G.add(r);let l=null,u=e=>{l||=e;let t=e-l,a=Math.min(t/500,1),o=a*a,d=s.x+(c.x-s.x)*o,f=s.z+(c.z-s.z)*o,p=s.y+(c.y-s.y)*o+Math.sin(o*Math.PI)*2,m=r.position.clone();r.position.set(d,p,f);let h=new THREE.Vector3(c.x-s.x,0,c.z-s.z).normalize();new THREE.Vector3(0,0,1);let g=Math.atan2(h.x,h.z),_=new THREE.Vector3().subVectors(r.position,m),v=Math.atan2(_.y,Math.sqrt(_.x*_.x+_.z*_.z)),y=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0),-v),b=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0),g).multiply(y);r.setRotationFromQuaternion(b);let x=10+Math.sin(t*.02)*4;if(i.intensity=x,o>.8){let e=1-(o-.8)*5;n.traverse(t=>{t.isMesh&&(t.material.transparent=!0,t.material.opacity=e)}),i.intensity=e*x}o<1?requestAnimationFrame(u):(ga.playSound(`explosion`,.8),this.createExplosion(c),this.disposeObject(r))};requestAnimationFrame(u)}}static showAttackEffectFallback(e,t){let n=new THREE.SphereGeometry(.2,16,16),r=new THREE.MeshBasicMaterial({color:16711680,transparent:!0,opacity:.8,emissive:16711680,emissiveIntensity:2}),i=new THREE.Mesh(n,r);i.castShadow=!0;let a=U.claim(16711680,10,8);a&&i.add(a);let o=new R(e.userData.q,e.userData.r),s=new R(t.userData.q,t.userData.r),c=o.getWorldPosition(),l=s.getWorldPosition();c.y=F.getHeight(e)+1,l.y=F.getHeight(t)+1,i.position.copy(c),G.add(i);let u=null,d=e=>{u||=e;let t=e-u,n=Math.min(t/500,1),o=n*n,s=c.x+(l.x-c.x)*o,f=c.z+(l.z-c.z)*o,p=c.y+(l.y-c.y)*o+Math.sin(o*Math.PI)*2,m=i.position.clone();i.position.set(s,p,f);let h=new THREE.Vector3(l.x-c.x,0,l.z-c.z).normalize();new THREE.Vector3(0,0,1);let g=Math.atan2(h.x,h.z),_=new THREE.Vector3().subVectors(i.position,m),v=Math.atan2(_.y,Math.sqrt(_.x*_.x+_.z*_.z)),y=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0),-v),b=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0),g).multiply(y);i.setRotationFromQuaternion(b);let x=10+Math.sin(t*.02)*4;if(a.intensity=x,o>.8){let e=1-(o-.8)*5;r.opacity=e,a.intensity=e*x}o<1?requestAnimationFrame(d):(ga.playSound(`explosion`,.8),this.createExplosion(l),this.disposeObject(i))};requestAnimationFrame(d)}static showRocketBarrageEffect(e,t,n={}){let{impacts:r=null,delayBetweenShots:i=100,projectileScale:a=.4,maxInFlight:o=3,arcHeight:s=2,launchPos:c=null,impactPos:l=null}=n,u=r?r.length:n.projectileCount??6,d=new R(t.userData.q,t.userData.r),f=[t];d.getNeighbors().forEach(e=>{let t=V.findHex(e.q,e.r);t&&f.push(t)});let p=0,m=0,h=n=>{if(n>=u)return;ga.playSound(`jet`,.4,500);let o=r?V.findHex(r[n%r.length].q,r[n%r.length].r)??t:f[Math.floor(Math.random()*f.length)],d=this.cachedRocketModel.clone();d.scale.set(.02*a,.02*a,.02*a);let g=new THREE.Group;g.add(d);let _=new R(e.userData.q,e.userData.r),v=new R(o.userData.q,o.userData.r),y=c?c.clone():_.getWorldPosition(),b=l?l.clone():v.getWorldPosition();c||(y.y=F.getHeight(e)+1),l||(b.y=F.getHeight(o)+1),g.position.copy(y),G.add(g);let x=null,S=e=>{x||=e;let t=e-x,n=Math.min(t/500,1),r=n*n,a=y.x+(b.x-y.x)*r,o=y.z+(b.z-y.z)*r,c=y.y+(b.y-y.y)*r+Math.sin(r*Math.PI)*s,l=g.position.clone();g.position.set(a,c,o);let f=new THREE.Vector3(b.x-y.x,0,b.z-y.z).normalize(),_=Math.atan2(f.x,f.z),v=new THREE.Vector3().subVectors(g.position,l),C=Math.atan2(v.y,Math.sqrt(v.x*v.x+v.z*v.z)),w=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0),-C),T=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0),_).multiply(w);if(g.setRotationFromQuaternion(T),r>.8){let e=1-(r-.8)*5;d.traverse(t=>{t.isMesh&&(t.material.transparent=!0,t.material.opacity=e)})}r<1?requestAnimationFrame(S):(ga.playSound(`explosion`,.8),this.createExplosion(b,{size:1.5}),this.disposeObject(g),p--,m<u&&setTimeout(()=>{h(m++)},i))};requestAnimationFrame(S)},g=()=>{m<u&&p<o&&(p++,h(m++),setTimeout(g,i))};g()}static showLaserAttackEffect(e,t){let n=new R(e.userData.q,e.userData.r),r=new R(t.userData.q,t.userData.r),i=n.getWorldPosition(),a=r.getWorldPosition();i.y=F.getHeight(e)+1,a.y=F.getHeight(t)+1;let o=new THREE.Vector3().subVectors(a,i),s=o.length(),c=new THREE.CylinderGeometry(.1,.1,s,8,1),l=new THREE.MeshBasicMaterial({color:4474111,transparent:!0,opacity:.8,emissive:16777215,emissiveIntensity:2}),u=new THREE.Mesh(c,l),d=new THREE.Vector3().addVectors(i,a).multiplyScalar(.5);u.position.copy(d);let f=new THREE.Quaternion,p=new THREE.Vector3(0,1,0);f.setFromUnitVectors(p,o.normalize()),u.setRotationFromQuaternion(f);let m=U.claim(16777215,15,6);m&&u.add(m);let h=U.claim(4474111,8,8);h&&u.add(h),G.add(u);let g=null;function _(e){g||=e;let t=e-g,n=Math.min(t/400,1),r=Math.sin(t*.1)*.5+.5;if(l.opacity=.8*r,m.intensity=15*r,h.intensity=8*r,n<.2){let e=n*5;u.scale.setX(e),u.scale.setZ(e)}else if(n>.8){let e=(1-n)*5;u.scale.setX(e),u.scale.setZ(e)}n<1?requestAnimationFrame(_):(U.release(m),U.release(h),G.remove(u),c.dispose(),l.dispose())}requestAnimationFrame(_)}static showFlakEffect(e,t,n={}){let{rounds:r=14,interval:i=60,flightDuration:a=120,burstDuration:o=240,closeFraction:s=.22,closeSpread:c=.4,missLateral:l=1.1,missRange:u=2.6,missMin:d=1,launchPos:f=null,impactPos:p=null}=n,m=f?f.clone():new R(e.userData.q,e.userData.r).getWorldPosition();f||(m.y=F.getHeight(e)+.9);let h=p?p.clone():new R(t.userData.q,t.userData.r).getWorldPosition();p||(h.y=F.getHeight(t)+.7);let g=new THREE.Vector3().subVectors(h,m).normalize(),_=new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),g),v=new THREE.Group;G.add(v);let y=new THREE.ConeGeometry(.16,.5,8,1,!0),b=new THREE.MeshBasicMaterial({color:16769184,transparent:!0,opacity:0,depthWrite:!1}),x=new THREE.Mesh(y,b);x.position.copy(m).addScaledVector(g,.3),x.setRotationFromQuaternion(_),v.add(x);let S=new THREE.CylinderGeometry(.028,.012,.55,5,1),C=new THREE.MeshBasicMaterial({color:16774344,transparent:!0,opacity:1,depthWrite:!1}),w=U.claim(16760944,4,3.2);w&&(w.position.copy(x.position),v.add(w));let T=U.claim(16754760,12,7);T&&(T.intensity=0,v.add(T));let E=new THREE.Vector3(-g.z,0,g.x).normalize(),D=new THREE.Vector3(0,1,0),O=()=>(Math.random()+Math.random()+Math.random()-1.5)/1.5,k=Array.from({length:r},(e,t)=>{let n=Math.random()<s,r=h.clone();if(n)r.add(new THREE.Vector3(O()*c,O()*c*.7,O()*c));else{let e=new THREE.Vector3().addScaledVector(g,O()*u).addScaledVector(E,O()*l).addScaledVector(D,O()*l*.8);e.length()<d&&e.setLength(d+Math.random()*.6),r.add(e)}r.y=Math.max(r.y,m.y+.4);let a=new THREE.Mesh(S,C);return a.setRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),new THREE.Vector3().subVectors(r,m).normalize())),a.visible=!1,v.add(a),{at:t*i,to:r,tracer:a,burst:!1,burstAt:0}}),ee=(r-1)*i+a+o,te=null,ne=-1,re=e=>{te||=e;let t=e-te,n=0,r=0;for(let e=0;e<k.length;e++){let i=k[e],s=t-i.at;if(s<0)continue;e>ne&&e%2==0&&(ne=e,ga.playSound(`cannon`,.22));let c=Math.min(s/a,1);if(c<1){i.tracer.visible=!0,i.tracer.position.copy(m).lerp(i.to,c),n=Math.max(n,1-s/(a*.5));continue}i.tracer.visible=!1,i.burst||(i.burst=!0,this.createExplosion(i.to,{particleCount:14,size:.5,duration:600,particleBaseSize:.22,particleMaxSizeFactor:1.3}),ga.playSound(`explosion`,.16));let l=Math.min((s-a)/o,1);l<1&&(r=Math.max(r,1-l),T&&T.position.copy(i.to))}if(b.opacity=Math.max(0,n),x.scale.setScalar(1+Math.max(0,n)*.6),w&&(w.intensity=4*Math.max(0,n)),T&&(T.intensity=12*r),t<ee){requestAnimationFrame(re);return}U.release(w),U.release(T),G.remove(v),y.dispose(),b.dispose(),S.dispose(),C.dispose()};requestAnimationFrame(re)}static showCannonShotEffect(e,t){ga.playSound(`cannon`,.5);let n=new R(e.userData.q,e.userData.r).getWorldPosition(),r=new R(t.userData.q,t.userData.r).getWorldPosition();n.y=F.getHeight(e)+.9,r.y=F.getHeight(t)+.7;let i=new THREE.Vector3().subVectors(r,n),a=i.length(),o=i.clone().normalize(),s=new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),o),c=new THREE.Group;G.add(c);let l=new THREE.ConeGeometry(.22,.7,10,1,!0),u=new THREE.MeshBasicMaterial({color:16765066,transparent:!0,opacity:1,depthWrite:!1}),d=new THREE.Mesh(l,u);d.position.copy(n).addScaledVector(o,.35),d.setRotationFromQuaternion(s),c.add(d);let f=U.claim(16760944,14,7);f&&(f.position.copy(d.position),c.add(f));let p=Math.min(1.1,a*.35),m=new THREE.CylinderGeometry(.05,.02,p,6,1),h=new THREE.MeshBasicMaterial({color:16773312,transparent:!0,opacity:1,depthWrite:!1}),g=new THREE.Mesh(m,h);g.setRotationFromQuaternion(s),c.add(g);let _=U.claim(16756816,6,4);_&&c.add(_);let v=null,y=null,b=null,x=null,S=e=>{v||=e;let t=e-v,i=Math.min(t/90,1);u.opacity=1-i,d.scale.setScalar(1+i*.8),U.setIntensity(f,14*(1-i));let a=Math.min(t/260,1),o=n.clone().lerp(r,a);if(g.position.copy(o),U.setPosition(_,o),h.opacity=+(a<1),U.setIntensity(_,a<1?6:0),a>=1&&!y){let e=new THREE.SphereGeometry(.28,10,8);b=new THREE.MeshBasicMaterial({color:16767392,transparent:!0,opacity:1,depthWrite:!1}),y=new THREE.Mesh(e,b),y.position.copy(r),c.add(y),x=U.claim(16752704,16,8),x&&(x.position.copy(r),c.add(x))}if(y){let e=Math.min((t-260)/180,1);y.scale.setScalar(1+e*2.2),b.opacity=1-e,U.setIntensity(x,16*(1-e))}if(t<440){requestAnimationFrame(S);return}U.release(f),U.release(_),U.release(x),G.remove(c),l.dispose(),u.dispose(),m.dispose(),h.dispose(),y?.geometry.dispose(),b?.dispose()};requestAnimationFrame(S)}static createTexturedHexGeometry(e,t,n={}){let{radius:r=I.HEX_RADIUS*.8,heightOffset:i=0,color:a=`#ffffff`,opacity:o=.8,renderOrder:s=50,textureRotation:c=0,baseScale:l=1.3,depthWrite:u=!1,materialType:d=`MeshBasicMaterial`,receiveShadow:f=!1,castShadow:p=!1,metalness:m=.1,roughness:h=.5,flatShading:g=!0,dithering:_=!1,polygonOffset:v=!1,polygonOffsetFactor:y=0,polygonOffsetUnits:b=0}=n,x=this.createHexTopGeometry(e,i);if(!x)return null;let S={color:a,side:THREE.DoubleSide,transparent:!0,opacity:o,depthTest:!0,depthWrite:u,metalness:m,roughness:h,flatShading:g,dithering:_,polygonOffset:v,polygonOffsetFactor:y,polygonOffsetUnits:b};if(t){let e=t.clone();e.center.set(.5,.5),e.rotation=c,e.needsUpdate=!0,S.map=e}let C;switch(d){case`MeshStandardMaterial`:C=new THREE.MeshStandardMaterial(S);break;case`MeshPhongMaterial`:C=new THREE.MeshPhongMaterial(S);break;default:C=new THREE.MeshBasicMaterial(S)}let w=new THREE.Mesh(x,C);return w.renderOrder=s,w.castShadow=p,w.receiveShadow=f,w}static createHexTopGeometry(e,t=0){let n=e.children.find(e=>e instanceof THREE.Mesh&&!e.userData.isBoundingMesh);if(!n)return null;let r=n.geometry,i=r.attributes.position,a=new THREE.BufferGeometry,o=[],s=[],c=[],l=[];for(let e=6;e<12;e++)l.push(new THREE.Vector3(i.getX(e),i.getY(e),i.getZ(e)));let u=new THREE.Vector3(i.getX(13),i.getY(13),i.getZ(13));o.push(u.x,u.y+t,u.z),l.forEach(e=>{o.push(e.x,e.y+t,e.z)}),s.push(.5,.5);for(let e=0;e<6;e++){let t=e*Math.PI/3,n=.5+Math.cos(t)*.5,r=.5+Math.sin(t)*.5;s.push(n,r)}for(let e=0;e<6;e++)c.push(0,e+1,(e+1)%6+1);a.setAttribute(`position`,new THREE.Float32BufferAttribute(o,3)),a.setAttribute(`uv`,new THREE.Float32BufferAttribute(s,2)),a.setIndex(c);let d=new Float32Array(o.length),f=r.attributes.normal;if(f&&f.count>=14){d[0]=f.getX(13),d[1]=f.getY(13),d[2]=f.getZ(13);for(let e=0;e<6;e++)d[(e+1)*3]=f.getX(6+e),d[(e+1)*3+1]=f.getY(6+e),d[(e+1)*3+2]=f.getZ(6+e)}else for(let e=0;e<o.length;e+=3)d[e+1]=1;return a.setAttribute(`normal`,new THREE.Float32BufferAttribute(d,3)),a}},uo=128,fo=new THREE.Vector3(0,1,0),po=new THREE.Euler(-Math.PI/2,0,0),mo=Math.PI,ho=.45;function go(e){let t=document.createElement(`canvas`);t.width=uo,t.height=uo;let n=t.getContext(`2d`);n.fillStyle=`#ffffff`,n.strokeStyle=`#ffffff`,n.lineCap=`round`,n.lineJoin=`round`;let r=uo/2;e===`helo`?(n.lineWidth=9,n.beginPath(),n.moveTo(12,12),n.lineTo(116,116),n.moveTo(116,12),n.lineTo(12,116),n.stroke(),n.beginPath(),n.ellipse(r,68,15,26,0,0,Math.PI*2),n.fill(),n.lineWidth=11,n.beginPath(),n.moveTo(r,84),n.lineTo(r,116),n.stroke(),n.beginPath(),n.moveTo(48,116),n.lineTo(80,116),n.stroke()):(n.beginPath(),n.moveTo(r,10),n.lineTo(76,58),n.lineTo(114,86),n.lineTo(114,98),n.lineTo(74,88),n.lineTo(72,108),n.lineTo(86,120),n.lineTo(86,126),n.lineTo(r,118),n.lineTo(42,126),n.lineTo(42,120),n.lineTo(56,108),n.lineTo(54,88),n.lineTo(14,98),n.lineTo(14,86),n.lineTo(52,58),n.closePath(),n.fill());let i=new THREE.CanvasTexture(t);return i.needsUpdate=!0,i}var _o=class e{static{this.markers=new Map}static{this.textures={}}static{this.yaw=new THREE.Quaternion}static texture(e){return this.textures[e]||(this.textures[e]=go(e)),this.textures[e]}static build(e,t){let n=new THREE.Mesh(new THREE.CylinderGeometry(.022,.022,1,6,1,!0),new THREE.MeshBasicMaterial({color:t,transparent:!0,opacity:.55,depthWrite:!1}));G.add(n);let r=e.visualUnit?.userData?.airGlyph===`jet`?`jet`:`helo`,i=new THREE.Mesh(new THREE.PlaneGeometry(.95,.95),new THREE.MeshBasicMaterial({map:this.texture(r),color:t,transparent:!0,opacity:.9,depthWrite:!1,depthTest:!0}));return i.quaternion.setFromEuler(po),i.renderOrder=900,G.add(i),{tether:n,icon:i}}static dispose(e){G.remove(e.tether),G.remove(e.icon),e.tether.geometry.dispose(),e.tether.material.dispose(),e.icon.geometry.dispose(),e.icon.material.dispose()}static update(){let t=ie();if(!t){for(let e of this.markers.values())this.dispose(e);this.markers.clear();return}let n=new Set;for(let r of t.units){let t=r.visualUnit;if(!t||!(t.userData?.flightAltitude>0)||r.carriedBy!=null||!t.visible)continue;n.add(t);let i=this.markers.get(t);i||(i=this.build(r,st[r.playerIndex].color),this.markers.set(t,i));let a=R.findHex(r.q,r.r);if(!a)continue;let o=F.getHeight(a)+lt.FOOTPRINT_OFFSET,s=t.position.x,c=t.position.z,l=Math.max(.05,t.position.y-o);i.tether.position.set(s,o+l/2,c),i.tether.scale.set(1,l,1);let u=new R(r.q,r.r).getWorldPosition();i.icon.position.set(u.x,o+ho,u.z),i.icon.quaternion.setFromEuler(po),i.icon.quaternion.premultiply(e.yaw.setFromAxisAngle(fo,t.rotation.y+mo))}for(let[e,t]of this.markers)n.has(e)||(this.dispose(t),this.markers.delete(e))}},vo=200,yo=[`infantry`,`tank`,`aa`,`artillery`,`air`,`naval`],bo=null;function xo(){if(bo)return bo;let e=new Map;for(let[t,n]of Object.entries(H.unitTypesRecord)){let r=n?.unitClass;!r||e.has(r)||e.set(r,t)}let t=yo.filter(t=>e.has(t)),n=[...e.keys()].filter(e=>!yo.includes(e));return bo=[...t,...n].map(t=>[t,e.get(t)]),bo}var So=null,Co=new Map;function wo(e,t){let n=H.unitTypesRecord[e],r=n?.model?z.getModel(n.model):null;if(!r)return null;So||(So=new THREE.WebGLRenderer({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),So.setSize(vo,vo),So.setClearColor(0,0));let i=n.teamColorMaterial?[n.teamColorMaterial]:[],a=n.rawMaterials?i.length?z.cloneWithTeamTint(r,st[t].color,i,0,fn.unitContrastStrength):z.cloneUntouched(r,fn.unitContrastStrength):z.createModelWithColor(r,st[t].color,n.usePlayerColor,n.replaceColor,n.teamColorMaterial,fn.unitContrastStrength),o=new THREE.Scene;o.add(a),o.add(new THREE.AmbientLight(16777215,.8));let s=new THREE.DirectionalLight(16777215,1.15);s.position.set(2,3,2),o.add(s);let c=new THREE.DirectionalLight(10470655,.45);c.position.set(-2,1,-1.5),o.add(c);let l=new THREE.Box3().setFromObject(a),u=l.getCenter(new THREE.Vector3),d=Math.max(l.getSize(new THREE.Vector3).length()/2,.001),f=new THREE.OrthographicCamera(-d,d,d,-d,.01,d*20);f.position.copy(u).add(new THREE.Vector3(1,.85,1).normalize().multiplyScalar(d*4)),f.lookAt(u),So.render(o,f);let p=So.domElement.toDataURL(`image/png`);return o.remove(a),p}function To(e,t){let n=`${e}:${t}`;if(Co.has(n))return Co.get(n);let r=wo(e,t);return Co.set(n,r??``),r}function Eo(e){let t=e.effect;switch(t.kind){case`repair`:return`HP를 ${t.hp} 회복`;case`load`:return`아군을 태웁니다`;case`unload`:return`승객을 내려줍니다`;case`startFire`:return`지면을 ${t.turns}턴 동안 불태웁니다`;case`attack`:return`데미지 ${t.minDamage}~${t.maxDamage}`;default:return e.name}}function Do(){let e=document.createElement(`div`);return e.id=`unit-info`,e.innerHTML=`
        <div class="unit-info-head">
            <span class="unit-info-name"></span>
            <span class="unit-info-owner"></span>
        </div>
        <div class="unit-info-class"></div>
        <div class="unit-info-portrait"><img alt=""></div>
        <div class="unit-info-skills"></div>
        <div class="unit-info-body">
            <dl class="unit-info-stats"></dl>
            <div class="unit-info-vs-label">상성</div>
            <div class="unit-info-vs"></div>
        </div>`,document.body.appendChild(e),e}var Oo=class e{static{this.panel=null}static{this.unit=null}static{this.shown=``}static element(){return this.panel||=document.getElementById(`unit-info`)??Do(),this.panel}static show(t){if(!t)return this.hide();let n=this.element();this.unit=t,this.shown=e.signature(t);let r=H.unitTypesRecord[t.type]??{},i=`#`+(st[t.playerIndex]?.color??16777215).toString(16).padStart(6,`0`),a=n.querySelector(`img`),o=To(t.type,t.playerIndex);a.src=o||``,a.style.visibility=o?`visible`:`hidden`,n.querySelector(`.unit-info-name`).textContent=r.name??t.type;let s=n.querySelector(`.unit-info-owner`),c=ie();s.textContent=c&&c.isPlayerTurn(t.playerIndex)?`현재 턴`:``,s.style.color=i,n.querySelector(`.unit-info-class`).textContent=String(r.unitClass??``).toUpperCase();let l=r.minRange===r.maxRange?`${r.maxRange}`:`${r.minRange}~${r.maxRange}`,u=[[`체력`,`${t.hp} / ${t.maxHp}`],[`명중률`,`${r.attack??`—`}`],[`데미지`,`${r.minDamage??`—`}~${r.maxDamage??`—`}`],[`사거리`,l],[`이동력`,`${t.move} / ${r.move??`—`}`]];r.flightAltitude&&u.push([`비행`,`예`]),r.canCapture&&u.push([`점령`,`가능`]);let d=n.querySelector(`.unit-info-stats`);d.innerHTML=u.map(([e,t])=>`<dt>${e}</dt><dd>${t}</dd>`).join(``);let f=xo().map(([e,n])=>{if(!H.canTarget(t.type,n))return`<span class="vs-chip is-none">${e}<b>—</b></span>`;let r=H.getClassModifier(t.type,n);return`<span class="vs-chip ${r>1?`is-strong`:r<1?`is-weak`:`is-even`}">${e}<b>×${r.toFixed(1)}</b></span>`}),p=n.querySelector(`.unit-info-vs`);p.innerHTML=f.join(``);let m=Ze(t.type).slice(1),h=n.querySelector(`.unit-info-skills`);n.classList.toggle(`has-skills`,m.length>0),h.innerHTML=m.length===0?``:`<div class="unit-info-vs-label">특수</div>`+m.map(e=>{let n=t.cooldowns?.[e.id]??0,r=Ae(t.cooldowns,e.id),i=[`사거리 ${e.minRange===e.maxRange?`${e.maxRange}`:`${e.minRange}~${e.maxRange}`}`,e.cooldown>0?`재사용 대기 ${e.cooldown}턴`:`매 턴 사용 가능`];return e.spendsAction&&i.push(`행동 소모`),`<div class="unit-skill ${r?``:`is-cooling`}">
                    <div class="unit-skill-head"><span class="unit-skill-glyph">${e.glyph}</span>
                    <span class="unit-skill-name">${e.name}</span>
                    <span class="unit-skill-state">${r?`사용 가능`:n+`턴`}</span></div>
                    <div class="unit-skill-what">${Eo(e)}</div>
                    <div class="unit-skill-meta">${i.join(` &middot; `)}</div>
                </div>`}).join(``),n.classList.add(`is-open`)}static hide(){this.unit=null,this.panel?.classList.remove(`is-open`)}static update(){if(!this.unit)return;let t=ie();if(!t||!t.units.includes(this.unit))return this.hide();e.signature(this.unit)!==this.shown&&this.show(this.unit)}static signature(e){return`${e.hp}|${e.move}|${JSON.stringify(e.cooldowns??{})}`}static get inspected(){return this.unit}},ko=180,Ao=.82,jo=.3*I.HEX_RADIUS,Mo=.019*I.HEX_RADIUS,No=new Set([`grass`,`forest`]),Po=`sand`,Fo=56,Io=.34,Lo=1.25,Ro=.55,zo=1.8,Bo=1.9,Vo=30,Ho=40,Uo=5,Wo=1.5;function Go(e){return e.geometry.attributes.position.getY(13)}function Ko(){let e=Mo,t=jo,n=new THREE.BufferGeometry;return n.setAttribute(`position`,new THREE.Float32BufferAttribute([-e,0,0,e,0,0,-e*.72,t*.55,0,e*.72,t*.55,0,0,t,0],3)),n.setAttribute(`aUp`,new THREE.Float32BufferAttribute([0,0,.55,.55,1],1)),n.setIndex([0,1,3,0,3,2,2,3,4]),n.computeVertexNormals(),n}var qo=`
    // How solid this blade is at this distance. Carried to the fragment
    // stage and multiplied into alpha there, so the field thins out over
    // FADE_START..FADE_END instead of a block of it appearing at once.
    float gDist = distance(cameraPosition, gWorld);
    vGrassFade = 1.0 - smoothstep(uFadeStart, uFadeEnd, gDist);

    // Hold the blade at MIN_BLADE_PIXELS wide and pay for it in alpha.
    // uPxScale converts a world length at unit distance into a fraction of
    // the viewport, so gDist * uPxScale is how much world one pixel spans
    // out here.
    float onePixel = gDist * uPxScale;
    float widen = max(1.0, (uMinPixels * onePixel) / uHalfWidth);
    transformed.x *= widen;
    vGrassFade /= widen;

    // A visible but calm breeze. The broad wave crosses the field in about
    // six seconds; the weaker second wave breaks up the metronome without
    // becoming the rapid leaf-flutter used by deciduous crowns.
    float gust = sin(uTime * 1.0 + gWorld.x * 0.7 + gWorld.z * 0.55)
               + 0.5 * sin(uTime * 1.8 + gWorld.x * 1.9 - gWorld.z * 1.3);
    // Cubed, so the root stays planted and only the top half travels.
    //
    // gust reaches +-1.5, so the 0.085 coefficient moves a 0.30-high blade's
    // tip at most 0.128: a little over two fifths of its height. Enough to read at
    // gameplay zoom, still well short of the loose-flakes look from the old
    // overdriven wind.
    float lean = gust * 0.085 * aUp * aUp * aUp;
    transformed.x += lean;
    transformed.z += lean * 0.6;
`,Jo=`
    // Dark at the root where light does not reach between the blades,
    // bright at the tip. Without it a field of blades reads as one flat mat
    // however good the silhouette is.
    diffuseColor.rgb *= 0.80 + 0.40 * vGrassUp;
    diffuseColor.a *= vGrassFade;
`,Yo=`
    float grassShadowMask = getShadowMask();
    float grassAmbientShadow = mix(0.50, 1.0, grassShadowMask);
    reflectedLight.indirectDiffuse *= grassAmbientShadow;
    reflectedLight.indirectSpecular *= grassAmbientShadow;
`,Xo=class{static{this.meshes=[]}static{this.uniforms={uTime:{value:0},uPxScale:{value:.002}}}static surfaceY(e,t,n){let r=Math.PI*2,i=(Math.atan2(n,t)+r)%r,a=Math.min(5,Math.floor(i/(Math.PI/3))),o=6+a,s=6+(a+1)%6,c=e.getY(13),l={x:e.getX(o),y:e.getY(o),z:e.getZ(o)},u={x:e.getX(s),y:e.getY(s),z:e.getZ(s)},d=(l.z-u.z)*(0-u.x)+(u.x-l.x)*(0-u.z);if(Math.abs(d)<1e-6)return c;let f=((l.z-u.z)*(t-u.x)+(u.x-l.x)*(n-u.z))/d,p=((u.z-0)*(t-u.x)+(0-u.x)*(n-u.z))/d,m=1-f-p;return f*c+p*l.y+m*u.y}static init(e,t){let n=ie(),r=t.filter(e=>{let{q:t,r,type:i}=e.userData;return!No.has(i)&&i!==Po?!1:!n?.map?.getTile(t,r)?.hasRoad});if(!r.length)return;let i=Ko(),a=Ai().seed,o=a===void 0?Math.random:ni(a^1735549299),s=new THREE.MeshStandardMaterial({side:THREE.DoubleSide,metalness:0,roughness:.9,transparent:!0});this.applyGrassShader(s);for(let t of this.chunkTiles(r)){let n=this.buildChunk(t,i,s,o);n&&(n.userData.excludeFromWaterReflection=!0,this.meshes.push(n),e.add(n))}}static chunkTiles(e){let t=new Map;for(let n of e){let e=this.tileMeshOf(n);if(!e)continue;let r=Math.floor(e.position.x/Uo)+`:`+Math.floor(e.position.z/Uo),i=t.get(r);i?i.push(e):t.set(r,[e])}return Array.from(t.values())}static tileMeshOf(e){return e.children.find(e=>e instanceof THREE.Mesh&&!e.userData.isBoundingMesh)}static buildChunk(e,t,n,r){let i=0,a=0,o=0;for(let t of e)i+=t.position.x,a+=Go(t),o+=t.position.z;i/=e.length,a/=e.length,o/=e.length;let s=t.clone(),c=0;for(let t of e){let e=t.position.x-i,n=Go(t)-a,r=t.position.z-o;c=Math.max(c,Math.sqrt(e*e+n*n+r*r))}c+=I.HEX_RADIUS+jo*zo+.05,s.boundingSphere=new THREE.Sphere(new THREE.Vector3(0,0,0),c);let l=e.reduce((e,t)=>e+(t.userData.terrainType===Po?Fo:ko),0),u=new THREE.InstancedMesh(s,n,l);u.castShadow=!1,u.receiveShadow=!0,u.position.set(i,a,o),u.updateMatrix(),u.updateMatrixWorld(!0);let d=new THREE.Object3D,f=new THREE.Color,p=0;for(let t of e){let e=t.geometry.attributes.position,n=t.geometry.attributes.color,s=t.userData.terrainType===Po,c=s?Fo:ko;for(let l=0;l<c;l++){let c=r()*Math.PI*2,l=Math.sqrt(r())*Ao*I.HEX_RADIUS,m=Math.cos(c)*l,h=Math.sin(c)*l,g=1;if(s){let e=this.waterEdgeDistance(t,m/I.HEX_RADIUS,h/I.HEX_RADIUS);g=Math.max(0,Math.min(1,(e-Io)/1.02));let n=.35+.65*this.coverageNoise(t.position.x+m,t.position.z+h);if(r()>g*n)continue}d.position.set(t.position.x+m-i,this.surfaceY(e,m,h)-a,t.position.z+h-o),d.rotation.set(0,r()*Math.PI*2,0),d.rotation.z=(r()-.5)*.7;let _=s?Lo+r()*Ro:.65+r()*.7;d.scale.set(1,_,1),d.updateMatrix(),u.setMatrixAt(p,d.matrix),s?f.setRGB(.11,.225,.075):n?f.setRGB(n.getX(13),n.getY(13),n.getZ(13)):f.setRGB(.35,.5,.2),f.multiplyScalar((s?1.05:Bo)*(.85+r()*.35)),f.r*=1.18,f.g*=1.05,f.b*=.62,u.setColorAt(p,f),p++}}return p?(u.count=p,u.instanceMatrix.needsUpdate=!0,u.instanceColor&&(u.instanceColor.needsUpdate=!0),u):null}static coverageNoise(e,t){let n=Math.sin(e*2.37+t*1.71)*.5+.5,r=Math.sin(e*6.19-t*4.73+1.8)*.5+.5;return n*.72+r*.28}static waterEdgeDistance(e,t,n){let r=e.geometry.attributes.aShoreA,i=e.geometry.attributes.aShoreB;if(!r||!i)return 10;let a=[r.getX(0),r.getY(0),r.getZ(0),i.getX(0),i.getY(0),i.getZ(0)],o=10;for(let e=0;e<6;e++){if(a[e]<.5)continue;let r=(e+.5)*Math.PI/3;o=Math.min(o,.8660254-(t*Math.cos(r)+n*Math.sin(r)))}return o}static applyGrassShader(e){e.onBeforeCompile=e=>{e.uniforms.uTime=this.uniforms.uTime,e.uniforms.uFadeStart={value:Vo},e.uniforms.uFadeEnd={value:Ho},e.uniforms.uMinPixels={value:Wo},e.uniforms.uHalfWidth={value:Mo},e.uniforms.uPxScale=this.uniforms.uPxScale,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
 uniform float uTime;
 uniform float uFadeStart;
 uniform float uFadeEnd;
 uniform float uMinPixels;
 uniform float uHalfWidth;
 uniform float uPxScale;
 attribute float aUp;
 varying float vGrassUp;
 varying float vGrassFade;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
 vGrassUp = aUp;
 vec3 gWorld = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
`+qo),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
 varying float vGrassUp;
 varying float vGrassFade;`).replace(`#include <shadowmap_pars_fragment>`,`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>`).replace(`#include <color_fragment>`,`#include <color_fragment>
`+Jo).replace(`#include <lights_fragment_end>`,`#include <lights_fragment_end>
`+Yo)},e.customProgramCacheKey=()=>`grass-blades-wind-v3`}static update(e,t,n){if(!this.meshes.length)return;if(this.uniforms.uTime.value=e,n>0){let e=Math.tan(t.fov*Math.PI/360);this.uniforms.uPxScale.value=2*e/n}let r=L.grass;for(let e of this.meshes){if(!r){e.visible=!1;continue}let n=Ho+e.geometry.boundingSphere.radius;e.visible=e.position.distanceToSquared(t.position)<=n*n}}},Zo=class n extends h{constructor(c,d={}){super(c),this.isReflector=!0,this.type=`Reflector`,this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let f=this,p=d.color===void 0?new l(8355711):new l(d.color),m=d.textureWidth||512,h=d.textureHeight||512,g=d.clipBias||0,_=d.shader||n.ReflectorShader,v=d.multisample===void 0?4:d.multisample,y=new o,b=new t,x=new t,S=new t,C=new e,w=new t(0,0,-1),T=new u,E=new t,D=new t,O=new u,k=new e,ee=new a(m,h,{samples:v,type:r}),te=new i({name:_.name===void 0?`unspecified`:_.name,uniforms:s.clone(_.uniforms),fragmentShader:_.fragmentShader,vertexShader:_.vertexShader});te.uniforms.tDiffuse.value=ee.texture,te.uniforms.color.value=p,te.uniforms.textureMatrix.value=k,this.material=te,this.onBeforeRender=function(e,t,n){let r=this.getReflectionCamera(n);if(x.setFromMatrixPosition(f.matrixWorld),S.setFromMatrixPosition(n.matrixWorld),C.extractRotation(f.matrixWorld),b.set(0,0,1),b.applyMatrix4(C),E.subVectors(x,S),E.dot(b)>0&&this.forceUpdate===!1)return;E.reflect(b).negate(),E.add(x),C.extractRotation(n.matrixWorld),w.set(0,0,-1),w.applyMatrix4(C),w.add(S),D.subVectors(x,w),D.reflect(b).negate(),D.add(x),r.position.copy(E),r.up.set(0,1,0),r.up.applyMatrix4(C),r.up.reflect(b),r.lookAt(D),r.far=n.far,r.updateMatrixWorld(),r.projectionMatrix.copy(n.projectionMatrix),k.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),k.multiply(r.projectionMatrix),k.multiply(r.matrixWorldInverse),k.multiply(f.matrixWorld),y.setFromNormalAndCoplanarPoint(b,x),y.applyMatrix4(r.matrixWorldInverse),T.set(y.normal.x,y.normal.y,y.normal.z,y.constant);let i=r.projectionMatrix;r.isOrthographicCamera?(O.x=(Math.sign(T.x)+i.elements[8])/i.elements[0],O.y=(Math.sign(T.y)+i.elements[9])/i.elements[5],O.z=-n.far,O.w=1):(O.x=(Math.sign(T.x)+i.elements[8])/i.elements[0],O.y=(Math.sign(T.y)+i.elements[9])/i.elements[5],O.z=-1,O.w=(1+i.elements[10])/i.elements[14]),T.multiplyScalar(2/T.dot(O)),i.elements[2]=T.x,i.elements[6]=T.y,r.isOrthographicCamera?(i.elements[10]=T.z-g,i.elements[14]=T.w-1):(i.elements[10]=T.z+1-g,i.elements[14]=T.w),f.visible=!1;let a=e.getRenderTarget(),o=e.xr.enabled,s=e.shadowMap.autoUpdate;e.xr.enabled=!1,e.shadowMap.autoUpdate=!1,e.setRenderTarget(ee),e.state.buffers.depth.setMask(!0),e.autoClear===!1&&e.clear(),e.render(t,r),e.xr.enabled=o,e.shadowMap.autoUpdate=s,e.setRenderTarget(a);let c=n.viewport;c!==void 0&&e.state.viewport(c),f.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return ee},this.dispose=function(){ee.dispose(),f.material.dispose()},this.getReflectionCamera=function(e){let t=this._reflectionCameras.get(e);return t===void 0&&(t=e.clone(),this._reflectionCameras.set(e,t)),t}}};Zo.ReflectorShader={name:`ReflectorShader`,uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var Qo=`assets/textures/sky/clouds.webp`,$o=512,es=80,ts=800,ns=535,rs=.32,is=2,as=.58,os=I.HEX_RADIUS*.58,ss=14,cs=I.HEX_RADIUS*Math.sqrt(3)*.5,ls={name:`VibeWarsWaterReflection`,uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},...Ot(),alpha:{value:1},size:{value:32},uHexRadius:{value:I.HEX_RADIUS},uShowGrid:{value:1},distortionScale:{value:.9},normalSampler:{value:Dt()},sunColor:{value:new THREE.Color(16777215)},sunDirection:{value:new THREE.Vector3(.70707,.70707,0)},eye:{value:new THREE.Vector3},waterColor:{value:new THREE.Color(se(`WATER`))},waterCalibration:p.water.parameters,waterCalibrationBalance:p.water.balance},vertexShader:`
        uniform mat4 textureMatrix;
        attribute float aWaterPin;
        attribute float aWaterApron;
        attribute float aWaterApronDepth;
        attribute vec2 aTileLocal;
        varying vec4 vReflectionCoord;
        varying vec3 vWaterWorldPos;
        varying vec3 vWaterLocalPos;
        varying vec2 vTileLocal;
        varying float vWaterPin;
        varying float vWaterApron;
        varying float vWaterApronDepth;
        varying float vShoreLapHeight;

        #include <common>
        ${At}

        void main() {
            vec4 localPosition = vec4(position, 1.0);
            vWaterLocalPos = position.xyz;
            vTileLocal = aTileLocal;
            vWaterPin = aWaterPin;
            vWaterApron = aWaterApron;
            vWaterApronDepth = aWaterApronDepth;

            vec3 p = position.xyz;
            vec3 gerstnerOffset = vec3(0.0);
            gerstnerOffset += GerstnerWave(waveA, position.xyz);
            gerstnerOffset += GerstnerWave(waveB, position.xyz);
            gerstnerOffset += GerstnerWave(waveC, position.xyz);
            p += gerstnerOffset
                * ${xt.toFixed(5)}
                * (1.0 - aWaterPin);

            // The coast apron follows the static terrain slope. Reuse the
            // water body's vertical Gerstner component across its depth: the
            // inner seam stays fixed, while the outer edge rises above and
            // sinks below the coast mesh. Depth testing then turns that height
            // motion into a natural advance/recede of the visible waterline.
            float shoreLapHeight = gerstnerOffset.z
                * ${xt.toFixed(5)}
                * 0.32
                * aWaterApron
                * aWaterApronDepth;
            p.z += shoreLapHeight;
            vShoreLapHeight = shoreLapHeight;

            vec4 displacedPosition = vec4(p, 1.0);
            vReflectionCoord = textureMatrix * displacedPosition;
            vWaterWorldPos = (modelMatrix * displacedPosition).xyz;
            gl_Position = projectionMatrix * modelViewMatrix * displacedPosition;
        }
    `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float alpha;
        uniform float distortionScale;
        uniform vec3 sunColor;
        uniform vec3 sunDirection;
        uniform vec3 eye;
        uniform vec3 waterColor;
        uniform vec4 waterCalibration;
        uniform vec3 waterCalibrationBalance;
        uniform vec4 waveA;
        uniform vec4 waveB;
        uniform vec4 waveC;
        uniform float uHexRadius;
        uniform float uShowGrid;
        varying vec4 vReflectionCoord;
        varying vec3 vWaterWorldPos;
        varying vec3 vWaterLocalPos;
        varying vec2 vTileLocal;
        varying float vWaterPin;
        varying float vWaterApron;
        varying float vWaterApronDepth;
        varying float vShoreLapHeight;

        #include <common>
        ${Mt}
        ${jt}
        ${m}

        float hexEdgeDistance(vec2 local) {
            float d = 10.0;
            for (int i = 0; i < 6; i++) {
                float th = (float(i) + 0.5) * 1.0471975512;
                d = min(d, 0.8660254 - dot(local, vec2(cos(th), sin(th))));
            }
            return d;
        }

        float hexGridLine(vec2 local) {
            if (uShowGrid < 0.5) return 0.0;
            return 1.0 - smoothstep(0.0, 0.05, hexEdgeDistance(local));
        }

        void sunLight(
            const vec3 surfaceNormal,
            const vec3 eyeDirection,
            float shiny,
            float spec,
            float diffuse,
            inout vec3 diffuseColor,
            inout vec3 specularColor
        ) {
            vec3 reflection = normalize(reflect(-sunDirection, surfaceNormal));
            float direction = max(0.0, dot(eyeDirection, reflection));
            specularColor += pow(direction, shiny) * sunColor * spec;
            diffuseColor += max(dot(sunDirection, surfaceNormal), 0.0) * sunColor * diffuse;
        }

        void main() {
            vec4 noise = getNoise(vWaterWorldPos.xz * size);
            vec3 fullRippleNormal = normalize(noise.xzy * vec3(1.5, 1.0, 1.5));
            vec3 rippleNormal = normalize(mix(
                vec3(0.0, 1.0, 0.0),
                fullRippleNormal,
                ${Tt.toFixed(2)}
            ));

            vec3 localTangent;
            vec3 localBinormal;
            vec3 localWaveNormal;
            GerstnerBasis(
                vWaterLocalPos,
                ${xt.toFixed(5)},
                localTangent,
                localBinormal,
                localWaveNormal
            );

            float waveAmount = 1.0 - vWaterPin;
            localTangent = normalize(mix(vec3(1.0, 0.0, 0.0), localTangent, waveAmount));
            localBinormal = normalize(mix(vec3(0.0, 1.0, 0.0), localBinormal, waveAmount));
            localWaveNormal = normalize(cross(localTangent, localBinormal));

            // Reflector local XY maps to world X,-Z and local Z maps to world Y.
            // Build an orthonormal world frame whose tangent axes match the XZ
            // coordinates used to sample waternormals.jpg.
            vec3 waveNormal = normalize(vec3(
                localWaveNormal.x,
                localWaveNormal.z,
                -localWaveNormal.y
            ));
            vec3 waveTangent = normalize(vec3(
                localTangent.x,
                localTangent.z,
                -localTangent.y
            ));
            waveTangent = normalize(
                waveTangent - waveNormal * dot(waveTangent, waveNormal)
            );
            vec3 waveBitangent = normalize(cross(waveTangent, waveNormal));
            vec3 surfaceNormal = normalize(
                waveTangent * rippleNormal.x
                + waveNormal * rippleNormal.y
                + waveBitangent * rippleNormal.z
            );

            vec3 diffuseLight = vec3(0.0);
            vec3 specularLight = vec3(0.0);
            vec3 worldToEye = eye - vWaterWorldPos;
            vec3 eyeDirection = normalize(worldToEye);
            sunLight(surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight);

            float distance = length(worldToEye);
            vec2 distortion = surfaceNormal.xz
                * (0.001 + 1.0 / distance)
                * distortionScale;

            vec2 reflectionUv = vReflectionCoord.xy / vReflectionCoord.w;
            reflectionUv += distortion;
            bool inReflection =
                reflectionUv.x >= 0.0 && reflectionUv.x <= 1.0
                && reflectionUv.y >= 0.0 && reflectionUv.y <= 1.0;
            vec3 reflectionSample = waterColor;
            if (inReflection) {
                vec4 mirrored = texture2D(tDiffuse, reflectionUv);
                reflectionSample = mirrored.rgb;
            }

            // Sean Bradley reference shading: sun diffuse/specular, Fresnel
            // reflectance and water-colour scatter. The reference multiplies
            // the diffuse branch by getShadowMask(); this custom Reflector is
            // not a shadow receiver, so that factor is exactly 1.0 here.
            float theta = max(dot(eyeDirection, surfaceNormal), 0.0);
            float rf0 = 0.3;
            float reflectance = rf0 + (1.0 - rf0) * pow(1.0 - theta, 5.0);
            vec3 scatter = max(0.0, dot(surfaceNormal, eyeDirection)) * waterColor;
            const vec3 luminanceWeights = vec3(0.2126, 0.7152, 0.0722);
            float reflectionLuminance = dot(reflectionSample, luminanceWeights);
            vec3 albedo = mix(
                sunColor * diffuseLight * 0.3 + scatter,
                vec3(0.1) + reflectionSample * 0.9
                    + specularLight * reflectionLuminance,
                reflectance
            );

            // A broad sky dome illuminates water from every azimuth. Compare
            // the final combined-normal reflection with flat water so only
            // slopes catching the brighter horizon gain a silver-grey sheen.
            // This remains independent of the directional sun-glint path.
            vec3 skyReflection = reflect(-eyeDirection, surfaceNormal);
            vec3 flatSkyReflection = reflect(
                -eyeDirection,
                vec3(0.0, 1.0, 0.0)
            );
            float skyBrightness = mix(
                0.72,
                0.20,
                smoothstep(0.0, 1.0, max(skyReflection.y, 0.0))
            );
            float flatSkyBrightness = mix(
                0.72,
                0.20,
                smoothstep(0.0, 1.0, max(flatSkyReflection.y, 0.0))
            );
            float skySheen = max(skyBrightness - flatSkyBrightness, 0.0);
            albedo += vec3(0.72, 0.78, 0.88)
                * skySheen
                * ${as.toFixed(2)};

            // Give the water real depth without dulling its highlights. Dark
            // and mid-blue reflection values settle on a dark grey-blue floor
            // instead of collapsing toward black, while a separate highlight
            // curve takes the brightest wave faces to white.
            float gradedLuminance = dot(albedo, luminanceWeights);
            float deepWater = 1.0 - smoothstep(0.18, 0.62, gradedLuminance);
            albedo = mix(
                albedo,
                vec3(0.075, 0.080, 0.090)
                    + albedo * vec3(0.22, 0.25, 0.30),
                deepWater
            );
            float whiteHighlight = smoothstep(0.38, 0.78, gradedLuminance);
            albedo = mix(albedo, vec3(1.0), whiteHighlight);
            albedo = calibrateMaterialColor(
                albedo,
                waterCalibration,
                waterCalibrationBalance
            );

            // Recover the signed wave height at the apron edge. The varying
            // contains that height multiplied by apron depth, so division
            // gives one shared phase for every fragment across the strip.
            // On an advancing wave the contact line approaches the outer
            // edge; while receding it follows the water/terrain intersection
            // back toward the open water instead of remaining painted inland.
            float shoreWave = vShoreLapHeight / max(vWaterApronDepth, 0.04);
            float recedingContactDepth = clamp(
                ${Ct.toFixed(3)} / max(-shoreWave, 0.001),
                0.30,
                0.94
            );
            float waveIsAdvancing = smoothstep(-0.002, 0.004, shoreWave);
            float foamCenter = mix(0.94, recedingContactDepth, 1.0 - waveIsAdvancing);
            float foamWidth = max(fwidth(vWaterApronDepth) * 1.35, 0.020);
            // This is only an invisible influence zone. The visible mask
            // below is made of disconnected islands; never expose the zone
            // itself as another contour line along the coast.
            float foamZone = 1.0 - smoothstep(
                foamWidth * 1.4,
                foamWidth * 5.0,
                abs(vWaterApronDepth - foamCenter)
            );
            foamZone *= smoothstep(0.16, 0.32, vWaterApronDepth);
            float foamSignal = noise.x * 0.62 + noise.z * 0.38
                + sin(vWaterWorldPos.x * 8.7 + vWaterWorldPos.z * 6.9) * 0.20
                + sin(vWaterWorldPos.x * 19.3 - vWaterWorldPos.z * 16.1) * 0.10;
            float foamClusters = (
                sin(vWaterWorldPos.x * 12.7 + vWaterWorldPos.z * 9.1) * 0.5 + 0.5
            ) * 0.58 + (
                sin(vWaterWorldPos.x * 21.3 - vWaterWorldPos.z * 17.9 + 1.7) * 0.5 + 0.5
            ) * 0.42;
            float foamIslands = smoothstep(
                0.47,
                0.66,
                foamClusters + foamSignal * 0.34
            );
            // Apron depth grows from open water toward land. Keep the broken
            // island shapes, but grade their colour contribution across that
            // direction: pale at the land contact and smoothly back to the
            // untouched water colour farther out.
            float landwardFoamFade = smoothstep(
                foamCenter - foamWidth * 3.8,
                foamCenter + foamWidth * 0.55,
                vWaterApronDepth
            );
            float foamAmount = vWaterApron
                * foamZone
                * foamIslands
                * landwardFoamFade
                * mix(0.28, 0.46, smoothstep(0.002, 0.022, abs(shoreWave)));
            albedo = mix(albedo, vec3(0.78, 0.80, 0.76), foamAmount);

            // Sparse white flecks ride inside the same moving band. A much
            // higher-frequency threshold keeps them as individual glints,
            // never another continuous bright shoreline.
            float glitterSignal = sin(
                vWaterWorldPos.x * 41.0
                    + vWaterWorldPos.z * 37.0
                    - time * 8.0
            ) * 0.5 + 0.5;
            glitterSignal *= sin(
                vWaterWorldPos.x * 23.0
                    - vWaterWorldPos.z * 29.0
                    + time * 5.0
            ) * 0.5 + 0.5;
            float foamGlitter = foamZone
                * foamIslands
                * landwardFoamFade
                * smoothstep(0.82, 0.97, glitterSignal)
                * 0.48;
            albedo = mix(albedo, vec3(0.96, 0.97, 0.93), foamGlitter);

            albedo = mix(
                albedo,
                vec3(0.04, 0.05, 0.07),
                hexGridLine(vTileLocal / uHexRadius)
                    * (1.0 - vWaterApron) * 0.8
            );
            gl_FragColor = vec4(albedo, alpha);
        }
    `},us=class{static{this.reflector=null}static{this.scene=null}static{this.grid=[]}static{this.waterCount=-1}static{this.lastCameraState=[]}static{this.lastSceneRevision=-1}static{this.reflectionMaterials=new Map}static{this.reflectionColorTextures=new Map}static{this.skyPlane=null}static{this.sunDisc=null}static async init(e,t,n){this.dispose(),this.scene=e,this.grid=n,this.skyPlane=await this.createSkyPlane(t),e.add(this.skyPlane),this.sunDisc=this.createSunDisc(),e.add(this.sunDisc);let r=new Zo(this.buildSurfaceGeometry(),{clipBias:.001,textureWidth:$o,textureHeight:$o,multisample:0,shader:ls});r.name=`waterReflectionSurface`,r.position.y=Ct,r.rotation.x=-Math.PI/2,r.renderOrder=4,r.castShadow=!1,r.receiveShadow=!1,r.material.transparent=!1,r.material.depthWrite=!0,r.material.uniforms.uShowGrid=mt.showGrid,r.material.uniforms.waterCalibration=p.water.parameters,r.material.uniforms.waterCalibrationBalance=p.water.balance,r.material.side=THREE.DoubleSide,r.material.toneMapped=!1,r.userData.excludeFromWaterReflection=!0,this.installCachedRender(r,t),this.reflector=r,e.add(r)}static animate(e){if(!this.reflector)return;let t=this.reflector.material.uniforms;if(t.time.value=e*yt,x.getDirection(t.sunDirection.value),x.getColor(t.sunColor.value),this.positionSkyPlane(),this.positionSunDisc(),this.grid.reduce((e,t)=>e+ +(t.userData.type===`water`),0)===this.waterCount)return;let n=this.reflector.geometry;this.reflector.geometry=this.buildSurfaceGeometry(),n?.dispose?.(),this.reflector.forceUpdate=!0,this.lastCameraState=[]}static dispose(){this.reflector&&(this.reflector.parent?.remove(this.reflector),this.reflector.geometry?.dispose?.(),this.reflector.dispose?.()),this.skyPlane&&(this.skyPlane.parent?.remove(this.skyPlane),this.skyPlane.material?.map?.dispose?.(),this.skyPlane.material?.dispose?.(),this.skyPlane.geometry?.dispose?.()),this.sunDisc&&(this.sunDisc.parent?.remove(this.sunDisc),this.sunDisc.material?.map?.dispose?.(),this.sunDisc.material?.dispose?.(),this.sunDisc.geometry?.dispose?.());for(let e of this.reflectionMaterials.values())e.dispose?.();this.reflectionMaterials.clear();for(let e of this.reflectionColorTextures.values())e.dispose?.();this.reflectionColorTextures.clear(),this.reflector=null,this.skyPlane=null,this.sunDisc=null,this.waterCount=-1,this.lastCameraState=[],this.lastSceneRevision=-1}static async createSkyPlane(e){let t=await new THREE.TextureLoader().loadAsync(Qo);t.colorSpace=THREE.SRGBColorSpace,t.wrapS=THREE.ClampToEdgeWrapping,t.wrapT=THREE.ClampToEdgeWrapping,t.minFilter=THREE.LinearMipmapLinearFilter,t.magFilter=THREE.LinearFilter,t.anisotropy=Math.min(4,e.capabilities.getMaxAnisotropy()),t.needsUpdate=!0;let n=new THREE.MeshBasicMaterial({map:t,side:THREE.DoubleSide,toneMapped:!1}),r=new THREE.Mesh(new THREE.PlaneGeometry(ts,ns),n),i=this.getGridBounds();return r.name=`waterReflectionSkyPlane`,r.position.set(i.x,es,i.z),r.rotation.x=-Math.PI/2,r.renderOrder=-100,r.castShadow=!1,r.receiveShadow=!1,r.visible=!1,r}static createSunDisc(){let e=document.createElement(`canvas`);e.width=128,e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,`rgba(255, 252, 224, 1)`),n.addColorStop(.24,`rgba(255, 244, 184, 1)`),n.addColorStop(.42,`rgba(255, 226, 128, 0.55)`),n.addColorStop(1,`rgba(255, 220, 112, 0)`),t.fillStyle=n,t.fillRect(0,0,128,128);let r=new THREE.CanvasTexture(e);r.colorSpace=THREE.SRGBColorSpace;let i=new THREE.MeshBasicMaterial({map:r,transparent:!0,depthWrite:!1,side:THREE.DoubleSide,toneMapped:!1}),a=new THREE.Mesh(new THREE.PlaneGeometry(18,18),i);return a.name=`waterReflectionSunDisc`,a.rotation.x=-Math.PI/2,a.renderOrder=-99,a.castShadow=!1,a.receiveShadow=!1,a.visible=!1,this.positionSunDisc(a),a}static positionSkyPlane(){if(!this.skyPlane)return;let e=this.getGridBounds();this.skyPlane.position.set(e.x,es,e.z)}static positionSunDisc(e=this.sunDisc){e&&x.getSkyPosition(79.9,e.position)}static getGridBounds(){let e=1/0,t=-1/0,n=1/0,r=-1/0;for(let i of this.grid){let a=i.children.find(e=>e instanceof THREE.Mesh&&!e.userData.isBoundingMesh);a&&(e=Math.min(e,a.position.x),t=Math.max(t,a.position.x),n=Math.min(n,a.position.z),r=Math.max(r,a.position.z))}return{x:Number.isFinite(e)?(e+t)*.5:0,z:Number.isFinite(n)?(n+r)*.5:0}}static buildSurfaceGeometry(){let e=[],t=[],n=[],r=[],i=[],a=new Map;for(let e of this.grid){let t=e.userData.q,n=e.userData.r;Number.isFinite(t)&&Number.isFinite(n)&&a.set(`${t},${n}`,e)}let o=0;for(let s of this.grid){if(s.userData.type!==`water`)continue;let c=s.children.find(e=>e instanceof THREE.Mesh&&!e.userData.isBoundingMesh),l=c?.geometry?.attributes?.position,u=c?.geometry?.attributes?.aWaterPin,d=c?.geometry?.attributes?.aShoreA,f=c?.geometry?.attributes?.aShoreB;if(!l||l.count<14)continue;let p=c.position.x,m=c.position.z,h=(a,o,s,c,d)=>{let f=1-c-d,h=l.getX(a)*f+l.getX(o)*c+l.getX(s)*d,g=l.getZ(a)*f+l.getZ(o)*c+l.getZ(s)*d;e.push(h+p,-(g+m),0),t.push((u?.getX(a)??0)*f+(u?.getX(o)??0)*c+(u?.getX(s)??0)*d),n.push(0),r.push(0),i.push(h,g)};for(let e=0;e<6;e++){let t=6+(e+1)%6,n=6+e,r=is,i=(e,i)=>h(13,t,n,e/r,i/r);for(let e=0;e<r;e++)for(let t=0;t<r-e;t++)i(e,t),i(e+1,t),i(e,t+1),e+t<1&&(i(e+1,t),i(e+1,t+1),i(e,t+1))}let g=[d?.getX(0)??0,d?.getY(0)??0,d?.getZ(0)??0,f?.getX(0)??0,f?.getY(0)??0,f?.getZ(0)??0],_=[,,,,,,].fill(null),v=a=>{e.push(a.x+p,-(a.z+m),a.height),t.push(1),n.push(1),r.push(a.depth),i.push(a.x,a.z)},y=(e,t,n)=>{let r=(t.x-e.x)*-(n.z-e.z)- -(t.z-e.z)*(n.x-e.x);v(e),r>=0?(v(t),v(n)):(v(n),v(t))},b=s.userData.q,x=s.userData.r,S=b%2==1?[[1,0],[0,-1],[-1,0],[-1,1],[0,1],[1,1]]:[[1,-1],[0,-1],[-1,-1],[-1,0],[0,1],[1,0]];for(let e=0;e<6;e++){if(g[e]<.5)continue;let t=6+e,n=6+(e+1)%6,r={x:l.getX(t),z:l.getZ(t),height:0,depth:0},i={x:l.getX(n),z:l.getZ(n),height:0,depth:0},o=(e+.5)*Math.PI/3,s={x:Math.cos(o),z:Math.sin(o)},c=r,u=null,d=S[5-e],f=a.get(`${b+d[0]},${x+d[1]}`)?.children.find(e=>e instanceof THREE.Mesh&&!e.userData.isBoundingMesh),h=f?.geometry?.attributes?.position,v=Math.max(0,(f?.position?.y??0)+(h?.getY(13)??0));for(let t=0;t<=ss;t++){let n=t/ss,a={x:THREE.MathUtils.lerp(r.x,i.x,n),z:THREE.MathUtils.lerp(r.z,i.z,n),height:0,depth:0},o=a.x+p,l=a.z+m,d=Math.sin(o*2.91+l*3.77),f=Math.sin(o*9.17-l*7.31),h=os*(.78+d*.32+f*.18),g=THREE.MathUtils.clamp(h/cs,0,.92),b={x:a.x+s.x*h,z:a.z+s.z*h,height:v*g,depth:1};t===0?_[e]={start:b,end:b}:u&&(y(c,b,u),y(c,a,b),_[e].end=b),c=a,u=b}}for(let e=0;e<6;e++){let t=_[(e+5)%6],n=_[e];if(!t||!n)continue;let r=6+e;y({x:l.getX(r),z:l.getZ(r),height:0,depth:0},t.end,n.start)}o++}let s=new THREE.BufferGeometry;return s.setAttribute(`position`,new THREE.Float32BufferAttribute(e,3)),s.setAttribute(`aWaterPin`,new THREE.Float32BufferAttribute(t,1)),s.setAttribute(`aWaterApron`,new THREE.Float32BufferAttribute(n,1)),s.setAttribute(`aWaterApronDepth`,new THREE.Float32BufferAttribute(r,1)),s.setAttribute(`aTileLocal`,new THREE.Float32BufferAttribute(i,2)),s.computeVertexNormals(),s.computeBoundingSphere(),this.waterCount=o,s}static installCachedRender(e,t){let n=e.onBeforeRender.bind(e);e.onBeforeRender=(r,i,a)=>{e.material.uniforms.eye.value.setFromMatrixPosition(a.matrixWorld);let o=[...a.matrixWorld.elements,...a.projectionMatrix.elements],s=this.matrixChanged(o),l=c(),u=l!==this.lastSceneRevision;if(!e.forceUpdate&&!s&&!u)return;this.skyPlane&&(this.skyPlane.visible=!0),this.sunDisc&&(this.sunDisc.visible=!0);let d=[],f=[];i.traverse(t=>{if(t===e||!t.visible)return;let n=String(t.name??``).toLowerCase(),r=t.parent?.userData?.type===`water`,i=t.userData?.excludeFromWaterReflection||t.userData?.isBoundingMesh||t.isSprite||t.isPoints||t.isLine||n.includes(`highlight`)||n.includes(`pathindicator`)||n.includes(`marker`);!r&&!i||(d.push(t),t.visible=!1)}),i.traverse(e=>{if(!e.visible||!e.isMesh)return;let t=e.material,n=e!==this.skyPlane&&e!==this.sunDisc;f.push([e,t]),e.material=Array.isArray(t)?t.map(e=>this.getReflectionMaterial(e,n)):this.getReflectionMaterial(t,n)});let p=t.shadowMap.needsUpdate,m=i.background,h=r.getClearAlpha();t.shadowMap.needsUpdate=!1,i.background=null,r.setClearAlpha(0);try{n(r,i,a),this.lastCameraState=o,this.lastSceneRevision=l}finally{i.background=m,r.setClearAlpha(h),t.shadowMap.needsUpdate=p;for(let[e,t]of f)e.material=t;for(let e of d)e.visible=!0;this.skyPlane&&(this.skyPlane.visible=!1),this.sunDisc&&(this.sunDisc.visible=!1)}}}static getReflectionMaterial(e,t){if(!e)return e;let n=this.reflectionMaterials.get(e),r=!n;return n||(n=new THREE.MeshBasicMaterial,n.name=`${e.name||e.type||`material`}WaterReflection`,this.reflectionMaterials.set(e,n)),e.color?n.color.copy(e.color):n.color.set(16777215),t&&n.color.multiplyScalar(rs),n.map=t?this.getReflectionColorTexture(e.map):e.map??null,n.alphaMap=e.alphaMap??null,n.alphaTest=e.alphaTest??0,n.opacity=e.opacity??1,n.transparent=e.transparent??!1,n.vertexColors=e.vertexColors??!1,n.side=e.side===THREE.DoubleSide?THREE.DoubleSide:THREE.BackSide,n.depthTest=e.depthTest??!0,n.depthWrite=e.depthWrite??!0,n.toneMapped=!1,r&&(n.needsUpdate=!0),n}static getReflectionColorTexture(e){if(!e||e.colorSpace!==THREE.SRGBColorSpace)return e??null;let t=this.reflectionColorTextures.get(e);return t||(t=e.clone(),t.colorSpace=THREE.NoColorSpace,t.needsUpdate=!0,this.reflectionColorTextures.set(e,t),t)}static matrixChanged(e){if(e.length!==this.lastCameraState.length)return!0;for(let t=0;t<e.length;t++)if(Math.abs(e[t]-this.lastCameraState[t])>1e-7)return!0;return!1}};function ds(e,t,n,r,i){let a=Math.sin(n),o=Math.cos(n),s=kt(e+a*r,t+o*r,i),c=kt(e-a*r,t-o*r,i);return{height:(s+c)*.5,pitch:-Math.atan2(s-c,r*2),frontHeight:s,backHeight:c}}var fs=class{static animate(e){let t=A();for(let n of t.units){let r=n.visualUnit;if(!r||r.userData?.unitClass!==`naval`||t.map.getTile(n.q,n.r)?.type!==`WATER`)continue;let i=r.userData.waterSampleHalfLength??.45,a=ds(r.position.x,r.position.z,r.rotation.y,i,e),o=r.userData.waterBaseY??r.position.y;r.position.y=o+Ct+a.height,r.rotation.x=a.pitch,r.userData.sprite&&(r.userData.sprite.position.y=r.position.y+1.5)}}},ps=90,ms=class{static{this.samples=[]}static{this.lastFrame=0}static{this.element=null}static{this.lastPaint=0}static{this.enabled=!1}static setEnabled(e,t){this.enabled=e,this.samples.length=0,this.lastFrame=0,t?.info&&(t.info.autoReset=!e),!e&&this.element&&(this.element.remove(),this.element=null)}static beginFrame(e){this.enabled&&e?.info?.reset?.()}static endFrame(e,t){if(!this.enabled)return;let n=t?.info;if(typeof document<`u`&&document.hidden){this.lastFrame=0;return}this.lastFrame>0&&(this.samples.push({frameMs:e-this.lastFrame,calls:n?.render?.calls??0,triangles:n?.render?.triangles??0,programs:n?.programs?.length??0}),this.samples.length>ps&&this.samples.shift()),this.lastFrame=e,e-this.lastPaint>250&&(this.lastPaint=e,this.paint())}static percentile(e,t){if(e.length===0)return 0;let n=[...e].sort((e,t)=>e-t);return n[Math.min(n.length-1,Math.floor(n.length*t))]}static snapshot(){let e=this.samples.map(e=>e.frameMs),t=this.percentile(e,.5),n=this.samples[this.samples.length-1];return{frames:this.samples.length,medianMs:+t.toFixed(2),p95Ms:+this.percentile(e,.95).toFixed(2),fps:t>0?+(1e3/t).toFixed(1):0,calls:n?.calls??0,triangles:n?.triangles??0,programs:n?.programs??0}}static paint(){this.element||(this.element=document.createElement(`div`),this.element.id=`frame-stats`,document.body.appendChild(this.element));let e=this.snapshot();this.element.textContent=`${e.medianMs.toFixed(1)} ms   ${e.fps} fps   p95 ${e.p95Ms.toFixed(1)} ms\n${e.calls} draws   ${(e.triangles/1e3).toFixed(1)}k tris   ${e.programs} programs`}},G=new THREE.Scene,K=new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,1,1e4);K.position.set(20,20,20),THREE.Cache.enabled=!0;var q=new THREE.WebGLRenderer({antialias:!0});q.setClearColor(0,0),q.outputColorSpace=THREE.LinearSRGBColorSpace,q.toneMapping=THREE.NoToneMapping,q.toneMappingExposure=1;var J=new THREE.Group,hs=new THREE.Scene,gs=I.CAMERA.INITIAL_HEIGHT,_s=!1,vs=new THREE.Vector3,ys=[];function bs(){return gs}function xs(e){gs=e}var Ss=I.COLS*I.HEX_RADIUS*1.5,Cs=I.ROWS*I.HEX_RADIUS*Math.sqrt(3),ws=null,Ts=null,Y=null,Es=null,Ds=.9,Os=.5,ks=2.2,As=4,js={uniforms:{tDiffuse:{value:null},exposure:{value:1},contrast:{value:1},saturation:{value:1},gamma:{value:1},colorBalance:{value:new THREE.Vector3(1,1,1)}},vertexShader:`
        varying vec2 vUv;

        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float exposure;
        uniform float contrast;
        uniform float saturation;
        uniform float gamma;
        uniform vec3 colorBalance;
        varying vec2 vUv;

        void main() {
            vec4 source = texture2D(tDiffuse, vUv);
            vec3 color = max(source.rgb * exposure * colorBalance, vec3(0.0));
            color = pow(color, vec3(gamma));
            float luminance = dot(color, vec3(0.2126, 0.7152, 0.0722));
            color = mix(vec3(luminance), color, saturation);
            color = max((color - 0.5) * contrast + 0.5, vec3(0.0));
            gl_FragColor = vec4(color, source.a);
        }
    `};function Ms(){let e=new THREE.Vector2(window.innerWidth,window.innerHeight),t=new THREE.WebGLRenderTarget(e.x,e.y,{minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,format:THREE.RGBAFormat,type:THREE.HalfFloatType,samples:As});ws=new THREE.EffectComposer(q,t),ws.setSize(e.x,e.y),ws.addPass(new THREE.RenderPass(G,K)),Ts=new THREE.UnrealBloomPass(e,Ds,Os,ks),ws.addPass(Ts);let n=Ai().colorGrade;Y=new THREE.ShaderPass(js),Y.enabled=n!==void 0,n&&(Y.uniforms.exposure.value=n.exposure,Y.uniforms.contrast.value=n.contrast??1,Y.uniforms.saturation.value=n.saturation,Y.uniforms.gamma.value=n.gamma,Y.uniforms.colorBalance.value.set(...n.balance)),ws.addPass(Y),Es=new THREE.OutputPass,ws.addPass(Es),Fs(L.bloom)}function Ns(e){Y&&(Y.enabled=!0,Y.uniforms.exposure.value=e.exposure,Y.uniforms.contrast.value=e.contrast??1,Y.uniforms.saturation.value=e.saturation,Y.uniforms.gamma.value=e.gamma,Y.uniforms.colorBalance.value.set(...e.balance),Es&&(Es.enabled=!0))}function Ps(){if(!Y?.enabled)return null;let e=Y.uniforms.colorBalance.value;return{exposure:Y.uniforms.exposure.value,contrast:Y.uniforms.contrast.value,saturation:Y.uniforms.saturation.value,gamma:Y.uniforms.gamma.value,balance:[e.x,e.y,e.z]}}function Fs(e){Ts&&(Ts.enabled=e),Es&&(Es.enabled=e||Y?.enabled===!0)}function Is(e,t){ws?.setSize(e,t)}function Ls(){_s||=(q.setSize(window.innerWidth,window.innerHeight),q.shadowMap.enabled=!0,q.shadowMap.type=THREE.VSMShadowMap,q.shadowMap.autoUpdate=!1,document.body.appendChild(q.domElement),G.add(J),Ms(),!0)}window.addEventListener(`load`,Ls);function Rs(e,t){let n=new THREE.Matrix4,r=new THREE.Matrix4,i=new THREE.Vector3(e,gs,t),a=i.clone().applyMatrix4(n);K.position.copy(a);let o=zs(gs).clone().applyMatrix4(n);return K.lookAt(a.clone().add(o.multiplyScalar(10))),{localToWorldMatrix:n,worldToLocalMatrix:r,localCameraPos:i}}function zs(e){let t=-1+(e-I.CAMERA.MIN_HEIGHT)/(I.CAMERA.MAX_HEIGHT-I.CAMERA.MIN_HEIGHT)*-2;return new THREE.Vector3(0,t,-1).normalize()}function Bs(e,t,n){let r=new THREE.Vector3;K.getWorldDirection(r);let i=new THREE.Vector3(e,gs,t).clone().applyMatrix4(n.localToWorldMatrix);K.position.copy(i),K.lookAt(i.clone().add(r.multiplyScalar(10)))}function Vs(e,t,n){let r=new THREE.Vector3;K.getWorldDirection(r),vs.copy(K.position).add(r.multiplyScalar(K.position.length()));let i=new THREE.Vector3,a=new THREE.Vector3(0,1,0);i.crossVectors(r,a).normalize();let o=new THREE.Vector3;o.crossVectors(i,a).normalize();let s=new THREE.Vector3;s.addScaledVector(i,e),s.addScaledVector(o,t),K.position.add(s),vs.add(s),K.lookAt(vs)}function Hs(e){let t=new THREE.Vector3;K.getWorldDirection(t),vs.copy(K.position).add(t.multiplyScalar(K.position.length()));let n=K.position.clone().applyMatrix4(e.worldToLocalMatrix);n.y=gs;let r=n.clone().applyMatrix4(e.localToWorldMatrix);K.position.copy(r),K.lookAt(vs)}function Us(e,t){let n=new THREE.OrthographicCamera(-Ss/2,Ss/2,Cs/2,-Cs/2,.1,1e3);n.position.set(e,100,t),n.rotation.x=-Math.PI/2,n.updateProjectionMatrix();let r=new THREE.LineBasicMaterial({color:0}),i=[new THREE.Vector3(-Ss/2,.1,-Cs/2),new THREE.Vector3(Ss/2,.1,-Cs/2),new THREE.Vector3(Ss/2,.1,Cs/2),new THREE.Vector3(-Ss/2,.1,Cs/2),new THREE.Vector3(-Ss/2,.1,-Cs/2)],a=new THREE.BufferGeometry().setFromPoints(i),o=new THREE.Line(a,r);o.position.set(e,0,t),hs.add(o);let s=new THREE.Group;return s.name=`miniMapHighlights`,hs.add(s),{miniMapCamera:n,mapWidth:Ss,mapHeight:Cs,highlightGroup:s}}function Ws(e,t,n,r,i){requestAnimationFrame(()=>Ws(e,t,n,r,i)),Gs(e,t,i)}function Gs(e,t,r){ms.beginFrame(q),W.updatePathAnimation();let i=performance.now()*.001;if(x.animate(i),V.animateWater(i),us.animate(i),Xo.update(i,K,q.domElement.height),_(i),_o.update(),Oo.update(),E.animate(i),no.animate(i),oo.animate(i),so.animate(i),fs.animate(i),on.animate(i)&&n(),q.shadowMap.needsUpdate=b(),q.setViewport(0,0,window.innerWidth,window.innerHeight),q.setScissor(0,0,window.innerWidth,window.innerHeight),q.setScissorTest(!0),q.setClearColor(0,0),ws?ws.render():q.render(G,K),!L.minimap){q.setScissorTest(!1),ms.endFrame(performance.now(),q);return}q.autoClear=!0;let a=window.innerWidth-I.MINIMAP.WIDTH-10,o=window.innerHeight-I.MINIMAP.HEIGHT-I.MINIMAP.TOP;q.setViewport(a,o,I.MINIMAP.WIDTH,I.MINIMAP.HEIGHT),q.setScissor(a,o,I.MINIMAP.WIDTH,I.MINIMAP.HEIGHT),q.setClearColor(1118481,1),Ks(r,t),q.render(hs,e),q.setScissorTest(!1),ms.endFrame(performance.now(),q)}function Ks(e,t){K.updateProjectionMatrix(),K.updateMatrixWorld();let n=[...K.projectionMatrix.elements,...K.matrixWorld.elements];if(n.length===ys.length&&n.every((e,t)=>e===ys[t]))return;ys=n;let r=new THREE.Frustum;r.setFromProjectionMatrix(new THREE.Matrix4().multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse));let i=V.hexGrid.filter(e=>{let n=new THREE.Vector3(e.userData.x,0,e.userData.z).clone().applyMatrix4(t.localToWorldMatrix);return r.containsPoint(n)}),a=[],o=[],s=I.HEX_RADIUS*1.5;for(let e of i){let t=a.length/3;a.push(e.userData.x,.6,e.userData.z);for(let n=0;n<6;n++){let r=n*Math.PI/3;a.push(e.userData.x+Math.cos(r)*s,.6,e.userData.z+Math.sin(r)*s),o.push(t,t+n+1,t+(n+1)%6+1)}}let c=e.children[0];c||(c=new THREE.Mesh(new THREE.BufferGeometry,new THREE.MeshBasicMaterial({color:ct.VISIBLE_AREA,transparent:!0,opacity:.1,side:THREE.DoubleSide,depthWrite:!1})),e.add(c)),c.geometry.dispose();let l=new THREE.BufferGeometry;l.setAttribute(`position`,new THREE.Float32BufferAttribute(a,3)),l.setIndex(o),l.computeBoundingSphere(),c.geometry=l}function qs(e){let t=e;return t=(t>>16^t)*73244475,t=(t>>16^t)*73244475,t=t>>16^t,t}function Js(e,t){let n=(qs(e*733+t*3079)^2654435769)>>>0;return()=>{n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Ys=2;function Xs(e,t,n,r=0){switch(e){case`FOREST`:return!0;case`GRASS`:return Js(t,n)()<.52;case`SAND`:return!1;case`MOUNTAIN`:{let e=Js(t,n),i=!1;return r<Ys&&(e()<.55&&(i=!0,Qs(e,4)),e()<.45&&(i=!0,Qs(e,3))),e()<.08&&(i=!0),i}default:return!1}}function Zs(e,t,n,r,i,a){return!i&&!a&&Xs(e,t,n,r)}function Qs(e,t){for(let n=0;n<t;n++)e()}var $s=class{constructor(e=I.ROWS,t=I.COLS){this.rows=e,this.cols=t,this.tiles=En(Ai());let n=new Set((Ai().buildings??[]).map(e=>`${e.q},${e.r}`));for(let e=0;e<this.cols;e++)for(let t=0;t<this.rows;t++){let r=this.tiles[e]?.[t];r&&(r.vegetated=Zs(r.type,e,t,r.height,r.hasRoad,n.has(`${e},${t}`)))}}getTile(e,t){return e>=0&&e<this.cols&&t>=0&&t<this.rows?this.tiles[e][t]:null}},ec=new WeakMap,tc=new WeakMap,nc=new WeakMap;function rc(e,t){let n=nc.get(e);if(n===void 0){n=new Map;for(let r=0;r<e.length;r++){let i=e[r].r*t+e[r].q;n.has(i)||n.set(i,r)}nc.set(e,n)}return n}function ic(e,t){let n=tc.get(e);if(n===void 0){n=[];for(let t=0;t<e.length;t++)e[t].burning>0&&n.push(t);tc.set(e,n)}return n}var ac=16777619,oc=new DataView(new ArrayBuffer(8)),sc=0,cc=0;function lc(e){sc=2166136261^e|0,cc=3421674724^e|0}function X(e){oc.setFloat64(0,e);let t=oc.getUint32(0),n=oc.getUint32(4);sc=Math.imul(sc^t,ac),sc=Math.imul(sc^n,ac),cc=Math.imul(cc^t,ac),cc=Math.imul(cc^n,ac)}function uc(e){sc=Math.imul(sc^e.length,ac),cc=Math.imul(cc^e.length,ac);for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);sc=Math.imul(sc^n,ac),cc=Math.imul(cc^n,ac)}}var dc=class e{static{this.FACTORY_REPAIR_HP=2}constructor(e,t,n,r,i,a,o,s,c){this.occupancy=null,this.terrainChanged=!1,this.spawnedCount=0,this.carriedCount=0,this.hashLo=0,this.hashHi=0,this.hashing=!0,this.cols=e,this.rows=t,this.baseTiles=n,this.baseUnits=r,this.baseBuildings=i,this.log=a,this.tileOverrides=o,this.unitOverrides=s,this.buildingOverrides=c}static snapshot(t){let{cols:n,rows:r}=t.map,i=Array(n*r);for(let e=0;e<n;e++)for(let a=0;a<r;a++){let r=t.map.getTile(e,a);i[a*n+e]={height:r.height,type:r.type,hasRoad:r.hasRoad,moveCost:r.moveCost,vegetated:r.vegetated??!1,burning:r.burning??0,burned:r.burned??!1}}let a=e=>{if(e==null)return null;if(typeof e==`number`)return e;let n=t.units.indexOf(e);return n>=0?n:null},o=t.units.map(e=>({type:e.type,q:e.q,r:e.r,playerIndex:e.playerIndex,hp:e.hp,maxHp:e.maxHp,move:e.move,attack:e.attack,minRange:e.minRange,maxRange:e.maxRange,hasAttacked:e.hasAttacked,cooldowns:e.cooldowns??ke,carriedBy:a(e.carriedBy)})),s=(t.buildings??[]).map(e=>({q:e.q,r:e.r,ownerIndex:e.ownerIndex??null,hasHiddenUnit:e.hasHiddenUnit??e.hiddenUnitType!=null,yieldedTo:null,destroyed:!!e.destroyed,...e.isHeadquarters===!0||e.type===`hq`?{isHeadquarters:!0}:{},groupId:e.groupId??null,isEntrance:e.isEntrance??e.groupId==null,productType:e.productType??null,productionCountdown:e.productionCountdown??4})),c=new e(n,r,i,o,s,[],new Map,new Map,new Map);for(let e of o)e.carriedBy!==null&&c.carriedCount++;return c}condense(){let t=[],n=new Map;for(let[e]of this.liveUnits())n.set(e,n.size);for(let[,e]of this.liveUnits())t.push({...e,carriedBy:e.carriedBy===null?null:n.get(e.carriedBy)??null});return e.snapshot({map:{cols:this.cols,rows:this.rows,getTile:(e,t)=>this.getTile(e,t)},units:t,buildings:this.baseBuildings.map((e,t)=>this.getBuilding(t))})}fork(){let t=new e(this.cols,this.rows,this.baseTiles,this.baseUnits,this.baseBuildings,[...this.log],new Map(this.tileOverrides),new Map(this.unitOverrides),new Map(this.buildingOverrides));return t.terrainChanged=this.terrainChanged,t.hashLo=this.hashLo,t.hashHi=this.hashHi,t.spawnedCount=this.spawnedCount,t.carriedCount=this.carriedCount,t.hashing=this.hashing,t}get stateHash(){return(this.hashLo>>>0).toString(36)+`:`+(this.hashHi>>>0).toString(36)}disableHashing(){this.hashing=!1}get events(){return this.log}record(e){this.apply(e),this.log.push(e)}apply(t){switch(t.type){case`unitMoved`:{if(this.carriedCount>0)for(let e=0;e<this.unitCount;e++){let n=this.getUnit(e);n?.carriedBy===t.unitIndex&&this.setUnit(e,{...n,q:t.toQ,r:t.toR})}let e=this.getUnit(t.unitIndex);if(!e)return;this.setUnit(t.unitIndex,{...e,q:t.toQ,r:t.toR,move:e.move-t.moveSpent});return}case`unitAttacked`:{let e=this.getUnit(t.attackerIndex),n=this.getUnit(t.defenderIndex);if(e&&!t.isCounter){let n=t.skillId?P(e.type,t.skillId):Qe(e.type);this.setUnit(t.attackerIndex,{...e,...n?He(e,n):{hasAttacked:!0}})}n&&this.setUnit(t.defenderIndex,{...n,hp:n.hp-t.damage});return}case`unitRepaired`:{let e=this.getUnit(t.repairerIndex),n=this.getUnit(t.targetIndex);if(e){let n=P(e.type,t.skillId);this.setUnit(t.repairerIndex,{...e,...n?He(e,n):{hasAttacked:!0}})}n&&this.setUnit(t.targetIndex,{...n,hp:Math.min(n.maxHp,n.hp+t.hp)});return}case`unitLoaded`:{let e=this.getUnit(t.carrierIndex),n=this.getUnit(t.passengerIndex);if(e){let n=P(e.type,t.skillId);this.setUnit(t.carrierIndex,{...e,...n?He(e,n):{}})}n&&e&&(this.setUnit(t.passengerIndex,{...n,carriedBy:t.carrierIndex,q:e.q,r:e.r,move:0}),this.carriedCount++);return}case`unitUnloaded`:{let e=this.getUnit(t.carrierIndex),n=this.getUnit(t.passengerIndex);if(e){let n=P(e.type,t.skillId);this.setUnit(t.carrierIndex,{...e,...n?He(e,n):{}})}n&&(this.setUnit(t.passengerIndex,{...n,carriedBy:null,q:t.toQ,r:t.toR,move:0}),this.carriedCount--);return}case`unitDied`:t.unitIndex>=0&&t.unitIndex<this.unitCount&&(this.getUnit(t.unitIndex)?.carriedBy!=null&&this.carriedCount--,this.xorUnit(t.unitIndex),this.unitOverrides.set(t.unitIndex,null),this.xorUnit(t.unitIndex));return;case`fireStarted`:{Te(this.fireBoard,t.q,t.r);let e=this.getUnit(t.casterIndex);if(e){let n=t.skillId?P(e.type,t.skillId):void 0;this.setUnit(t.casterIndex,{...e,...n?He(e,n):{hasAttacked:!0}})}return}case`fireTicked`:Ee(this.fireBoard,t,t.aged);return;case`unitBurned`:{let e=this.getUnit(t.unitIndex);e&&this.setUnit(t.unitIndex,{...e,hp:e.hp-t.damage});return}case`turnStarted`:for(let n=0;n<this.unitCount;n++){let r=this.getUnit(n);if(r&&r.playerIndex===t.playerIndex&&r.carriedBy===null){let t=this.getBuildingAt(r.q,r.r),i=t&&!t[1].isHeadquarters&&t[1].ownerIndex===r.playerIndex?Math.min(r.maxHp,r.hp+e.FACTORY_REPAIR_HP):r.hp,a=Me(r.cooldowns);if(i===r.hp&&r.move===M[r.type].move&&r.hasAttacked===!1&&a===r.cooldowns)continue;this.setUnit(n,{...r,hp:i,move:M[r.type].move,hasAttacked:!1,cooldowns:a})}}for(let e=0;e<this.baseBuildings.length;e++){let n=this.getBuilding(e);!n||n.destroyed||!n.isEntrance||n.ownerIndex===t.playerIndex&&n.productType!==null&&n.productionCountdown>0&&this.setBuilding(e,{...n,productionCountdown:n.productionCountdown-1})}return;case`unitProduced`:{let e=M[t.unitType];if(!e)return;this.spawnedCount=Math.max(this.spawnedCount,t.unitIndex-this.baseUnits.length+1),this.setUnit(t.unitIndex,{type:t.unitType,q:t.q,r:t.r,playerIndex:t.playerIndex,hp:e.hp,maxHp:e.maxHp,move:0,attack:e.attack,minRange:e.minRange,maxRange:e.maxRange,hasAttacked:!0,cooldowns:ke,carriedBy:null});let n=this.getBuilding(t.buildingIndex);n&&this.setBuilding(t.buildingIndex,{...n,productionCountdown:4});return}case`terrainModified`:{let e=this.getTile(t.q,t.r);if(!e||e.type===`WATER`)return;let n=Math.max(0,e.height+t.delta),r=le(`WATER`);if(n<=r){this.setTile(t.q,t.r,{...e,type:`WATER`,height:r,moveCost:me.WATER.moveCost});for(let e=0;e<this.baseBuildings.length;e++){let n=this.getBuilding(e);n.q===t.q&&n.r===t.r&&!n.destroyed&&this.setBuilding(e,{...n,destroyed:!0})}}else this.setTile(t.q,t.r,{...e,height:n});return}case`buildingCaptured`:{let e=this.getBuilding(t.buildingIndex);if(!e||e.destroyed||e.isHeadquarters)return;for(let[e,n]of this.groupOf(t.buildingIndex)){let r=n.hasHiddenUnit;this.setBuilding(e,{...n,ownerIndex:t.playerIndex,hasHiddenUnit:!1,yieldedTo:r?t.playerIndex:n.yieldedTo,productType:r&&n.productType===null?ji:n.productType,productionCountdown:4})}return}}}tileIndex(e,t){return e<0||e>=this.cols||t<0||t>=this.rows?null:t*this.cols+e}getTile(e,t){let n=this.tileIndex(e,t);return n===null?null:this.tileOverrides.get(n)??this.baseTiles[n]}get unitCount(){return this.baseUnits.length+this.spawnedCount}getUnit(e){if(e<0||e>=this.unitCount)return null;let t=this.unitOverrides.get(e);return t===void 0?e<this.baseUnits.length?this.baseUnits[e]:null:t}*liveUnits(){for(let e=0;e<this.unitCount;e++){let t=this.getUnit(e);t&&(yield[e,t])}}*activeUnits(){for(let e of this.liveUnits())e[1].carriedBy===null&&(yield e)}getUnitAt(e,t){let n=this.occupancy;if(n===null){n=new Map;for(let[e,t]of this.liveUnits())t.carriedBy===null&&n.set(t.r*this.cols+t.q,e);this.occupancy=n}if(e<0||e>=this.cols||t<0||t>=this.rows)return null;let r=n.get(t*this.cols+e);if(r===void 0)return null;let i=this.getUnit(r);return i?[r,i]:null}get buildingCount(){return this.baseBuildings.length}getBuilding(e){return e<0||e>=this.baseBuildings.length?null:this.buildingOverrides.get(e)??this.baseBuildings[e]}*liveBuildings(){for(let e=0;e<this.baseBuildings.length;e++){let t=this.getBuilding(e);t.destroyed||(yield[e,t])}}getBuildingAt(e,t){if(e<0||e>=this.cols||t<0||t>=this.rows)return null;let n=rc(this.baseBuildings,this.cols).get(t*this.cols+e);if(n===void 0)return null;let r=this.getBuilding(n);return r.destroyed?null:[n,r]}*groupOf(e){let t=this.getBuilding(e);if(!(!t||t.destroyed)){if(t.groupId===null){yield[e,t];return}for(let[e,n]of this.liveBuildings())n.groupId===t.groupId&&(yield[e,n])}}*burningTiles(){for(let[e,t]of this.tileOverrides)t.burning>0&&(yield{q:e%this.cols,r:Math.floor(e/this.cols)});for(let e of ic(this.baseTiles,this.cols)){let t=this.tileOverrides.get(e);(!t||t.burning>0)&&(t||(yield{q:e%this.cols,r:Math.floor(e/this.cols)}))}}get tileIdentity(){return this.baseTiles}get hasTerrainOverrides(){return this.terrainChanged}get hasProduction(){for(let e=0;e<this.baseBuildings.length;e++){let t=this.getBuilding(e);if(t&&!t.destroyed&&t.isEntrance&&t.ownerIndex!==null&&t.productType!==null)return!0}return!1}get hasFire(){let e=ec.get(this.baseTiles);if(e===void 0&&(e=this.baseTiles.some(e=>e.burning>0),ec.set(this.baseTiles,e)),e)return!0;for(let e of this.tileOverrides.values())if(e.burning>0)return!0;return!1}get fireView(){return this.fireBoard}get fireBoard(){return{getTile:(e,t)=>this.getTile(e,t),setTile:(e,t,n)=>this.setTile(e,t,n)}}setTile(e,t,n){let r=this.tileIndex(e,t);if(r===null)return;let i=this.tileOverrides.get(r)??this.baseTiles[r];(i.type!==n.type||i.hasRoad!==n.hasRoad)&&(this.terrainChanged=!0),this.xorTile(r),this.tileOverrides.set(r,n),this.xorTile(r)}setUnit(e,t){this.xorUnit(e),this.unitOverrides.set(e,t),this.xorUnit(e),this.occupancy=null}setBuilding(e,t){this.xorBuilding(e),this.buildingOverrides.set(e,t),this.xorBuilding(e)}xorUnit(e){if(!this.hashing)return;lc(e*4+1);let t=this.getUnit(e);if(!t)X(-1);else{X(t.q),X(t.r),X(t.hp),X(t.move),X(+!!t.hasAttacked),X(t.carriedBy??-1);let e=Object.keys(t.cooldowns);if(e.length>0){e.sort();for(let n of e)uc(n),X(t.cooldowns[n])}}this.hashLo=this.hashLo^sc|0,this.hashHi=this.hashHi^cc|0}xorTile(e){if(!this.hashing)return;lc(e*4+2);let t=this.tileOverrides.get(e)??this.baseTiles[e];X(t.height),X(t.moveCost),uc(t.type),X(!!t.vegetated|(t.burned?2:0)),X(t.burning),this.hashLo=this.hashLo^sc|0,this.hashHi=this.hashHi^cc|0}xorBuilding(e){if(!this.hashing)return;lc(e*4+3);let t=this.getBuilding(e);t?(X(t.ownerIndex??-1),X(t.yieldedTo??-1),X(+!!t.destroyed),X(+!!t.hasHiddenUnit)):X(-1),this.hashLo=this.hashLo^sc|0,this.hashHi=this.hashHi^cc|0}},fc=[-1,0,1,1,0,-1],pc=[-1,-1,-1,0,1,0],mc=[0,-1,0,1,1,1],hc=new Map;function gc(e){let t=hc.get(e);return t===void 0&&(t=e.toUpperCase(),hc.set(e,t)),t}function _c(e,t,n,r){let i=e.getTile(n,r);if(!i)return null;let a=M[t];return Je(qe(t,gc(i.type)),a?.unitClass,i.hasRoad)||null}var vc=new WeakMap;function yc(e,t,n){let r=e.getUnit(t);return r?`${e.events.length}|${t}|${r.q}|${r.r}|${n}`:null}function bc(e,t,n=1/0){let r=yc(e,t,n);if(r!==null){let t=vc.get(e);if(t&&t.key===r)return t.result}let i=xc(e,t,n);return r!==null&&vc.set(e,{key:r,result:i}),i}function xc(e,t,n=1/0,r=null){let i=new Map,a=new Map,o=new Set,s=e.getUnit(t);if(!s)return{distances:i,previous:a,reachable:o};let c=e.cols,l=e.rows,u=M[s.type].terrainCosts,d=M[s.type].unitClass,f=d===`air`,p=new Set,m=s.r*c+s.q;i.set(m,0),o.add(m);let h=new Bi;for(h.enqueue(m,0);!h.isEmpty();){let t=h.dequeue();if(p.has(t))continue;p.add(t);let m=i.get(t);if(m>n||t===r)break;let g=t%c,_=(t-g)/c,v=g%2==1?mc:pc;for(let y=0;y<6;y++){let b=g+fc[y],x=_+v[y];if(b<0||b>=c||x<0||x>=l)continue;let S=x*c+b;if(p.has(S))continue;let C=S===r;if(!C&&e.getUnitAt(b,x))continue;let w=e.getBuildingAt(b,x)?.[1];if(!C&&w&&!f&&!Hi(w,s.playerIndex))continue;let T=e.getTile(b,x);if(!T)continue;let E=Je(u[gc(T.type)],d,T.hasRoad);if(!C&&!E)continue;let D=m+(C?0:E);D<(i.get(S)??1/0)&&(i.set(S,D),a.set(S,t),D<=n&&(o.add(S),h.enqueue(S,D)))}}return{distances:i,previous:a,reachable:o}}function Sc(e,t,n,r){if(!e.getUnit(t)||n<0||n>=e.cols||r<0||r>=e.rows)return null;let i=r*e.cols+n,{distances:a,previous:o}=xc(e,t,1/0,i);if(!a.has(i))return null;let s=[],c=i;for(;o.has(c);){let t=c%e.cols;s.unshift({q:t,r:(c-t)/e.cols}),c=o.get(c)}return{path:s,cost:a.get(i)}}function Cc(e,t,n,r,i=1/0){if(!e.getUnit(t)||n<0||n>=e.cols||r<0||r>=e.rows)return null;let{distances:a,previous:o,reachable:s}=bc(e,t,i),c=r*e.cols+n;if(!s.has(c))return null;let l=[],u=c;for(;o.has(u);){let t=u%e.cols;l.unshift({q:t,r:(u-t)/e.cols}),u=o.get(u)}return{path:l,cost:a.get(c)}}var wc=new WeakMap;function Tc(e,t,n,r,i){let a=e.cols,o=!e.hasTerrainOverrides,s=`${t}|${i??-1}|${e.events.length}|${r*a+n}`;if(o){let t=wc.get(e.tileIdentity)?.get(s);if(t)return t}let c=new Map,l=new Set,u=M[t].terrainCosts,d=M[t].unitClass,f=d===`air`,p=r*a+n;c.set(p,0);let m=new Bi;for(m.enqueue(p,0);!m.isEmpty();){let t=m.dequeue();if(l.has(t))continue;l.add(t);let n=t%a,r=(t-n)/a,o=c.get(t),s=n%2==1?mc:pc;for(let t=0;t<6;t++){let l=n+fc[t],p=r+s[t];if(l<0||l>=a||p<0||p>=e.rows)continue;let h=e.getBuildingAt(l,p)?.[1];if(h&&!f&&(i===void 0||!Hi(h,i)))continue;let g=e.getTile(l,p);if(!g)continue;let _=Je(u[gc(g.type)],d,g.hasRoad);if(!_)continue;let v=p*a+l,y=o+_;y<(c.get(v)??1/0)&&(c.set(v,y),m.enqueue(v,y))}}if(o){let t=wc.get(e.tileIdentity);t||(t=new Map,wc.set(e.tileIdentity,t)),t.set(s,c)}return c}function Ec(e){return!!M[e.type]?.canCapture}function Dc(e,t){let n=e.getUnit(t);if(!n)return null;let r=null,i=1/0;for(let[t,a]of e.liveBuildings()){if(a.isHeadquarters||!a.isEntrance||a.ownerIndex===n.playerIndex)continue;let e=j(n.q,n.r,a.q,a.r);e<i&&(i=e,r=t)}return r}function Oc(e,t){let n=e.getUnit(t);if(!n)return null;let r=null,i=1/0;for(let[t,a]of e.activeUnits()){if(a.playerIndex===n.playerIndex)continue;let e=j(n.q,n.r,a.q,a.r);e<i&&(i=e,r=t)}return r}function kc(e,t,n){e.record({type:`turnStarted`,playerIndex:t});for(let n=0;n<e.buildingCount;n++){let r=e.getBuilding(n);if(!r||r.destroyed||!r.isEntrance||r.ownerIndex!==t||r.productType===null||r.productionCountdown!==0)continue;let i=Mi({getTile:(t,n)=>e.getTile(t,n),isOccupied:(t,n)=>e.getUnitAt(t,n)!==null,isBuilding:(t,n)=>e.getBuildingAt(t,n)!==null},r,r.productType);i&&e.record({type:`unitProduced`,buildingIndex:n,unitIndex:e.unitCount,unitType:r.productType,q:i.q,r:i.r,playerIndex:t})}if(!e.hasFire)return;let r=we(e.fireView,e.cols,e.rows);if(r.length===0)return;for(let[n,r]of e.activeUnits()){if(r.playerIndex!==t||M[r.type]?.unitClass===`air`||!Se(e.getTile(r.q,r.r)))continue;e.record({type:`unitBurned`,unitIndex:n,damage:1});let i=e.getUnit(n);i&&i.hp<=0&&Nc(e,n,!1)}let i=Ce(e.fireView,r,n);e.record({type:`fireTicked`,ignited:i.ignited,burnedOut:i.burnedOut,aged:r})}var Ac=.5,jc=.5,Mc=488037;function Nc(e,t,n=!0){let r=e.getUnit(t);e.record({type:`unitDied`,unitIndex:t}),n&&r&&Ge(r.type)&&xe(e.getTile(r.q,r.r))&&ba(xa(Mc,t,r.q,r.r,e.events.length))()<jc&&e.record({type:`fireStarted`,q:r.q,r:r.r,casterIndex:-1});for(let[n,r]of e.liveUnits())r.carriedBy===t&&e.record({type:`unitDied`,unitIndex:n})}function Pc(e,t){let n=e.getUnit(t);if(!n)return null;let r=null,i=1/0;for(let[t,a]of e.activeUnits()){if(a.playerIndex===n.playerIndex||!N(n.type,a.type))continue;let e=j(n.q,n.r,a.q,a.r);e<i&&(i=e,r=t)}return r}function Fc(e,t){let n=e.getUnit(t);if(!n)return null;let r=null,i=1/0,a=1/0;for(let[t,o]of e.activeUnits()){if(o.playerIndex===n.playerIndex||!N(n.type,o.type))continue;let e=j(n.q,n.r,o.q,o.r);(o.hp<i||o.hp===i&&e<a)&&(i=o.hp,a=e,r=t)}return r}function Ic(e,t,n){let r=e.getUnit(t);if(n.targetIndex!==void 0){let t=e.getUnit(n.targetIndex);if(t&&t.playerIndex!==r.playerIndex)return n.targetIndex}return n.kind===`attack`||n.kind===`standoff`?Pc(e,t):Oc(e,t)}function Lc(e,t,n,r,i){Rc(e,t,n,r),e.record({type:`unitMoved`,unitIndex:t,toQ:n,toR:r,moveSpent:i});let a=e.getUnit(t);if(!a||!Ec(a))return;let o=e.getBuildingAt(n,r);o&&!o[1].isHeadquarters&&o[1].isEntrance&&o[1].ownerIndex!==a.playerIndex&&e.record({type:`buildingCaptured`,buildingIndex:o[0],playerIndex:a.playerIndex})}function Rc(e,t,n,r){if(!e.hasFire)return;let i=e.getUnit(t);if(!i)return;let a=Math.ceil(i.move/Ac),o=!1;for(let t of e.burningTiles())if(j(i.q,i.r,t.q,t.r)<=a){o=!0;break}if(!o)return;let s=Cc(e,t,n,r,i.move);if(!s)return;let c=M[i.type]?.unitClass===`air`,l=Oe(e.fireView,s.path,c);if(l<=0)return;e.record({type:`unitBurned`,unitIndex:t,damage:l});let u=e.getUnit(t);u&&u.hp<=0&&Nc(e,t,!1)}function zc(e,t,n,r,i=!1){for(let a of t.hits){e.record({type:`unitAttacked`,attackerIndex:n,defenderIndex:a.unitIndex,damage:a.damage,...r?{skillId:r}:{},...i?{isCounter:!0}:{}});let t=e.getUnit(a.unitIndex);t&&t.hp<=0&&Nc(e,a.unitIndex)}for(let n of t.impacts){if(n.craterDelta===0)continue;let t=e.getTile(n.q,n.r);e.record({type:`terrainModified`,q:n.q,r:n.r,delta:n.craterDelta});let r=e.getTile(n.q,n.r);if(t&&t.type!==`WATER`&&r&&r.type===`WATER`){let t=e.getUnitAt(n.q,n.r);t&&M[t[1].type].terrainCosts.WATER==null&&Nc(e,t[0])}}}function Bc(e,t,n={}){let r=e.getUnit(t.unitIndex);if(!r)return!1;switch(t.kind){case`idle`:return!1;case`attack`:{if(r.hasAttacked)return!1;let n=Ic(e,t.unitIndex,t);if(n===null)return!1;let i=e.getUnit(n),a=j(r.q,r.r,i.q,i.r);if(a<r.minRange||a>r.maxRange||!N(r.type,i.type))return!1;let o=wa(e,t.unitIndex,n,t.seed,t.skillId);if(!o||o.hits.length===0)return!1;zc(e,o,t.unitIndex,t.skillId);let s=e.getUnit(n),c=e.getUnit(t.unitIndex);if(s&&c){let r=j(s.q,s.r,c.q,c.r);if(r>=s.minRange&&r<=s.maxRange&&N(s.type,c.type)){let r=xa(t.seed,n,t.unitIndex,12624254),i=wa(e,n,t.unitIndex,r);i?.hits.length&&zc(e,i,n,void 0,!0)}}return!0}case`moveTowards`:case`moveAway`:{if(r.move<=0)return!1;let n=Ic(e,t.unitIndex,t);if(n===null)return!1;let i=e.getUnit(n);if(t.kind===`moveTowards`){let n=Sc(e,t.unitIndex,i.q,i.r);if(!n)return!1;let a=0,o=null;for(let t of n.path){if(t.q===i.q&&t.r===i.r)break;let n=_c(e,r.type,t.q,t.r);if(n===null||a+n>r.move)break;a+=n,o=t}return o?(Lc(e,t.unitIndex,o.q,o.r,a),!0):!1}let a=M[i.type],o=a.move+a.maxRange,s=e.cols,c=r.r*s+r.q,{distances:l,reachable:u}=bc(e,t.unitIndex,r.move),d=null,f=-1/0,p=1/0,m=j(r.q,r.r,i.q,i.r)>o;for(let e of u){if(e===c)continue;let t=e%s,n=j(t,(e-t)/s,i.q,i.r),r=l.get(e),a=n>o,u=a&&!m||a&&m&&(r<p||r===p&&n>f)||!a&&!m&&(n>f||n===f&&r<p&&d!==null);u&&(m=a),u&&(f=n,p=r,d=e)}if(d===null)return!1;let h=d%s;return Lc(e,t.unitIndex,h,(d-h)/s,p),!0}case`standoff`:{if(r.move<=0)return!1;let n=Ic(e,t.unitIndex,t);if(n===null)return!1;let i=e.getUnit(n);if(!N(r.type,i.type))return!1;let a=e.cols,o=r.r*a+r.q,{distances:s,reachable:c}=bc(e,t.unitIndex,r.move),l=null,u=-1/0,d=1/0,f=j(r.q,r.r,i.q,i.r);for(let e of c){if(e===o)continue;let t=e%a,n=j(t,(e-t)/a,i.q,i.r);if(n<r.minRange||n>r.maxRange)continue;let c=s.get(e);(n>u||n===u&&c<d)&&(u=n,d=c,l=e)}if(l===null||f===r.maxRange&&u<=f)return!1;let p=l%a;return Lc(e,t.unitIndex,p,(l-p)/a,d),!0}case`moveToBuilding`:{if(r.move<=0||!Ec(r))return!1;let n=t.buildingIndex??null;if(n!==null){let t=e.getBuilding(n);(!t||t.destroyed||t.isHeadquarters||t.ownerIndex===r.playerIndex)&&(n=null)}if(n===null&&(n=Dc(e,t.unitIndex)),n===null)return!1;let i=e.getBuilding(n),a=e.cols,o=r.r*a+r.q,{distances:s,reachable:c}=bc(e,t.unitIndex,r.move),l=null,u=j(r.q,r.r,i.q,i.r),d=1/0;for(let e of c){if(e===o)continue;let t=e%a,n=j(t,(e-t)/a,i.q,i.r),r=s.get(e);(n<u||n===u&&r<d&&l!==null)&&(u=n,d=r,l=e)}if(l===null){let t=Tc(e,r.type,i.q,i.r,r.playerIndex),n=t.get(o)??1/0;for(let e of c){if(e===o)continue;let r=t.get(e);if(r===void 0)continue;let i=s.get(e);(r<n||r===n&&i<d&&l!==null)&&(n=r,d=i,l=e)}}if(l===null)return!1;let f=l%a;return Lc(e,t.unitIndex,f,(l-f)/a,d),!0}case`moveRandom`:{if(r.move<=0)return!1;let n=e.cols,i=r.r*n+r.q,{distances:a,reachable:o}=bc(e,t.unitIndex,r.move),s=[...o].filter(e=>e!==i);if(s.length===0)return!1;let c=ba(t.seed),l=s[Math.floor(c()*s.length)],u=l%n;return Lc(e,t.unitIndex,u,(l-u)/n,a.get(l)),!0}default:{let r=n[t.kind];return r?r.apply(e,t):!1}}}function Vc(e,t,n=Uc){let r=!1,i=[...e.activeUnits()].filter(([,e])=>e.playerIndex===t&&!e.hasAttacked).map(([e])=>e);for(let a of i){let i=e.getUnit(a);if(!i||i.hasAttacked)continue;let o=-1,s=0;for(let[r,c]of e.activeUnits()){if(c.playerIndex===t)continue;let l=j(i.q,i.r,c.q,c.r);if(l<i.minRange||l>i.maxRange)continue;let u=wa(e,a,r,xa(24301,a,r));if(!u)continue;let d=0;for(let r of u.hits){let i=e.getUnit(r.unitIndex);if(!i)continue;let a=r.damage+(r.damage>=i.hp?n.killBonus:0);d+=i.playerIndex===t?-n.friendlyFirePenalty*a:a}d>s&&(s=d,o=r)}if(o>=0){let t=xa(24301,a,o);r=Bc(e,{kind:`attack`,unitIndex:a,targetIndex:o,seed:t})||r}}return r}var Hc=[[`attack`,.3],[`moveTowards`,.2],[`standoff`,.1],[`moveRandom`,.1],[`moveAway`,.1],[`moveToBuilding`,.1],[`idle`,.1]],Uc={killBonus:100,friendlyFirePenalty:1.5},Wc={weights:Hc,extras:{},focusFireChance:.5,sweep:Uc};function Gc(e,t,n,r=Wc){let i=e.getUnit(t),a=[];if(i)for(let[t,n]of e.activeUnits())n.playerIndex!==i.playerIndex&&a.push(t);let o=n(),s=`idle`;for(let[e,t]of r.weights){if(o<t){s=e;break}o-=t}s===`moveToBuilding`&&(!i||!Ec(i)||Dc(e,t)===null)&&(s=`moveTowards`),s===`standoff`&&(!i||Pc(e,t)===null)&&(s=`moveTowards`);let c=r.extras[s];c?.applicable&&!c.applicable(e,t)&&(s=c.fallback??`moveTowards`),a.length===0&&(s===`attack`||s===`moveTowards`||s===`moveAway`)&&(s=`moveRandom`);let l;if(a.length>0){let o=i?Fc(e,t):null;l=n()<r.focusFireChance&&o!==null?o:a[Math.floor(n()*a.length)]}return{kind:s,unitIndex:t,targetIndex:l,seed:Math.floor(n()*2147483647)}}var Kc={unitBase:100,hpWeight:10,armySize:3,aggression:1,buildingOwned:25,captureYield:150,buildingBlockPenalty:15,capturePull:3,vitalWorth:1500,headquartersWorth:1500};function qc(e,t,n=Kc){let r=0,i=[],a=[];for(let[,o]of e.liveUnits()){let e=(n.unitBase+o.hp*n.hpWeight)*(n.typeValue?.[o.type]??1)+(Ye(o.type)?n.vitalWorth??0:0);o.playerIndex===t?(r+=e,i.push(o)):(r-=e,a.push(o))}r+=n.armySize*(i.length*i.length-a.length*a.length);for(let e of i){let t=1/0;for(let n of a)t=Math.min(t,j(e.q,e.r,n.q,n.r));t!==1/0&&(r-=n.aggression*t)}let o=new Set;for(let[i,a]of e.liveBuildings()){if(a.isHeadquarters){let e=a.groupId??`hq#${i}`;if(o.has(e))continue;o.add(e),a.ownerIndex===t?r+=n.headquartersWorth??0:a.ownerIndex!==null&&(r-=n.headquartersWorth??0);continue}a.ownerIndex===t?r+=n.buildingOwned:a.ownerIndex!==null&&(r-=n.buildingOwned),a.yieldedTo===t?r+=n.captureYield:a.yieldedTo!==null&&(r-=n.captureYield)}for(let a of i){if(!M[a.type]?.canCapture)continue;let i=1/0;for(let[,n]of e.liveBuildings())n.isHeadquarters||!n.isEntrance||n.ownerIndex===t||(i=Math.min(i,j(a.q,a.r,n.q,n.r)));i!==1/0&&(r-=n.capturePull*i)}for(let a of i){if(M[a.type]?.canCapture)continue;let i=e.getBuildingAt(a.q,a.r);i&&!i[1].isHeadquarters&&i[1].isEntrance&&i[1].ownerIndex!==t&&(r-=n.buildingBlockPenalty)}return r}var Jc={insert:.25,remove:.2,replace:.2,swap:.2},Yc=.001,Xc=.01,Zc=.25,Qc=3,$c=2,el=6;function tl(e){let t=2654435769;for(let n of e)t=xa(t,n.kind.charCodeAt(0),n.unitIndex,n.targetIndex??-1,n.seed);return t}function nl(e,t){let n=[];for(let[r,i]of e.activeUnits())i.playerIndex===t&&n.push(r);return n}function rl(e,t){let n=[...t];for(let t=n.length-1;t>0;t--){let r=Math.floor(e()*(t+1));[n[t],n[r]]=[n[r],n[t]]}return n}function il(e,t,n,r,i){let a=nl(e,t),o=[];for(let e of a){let t=1+Math.floor(n()*r);for(let n=0;n<t;n++)o.push(e)}return rl(n,o).map(t=>Gc(e,t,n,i))}function al(e,t,n,r,i,a,o){let s=null,c=-1/0;for(let l=0;l<r;l++){let r=il(e,t,n,o,i),l=e.fork();for(let e of r)Bc(l,e,i.extras);i.sweep&&Vc(l,t,i.sweep);let u=qc(l,t,a);u>c&&(c=u,s=l)}return s??e.fork()}function*ol(e,t,n){let{population:r=24,rounds:i=4,seed:a=1,lookaheadPlies:o=2,replyCandidates:s=6,finalists:c=4,deepPlies:l=2,replyPopulation:u=8,replyRounds:d=2,score:f=Kc,dialect:p=Wc,parsimonyPenalty:m=Yc,immediateWeight:h=Xc,survivorFraction:g=Zc,initGenesPerUnit:_=Qc,replyGenesPerUnit:v=$c,maxGenesPerUnit:y=el,mutation:b=Jc}=n,x=ba(a),S={score:f,dialect:p,parsimonyPenalty:m,immediateWeight:h,survivorFraction:g,initGenesPerUnit:_,replyGenesPerUnit:v,maxGenesPerUnit:y,mutation:b},C=nl(e,t),w=[];for(let[n,r]of e.liveUnits())r.playerIndex!==t&&w.push(n);if(C.length===0)return{events:[],score:qc(e,t,f),genes:[]};let T=n.maxPlanLength??C.length*y,E=1-t,D=o>0&&w.length>0?Math.max(0,c):0,O=1+i+(D>0?D:0),k=0,ee=n=>{let r=e.fork();for(let e of n)Bc(r,e,p.extras);p.sweep&&Vc(r,t,p.sweep);let i=qc(r,t,f),c=r;if(o>0&&w.length>0){let e=ba(xa(a,tl(n)));c=r.fork();let i=E;for(let n=0;n<o;n++)kc(c,i,e),c=al(c,i,e,s,p,f,v),i=i===t?E:t}let l=qc(c,t,f);return{genes:n,branch:r,score:l,fitness:l+i*h-n.length*m}},te=e=>{let n=e.branch.fork(),r=E;for(let i=0;i<l;i++){kc(n,r,ba(xa(a,tl(e.genes),i)));let o=n.condense(),s=ll(o,r,{...S,population:u,rounds:d,seed:xa(a,tl(e.genes),i),lookaheadPlies:0});for(let e of s.events)o.record(e);n=o,r=r===t?E:t}return qc(n,t,f)},ne=()=>il(e,t,x,_,p),re=b.insert,A=re+b.remove,ie=A+b.replace,ae=ie+b.swap,oe=t=>{let n=t.map(e=>({...e})),r=x();if(r<re&&n.length<T){let t=Math.floor(x()*(n.length+1)),r=C[Math.floor(x()*C.length)];n.splice(t,0,Gc(e,r,x,p))}else if(r<A&&n.length>1)n.splice(Math.floor(x()*n.length),1);else if(r<ie&&n.length>0){let t=Math.floor(x()*n.length);n[t]=Gc(e,n[t].unitIndex,x,p)}else if(r<ae&&n.length>=2){let e=Math.floor(x()*n.length),t=Math.floor(x()*n.length);t===e&&(t=(t+1)%n.length),[n[e],n[t]]=[n[t],n[e]]}else if(n.length>0){let e=Math.floor(x()*n.length);n[e]={...n[e],seed:Math.floor(x()*2147483647),targetIndex:w.length>0?w[Math.floor(x()*w.length)]:n[e].targetIndex}}return n},se=Array.from({length:r},()=>ee(ne()));yield{done:++k,total:O,label:`search`};for(let e=0;e<i;e++){se.sort((e,t)=>t.fitness-e.fitness);let e=se.slice(0,Math.max(1,Math.floor(r*g))),t=[...e];for(;t.length<r;){let n=e[Math.floor(x()*e.length)];t.push(ee(oe(n.genes)))}se=t,yield{done:++k,total:O,label:`search`}}if(se.sort((e,t)=>t.fitness-e.fitness),D===0){let e=se[0];return{events:e.branch.events,score:e.score,genes:e.genes}}let ce=new Set,le=[];for(let e of se){let t=tl(e.genes);if(!ce.has(t)&&(ce.add(t),le.push(e),le.length>=D))break}let ue=le[0],de=-1/0;for(let e of le){let t=te(e);(t>de||t===de&&e.fitness>ue.fitness)&&(de=t,ue=e),yield{done:++k,total:O,label:`verify`}}return{events:ue.branch.events,score:de,genes:ue.genes}}function sl(e){let t=e.next();for(;!t.done;)t=e.next();return t.value}async function cl(e,t){let n=e.next();for(;!n.done;)t?.(n.value),await new Promise(e=>setTimeout(e,0)),n=e.next();return n.value}function ll(e,t,n={}){return sl(ol(e,t,n))}function ul(e){let{id:t,name:n,notes:r,options:i,planner:a,asyncPlanner:o}=e,s=(e,t,n)=>(a??ol)(e,t,{...i,seed:n});return{id:t,name:n,notes:r,options:i,planTurn:(e,t,n)=>sl(s(e,t,n)),planTurnAsync:(e,t,n,r)=>o?o(e,t,{...i,seed:n},r):cl(s(e,t,n),r),withBudget:e=>ul({id:t,name:n,notes:r,planner:a,asyncPlanner:o,options:{...i,...e}})}}var dl=ul({id:`baseline`,name:`Baseline`,notes:`The shipped AI: material and hp, quadratic army size, aggression gradient, factory pull.`,options:{population:24,rounds:4,lookaheadPlies:2,replyCandidates:6,finalists:4,deepPlies:2,replyPopulation:8,replyRounds:2,score:{unitBase:100,hpWeight:10,armySize:3,aggression:1,buildingOwned:25,captureYield:150,buildingBlockPenalty:15,capturePull:3,vitalWorth:1500,headquartersWorth:1500},dialect:{weights:[[`attack`,.3],[`moveTowards`,.2],[`standoff`,.1],[`moveRandom`,.1],[`moveAway`,.1],[`moveToBuilding`,.1],[`idle`,.1]],extras:{},focusFireChance:.5,sweep:{killBonus:100,friendlyFirePenalty:1.5}},parsimonyPenalty:.001,immediateWeight:.01,survivorFraction:.25,initGenesPerUnit:3,replyGenesPerUnit:2,maxGenesPerUnit:6,mutation:{insert:.25,remove:.2,replace:.2,swap:.2}}}),fl=`regroup`;function pl(e,t,n){let r=0;for(let i of n)r+=j(e,t,i.q,i.r);return r}function ml(e,t){let n=e.getUnit(t);if(!n)return[];let r=[];for(let[i,a]of e.liveUnits())i!==t&&a.playerIndex===n.playerIndex&&r.push({q:a.q,r:a.r});return r}var hl={applicable(e,t){return ml(e,t).length>0},apply(e,t){let n=e.getUnit(t.unitIndex);if(!n||n.move<=0)return!1;let r=ml(e,t.unitIndex);if(r.length===0)return!1;let i=e.cols,a=n.r*i+n.q,{distances:o,reachable:s}=bc(e,t.unitIndex,n.move),c=pl(n.q,n.r,r),l=1/0,u=null;for(let e of s){if(e===a)continue;let t=e%i,n=pl(t,(e-t)/i,r),s=o.get(e);(n<c||n===c&&s<l&&u!==null)&&(c=n,l=s,u=e)}if(u===null)return!1;let d=u%i;return Lc(e,t.unitIndex,d,(u-d)/i,l),!0}},gl=`screen`;function _l(e,t){let n=e.getUnit(t);if(!n)return null;let r=null;for(let[i,a]of e.liveUnits())i!==t&&a.playerIndex===n.playerIndex&&(a.maxHp>=n.maxHp||(!r||a.maxHp<r.maxHp||a.maxHp===r.maxHp&&a.hp<r.hp)&&(r=a));return r}function vl(e,t,n){let r=null,i=1/0;for(let[,a]of e.liveUnits()){if(a.playerIndex===n||!N(a.type,t.type))continue;let e=j(a.q,a.r,t.q,t.r);e<i&&(i=e,r=a)}return r}var yl={applicable(e,t){let n=e.getUnit(t);if(!n)return!1;let r=_l(e,t);return!!r&&!!vl(e,r,n.playerIndex)},apply(e,t){let n=e.getUnit(t.unitIndex);if(!n||n.move<=0)return!1;let r=_l(e,t.unitIndex);if(!r)return!1;let i=vl(e,r,n.playerIndex);if(!i)return!1;let{distances:a,reachable:o}=bc(e,t.unitIndex,n.move),s=(e,t)=>j(e,t,r.q,r.r)>1?1/0:j(e,t,i.q,i.r),c=e.cols,l=n.r*c+n.q,u=s(n.q,n.r),d=1/0,f=null;for(let e of o){if(e===l)continue;let t=e%c,n=s(t,(e-t)/c),r=a.get(e);(n<u||n===u&&r<d&&f!==null)&&(u=n,d=r,f=e)}if(f===null)return!1;let p=f%c,m=(f-p)/c;return Lc(e,t.unitIndex,p,m,d),!0}},bl=`mend`;function xl(e,t){let n=e.getUnit(t);if(!n)return null;let r=null,i=1/0;for(let[,t]of e.liveBuildings()){if(t.ownerIndex!==n.playerIndex)continue;let e=j(n.q,n.r,t.q,t.r);e<i&&(i=e,r={q:t.q,r:t.r})}return r}var Sl={applicable(e,t){let n=e.getUnit(t);return!n||n.hp>=n.maxHp?!1:xl(e,t)!==null},apply(e,t){let n=e.getUnit(t.unitIndex);if(!n||n.move<=0||n.hp>=n.maxHp)return!1;let r=xl(e,t.unitIndex);if(!r)return!1;let{distances:i,reachable:a}=bc(e,t.unitIndex,n.move),o=e.cols,s=n.r*o+n.q,c=j(n.q,n.r,r.q,r.r),l=1/0,u=null;for(let e of a){if(e===s)continue;let t=e%o,n=j(t,(e-t)/o,r.q,r.r),a=i.get(e);(n<c||n===c&&a<l&&u!==null)&&(c=n,l=a,u=e)}if(u===null)return!1;let d=u%o;return Lc(e,t.unitIndex,d,(u-d)/o,l),!0}},Cl=`sink`,wl=6/7*Math.abs(va)*4;function Tl(e){return M[e]?.attackEffect===`rocketBarrage`}function El(e,t){let n=e.getUnit(t);if(!n)return null;let r=null,i=1/0;for(let[t,a]of e.liveUnits()){if(a.playerIndex===n.playerIndex||!N(n.type,a.type)||M[a.type]?.terrainCosts.WATER!=null)continue;let o=e.getTile(a.q,a.r);!o||o.type===`WATER`||o.height>wl||o.height<i&&(i=o.height,r=[t,o.height])}return r}var Dl={applicable(e,t){let n=e.getUnit(t);return!n||!Tl(n.type)?!1:El(e,t)!==null},apply(e,t){let n=e.getUnit(t.unitIndex);if(!n||!Tl(n.type))return!1;let r=El(e,t.unitIndex);if(!r)return!1;let[i]=r,a=e.getUnit(i),o=j(n.q,n.r,a.q,a.r);if(o>=n.minRange&&o<=n.maxRange)return!n.hasAttacked&&Bc(e,{kind:`attack`,unitIndex:t.unitIndex,targetIndex:i,seed:t.seed});if(n.move<=0)return!1;let s=e.cols,c=n.r*s+n.q,{distances:l,reachable:u}=bc(e,t.unitIndex,n.move),d=null,f=-1/0,p=1/0;for(let e of u){if(e===c)continue;let t=e%s,r=j(t,(e-t)/s,a.q,a.r);if(r<n.minRange||r>n.maxRange)continue;let i=l.get(e);(r>f||r===f&&i<p)&&(f=r,p=i,d=e)}if(d===null)return!1;let m=d%s;return Lc(e,t.unitIndex,m,(d-m)/s,p),!0}},Ol=`holdDoor`;function kl(e,t){let n=e.getUnit(t);return!!n&&!!M[n.type]?.canCapture}function Al(e,t){let n=e.getUnit(t);if(!n)return null;let r=!1;for(let[,t]of e.liveUnits())if(t.playerIndex!==n.playerIndex&&M[t.type]?.canCapture){r=!0;break}if(!r)return null;let i=null,a=1/0;for(let[,t]of e.liveBuildings()){if(!t.isEntrance||e.getUnitAt(t.q,t.r))continue;let r=j(n.q,n.r,t.q,t.r);r<a&&(a=r,i={q:t.q,r:t.r})}return i}var jl={applicable(e,t){return!kl(e,t)&&Al(e,t)!==null},apply(e,t){let n=e.getUnit(t.unitIndex);if(!n||n.move<=0||kl(e,t.unitIndex))return!1;let r=Al(e,t.unitIndex);if(!r)return!1;let{distances:i,reachable:a}=bc(e,t.unitIndex,n.move),o=r.r*e.cols+r.q;return!a.has(o)||r.q===n.q&&r.r===n.r?!1:(Lc(e,t.unitIndex,r.q,r.r,i.get(o)),!0)}},Ml=`repair`;function Nl(e,t,n,r){if(n===t)return!1;let i=e.getUnit(t),a=e.getUnit(n);if(!i||!a||a.playerIndex!==i.playerIndex||a.hp>=a.maxHp||r.target.kind!==`allyUnit`)return!1;let o=r.target.classes;if(!o)return!0;let s=M[a.type]?.unitClass;return!!s&&o.includes(s)}function Pl(e,t,n){let r=null,i=0,a=1/0,o=n.effect.kind===`repair`?n.effect.hp:0;for(let[s,c]of e.liveUnits()){if(!Nl(e,t,s,n))continue;let l=Math.min(o,c.maxHp-c.hp);(l>i||l===i&&c.hp<a)&&(i=l,a=c.hp,r=s)}return r}function Fl(e,t){let n=e.getUnit(t);if(!n)return null;let r=P(n.type,Fe.id);return!r||r.effect.kind!==`repair`?null:Ae(n.cooldowns,r.id)?r:null}var Il={applicable(e,t){let n=e.getUnit(t);if(!n||n.hasAttacked)return!1;let r=Fl(e,t);return r?Pl(e,t,r)!==null:!1},apply(e,t){let n=e.getUnit(t.unitIndex);if(!n||n.hasAttacked)return!1;let r=Fl(e,t.unitIndex);if(!r||r.effect.kind!==`repair`)return!1;let i=Pl(e,t.unitIndex,r);if(i===null)return!1;let a=e.getUnit(i),o=j(n.q,n.r,a.q,a.r);if(o>=r.minRange&&o<=r.maxRange)return e.record({type:`unitRepaired`,repairerIndex:t.unitIndex,targetIndex:i,hp:Math.min(r.effect.hp,a.maxHp-a.hp),skillId:r.id}),!0;if(n.move<=0)return!1;let s=e.cols,c=n.r*s+n.q,{distances:l,reachable:u}=bc(e,t.unitIndex,n.move),d=null,f=o,p=1/0;for(let e of u){if(e===c)continue;let t=e%s,n=j(t,(e-t)/s,a.q,a.r),r=l.get(e);(n<f||n===f&&r<p&&d!==null)&&(f=n,p=r,d=e)}if(d===null)return!1;let m=d%s;return Lc(e,t.unitIndex,m,(d-m)/s,p),!0}},Ll=`load`,Rl=`unload`;function zl(e,t,n){let r=e.getUnit(t);if(!r)return null;let i=P(r.type,n);return i&&Ae(r.cooldowns,i.id)?i:null}function Bl(e,t){let n=[];for(let[r,i]of e.liveUnits())i.carriedBy===t&&n.push([r,i]);return n}function Vl(e,t){let n=e.getUnit(t);if(!n)return!1;let r=M[n.type]?.capacity??0;return r>0&&Bl(e,t).length<r}function Hl(e,t,n){let r=e.getUnit(t);if(!r)return null;let i=M[r.type]?.carries;for(let[a,o]of e.liveUnits()){if(a===t||o.carriedBy!==null||o.playerIndex!==r.playerIndex)continue;let e=M[o.type]?.unitClass;if(i&&(!e||!i.includes(e)))continue;let s=j(r.q,r.r,o.q,o.r);if(!(s<n.minRange||s>n.maxRange))return a}return null}var Ul={applicable(e,t){let n=zl(e,t,Le.id);if(!n)return!1;let r=e.getUnit(t);return!r||r.hasAttacked||!Vl(e,t)?!1:Hl(e,t,n)!==null},apply(e,t){let n=zl(e,t.unitIndex,Le.id);if(!n)return!1;let r=e.getUnit(t.unitIndex);if(!r||r.hasAttacked||!Vl(e,t.unitIndex))return!1;let i=Hl(e,t.unitIndex,n);return i!==null&&(e.record({type:`unitLoaded`,carrierIndex:t.unitIndex,passengerIndex:i,skillId:n.id}),!0)}};function Wl(e,t,n,r){let i=e.getUnit(t);if(!i)return[];let a=M[n.type]?.terrainCosts??{},o=[];for(let t of be(i.q,i.r)){let n=j(i.q,i.r,t.q,t.r);if(n<r.minRange||n>r.maxRange)continue;let s=e.getTile(t.q,t.r);!s||a[s.type]==null||e.getUnitAt(t.q,t.r)||e.getBuildingAt(t.q,t.r)||o.push([t.q,t.r])}return o}var Gl={applicable(e,t){let n=zl(e,t,Re.id);if(!n)return!1;let r=Bl(e,t);return r.length!==0&&Wl(e,t,r[0][1],n).length>0},apply(e,t){let n=zl(e,t.unitIndex,Re.id);if(!n)return!1;let r=Bl(e,t.unitIndex);if(r.length===0)return!1;let[i,a]=r[0],o=Wl(e,t.unitIndex,a,n);if(o.length===0)return!1;let s=e.getUnit(t.unitIndex),c=o[0],l=1/0;for(let[t,n]of o)for(let[,r]of e.liveUnits()){if(r.playerIndex===s.playerIndex||r.carriedBy!==null)continue;let e=j(t,n,r.q,r.r);e<l&&(l=e,c=[t,n])}return e.record({type:`unitUnloaded`,carrierIndex:t.unitIndex,passengerIndex:i,toQ:c[0],toR:c[1],skillId:n.id}),!0}},Kl=`burn`;function ql(e,t){let n=e.getUnit(t);if(!n)return null;let r=P(n.type,Ie.id);return!r||r.effect.kind!==`startFire`?null:Ae(n.cooldowns,r.id)?r:null}function Jl(e,t,n){let r=e.getUnit(t);if(!r)return null;let i=null,a=1/0;for(let t of be(r.q,r.r)){let o=j(r.q,r.r,t.q,t.r);if(!(o<n.minRange||o>n.maxRange)&&xe(e.getTile(t.q,t.r)))for(let[,n]of e.activeUnits()){if(n.playerIndex===r.playerIndex)continue;let e=j(t.q,t.r,n.q,n.r);e<a&&(a=e,i={q:t.q,r:t.r})}}return i}var Yl={applicable(e,t){let n=ql(e,t);if(!n)return!1;let r=e.getUnit(t);return!r||r.hasAttacked?!1:Jl(e,t,n)!==null},apply(e,t){let n=ql(e,t.unitIndex);if(!n)return!1;let r=e.getUnit(t.unitIndex);if(!r||r.hasAttacked)return!1;let i=Jl(e,t.unitIndex,n);return i?(e.record({type:`fireStarted`,q:i.q,r:i.r,casterIndex:t.unitIndex,skillId:n.id}),!0):!1}},Xl=`hitAndRun`,Zl={applicable(e,t){let n=e.getUnit(t);return!n||n.hasAttacked||n.move<=0?!1:Pc(e,t)!==null},apply(e,t){let n=e.getUnit(t.unitIndex);if(!n||n.hasAttacked||n.move<=0)return!1;let r=t.targetIndex??-1,i=e.getUnit(r);if(!i||i.playerIndex===n.playerIndex||!N(n.type,i.type)){let n=Pc(e,t.unitIndex);if(n===null)return!1;r=n,i=e.getUnit(n)}let a=j(n.q,n.r,i.q,i.r),o=!1;if(a<n.minRange||a>n.maxRange){let r=e.cols,a=n.r*r+n.q,{distances:s,reachable:c}=bc(e,t.unitIndex,n.move),l=null,u=-1/0,d=1/0;for(let e of c){if(e===a)continue;let t=e%r,o=j(t,(e-t)/r,i.q,i.r);if(o<n.minRange||o>n.maxRange)continue;let c=s.get(e);(o>u||o===u&&c<d)&&(u=o,d=c,l=e)}if(l===null)return!1;let f=l%r;Lc(e,t.unitIndex,f,(l-f)/r,d),o=!0}let s=Bc(e,{kind:`attack`,unitIndex:t.unitIndex,targetIndex:r,seed:t.seed}),c=Bc(e,{kind:`moveAway`,unitIndex:t.unitIndex,targetIndex:r,seed:t.seed});return o||s||c}},Ql=`shootAdvance`,$l={fallback:`idle`,applicable(e,t){let n=e.getUnit(t);if(!n||n.hasAttacked||n.minRange>1)return!1;let r=Pc(e,t);if(r===null)return!1;let i=e.getUnit(r),a=j(n.q,n.r,i.q,i.r);return a>=n.minRange&&a<=n.maxRange},apply(e,t){let n=e.getUnit(t.unitIndex);if(!n||n.hasAttacked||n.minRange>1)return!1;let r=t.targetIndex??-1,i=e.getUnit(r);if(!i||i.playerIndex===n.playerIndex||!N(n.type,i.type)){let n=Pc(e,t.unitIndex);if(n===null)return!1;r=n,i=e.getUnit(n)}let a=j(n.q,n.r,i.q,i.r);if(a<n.minRange||a>n.maxRange)return!1;let o=Bc(e,{kind:`attack`,unitIndex:t.unitIndex,targetIndex:r,seed:t.seed});if(!o)return!1;let s=Bc(e,{kind:`moveTowards`,unitIndex:t.unitIndex,targetIndex:r,seed:t.seed});return o||s}},eu=`shootBlock`,tu={fallback:`idle`,applicable(e,t){return jl.applicable?.(e,t)??!0},apply(e,t){let n=e.getUnit(t.unitIndex);if(!n)return!1;let r=!1;if(!n.hasAttacked){let i=Pc(e,t.unitIndex);if(i!==null){let a=e.getUnit(i),o=j(n.q,n.r,a.q,a.r);o>=n.minRange&&o<=n.maxRange&&N(n.type,a.type)&&(r=Bc(e,{kind:`attack`,unitIndex:t.unitIndex,targetIndex:i,seed:t.seed}))}}let i=jl.apply(e,{...t,kind:`holdDoor`});return r||i}},nu=`stormCapture`,ru={fallback:`idle`,applicable(e,t){let n=e.getUnit(t);return!n||!M[n.type]?.canCapture?!1:Dc(e,t)!==null},apply(e,t){let n=e.getUnit(t.unitIndex);if(!n||!M[n.type]?.canCapture)return!1;let r=!1;if(!n.hasAttacked){let i=Pc(e,t.unitIndex);if(i!==null){let a=e.getUnit(i),o=j(n.q,n.r,a.q,a.r);o>=n.minRange&&o<=n.maxRange&&N(n.type,a.type)&&(r=Bc(e,{kind:`attack`,unitIndex:t.unitIndex,targetIndex:i,seed:t.seed}))}}let i=Bc(e,{kind:`moveToBuilding`,unitIndex:t.unitIndex,buildingIndex:t.buildingIndex,seed:t.seed});return r||i}},iu=`useSkill`,au=[[Ml,Il],[Kl,Yl],[Ll,Ul],[Rl,Gl]];function ou(e,t){let n=[];for(let[,r]of au)(r.applicable?.(e,t)??!0)&&n.push(r);return n}var su={applicable(e,t){return ou(e,t).length>0},apply(e,t){let n=ou(e,t.unitIndex);if(n.length===0)return!1;let r=ba(xa(t.seed,t.unitIndex))();return n[Math.floor(r*n.length)].apply(e,t)},fallback:`idle`},cu={[fl]:hl,[gl]:yl,[bl]:Sl,[Cl]:Dl,[Ol]:jl,[Ml]:Il,[Ll]:Ul,[Rl]:Gl,[Kl]:Yl,[Xl]:Zl,[Ql]:$l,[eu]:tu,[nu]:ru,[iu]:su};function lu(e){let t={};for(let n of e){let e=cu[n];if(!e)throw Error(`Gene "${n}" is not in GENE_REGISTRY. A worker cannot rebuild it, so the parallel planner would search without it. Register it in genes/registry.ts.`);t[n]=e}return t}function uu(e,t,n={}){let r=n.dialect??Wc,i=n.extraKinds?{...r,extras:lu(n.extraKinds)}:r,a=n.score??Kc,o=e.fork();t.dedupe||o.disableHashing();for(let e of t.parentEvents)o.record(e);let s=o.events.length,c=t.startIndex??0,l=t.indices??Array.from({length:t.count},(e,t)=>c+t),u=[];for(let e of l){let r=o.fork(),c=ba(xa(t.seed,e));t.resetTurn&&kc(r,t.side,c);for(let e of il(r,t.side,c,t.genesPerUnit,i))Bc(r,e,i.extras);i.sweep&&Vc(r,t.side,i.sweep),u.push({index:e,events:t.meta?[]:r.events.slice(s),value:du(r,t,a,n.foresight),acted:r.events.length>s,...t.dedupe?{stateHash:r.stateHash}:{}})}let d=t.dedupe?fu(u):u;return t.keep?mu(d,t.keep):d}function du(e,t,n,r){let i=qc(e,t.scoreFor,n);if(!r||r.weight===0||!e.hasFire&&!e.hasProduction)return i;let a=e.fork(),o=ba(xa(t.seed,20727));for(let e=0;e<r.turns&&!(!a.hasFire&&!a.hasProduction);e++)kc(a,(t.side+1+e)%2,o);return i+r.weight*(qc(a,t.scoreFor,n)-i)}function fu(e){let t=new Set,n=[];for(let r of e){let e=r.stateHash??JSON.stringify(r.events);t.has(e)||(t.add(e),n.push(r))}return n}function pu(e){let t=[];for(let n=0;n<e.rows;n++)for(let r=0;r<e.cols;r++)t.push({...e.getTile(r,n)});let n=[];for(let t=0;t<e.unitCount;t++){let r=e.getUnit(t);n.push(r?{...r}:{type:`Bulwark`,q:0,r:0,playerIndex:0,hp:0,maxHp:1,move:0,attack:0,minRange:1,maxRange:1,hasAttacked:!0})}let r=[];for(let t=0;t<e.buildingCount;t++)r.push({...e.getBuilding(t)});return{cols:e.cols,rows:e.rows,tiles:t,units:n,buildings:r}}function mu(e,t){let n=t.best+t.worst+t.opponent;if(e.length<=n)return e;let r=[...e].sort((e,t)=>t.value-e.value||e.index-t.index),i=new Set;for(let e of r.slice(0,t.best))i.add(e);if(t.worst>0)for(let e of r.slice(t.best).slice(-t.worst))i.add(e);if(t.opponent>0){let e=r.filter(e=>e.acted),n=e.length>0?e:r;for(let e of n.slice(-t.opponent))i.add(e)}return[...i].sort((e,t)=>e.index-t.index)}var hu={depth:5,childCounts:[40,20,14,10,8],keepBest:4,keepWorst:2,keepOpponent:1,genesPerUnit:3};function gu(e,t){if(!t.spreadWorst)return e.slice(-t.keepWorst);let n=e.slice(Math.floor(e.length/2));if(n.length<=t.keepWorst)return n;let r=[];for(let e=1;e<=t.keepWorst;e++)r.push(n[Math.floor(e*(n.length-1)/t.keepWorst)]);return r}function*_u(e,t,n){let{seed:r=1,score:i=Kc,dialect:a=Wc,beam:o=hu}=n,s=n.beamChildCounts??o.childCounts,c=n.beamDepth??o.depth;if(![...e.liveUnits()].some(e=>e[1].playerIndex===t))return{events:[],score:qc(e,t,i),genes:[]};let l=1-t,u=e=>s[Math.min(e,s.length-1)]??1,d=[{path:[],rootEvents:[]}],f=null,p=-1/0;for(let s=0;s<c;s++){let m=s%2==0?t:l,h=m===t,g=u(s),_=d.map((c,l)=>uu(e,{parentEvents:c.path,side:m,scoreFor:t,resetTurn:s>0,count:g,seed:xa(r,s,l),genesPerUnit:o.genesPerUnit,dedupe:o.dedupeChildren,keep:o.spreadWorst?void 0:{best:o.keepBest,worst:o.keepWorst,opponent:o.keepOpponent}},{dialect:a,score:i,foresight:n.foresight}).map(e=>({node:{path:[...c.path,...e.events],rootEvents:s===0?e.events:c.rootEvents},value:e.value,index:e.index,acted:e.acted}))),v=[],y=null;for(let e of _)if(e.length!==0)if(e.sort((e,t)=>t.value-e.value||e.index-t.index),h){let t=e.slice(0,o.keepBest),n=e.slice(o.keepBest),r=o.keepWorst>0?gu(n,o):[];for(let e of[...t,...r])v.push(e.node);(!y||e[0].value>y.value)&&(y=e[0])}else{let t=e.filter(e=>e.acted),n=t.length>0?t:e;for(let e of n.slice(-o.keepOpponent))v.push(e.node),s===c-1&&(!y||e.value>y.value)&&(y=e)}if(v.length===0)break;(h||s===c-1)&&y&&(f=y.node,p=y.value),d=v,yield{done:s+1,total:c,label:s===0?`search`:`verify`}}return f?{events:f.rootEvents,score:p,genes:[]}:{events:[],score:qc(e,t,i),genes:[]}}function vu(){let e=typeof navigator<`u`&&navigator.hardwareConcurrency||4;return Math.max(1,Math.min(8,e-1))}var yu=class{constructor(e=vu()){this.workers=[],this.idle=[],this.queue=[],this.pendingById=new Map,this.workerOf=new Map,this.nextId=1,this.snapshot=null,this.parallel=this.spawn(e)}get size(){return this.workers.length}spawn(e){if(typeof Worker>`u`)return!1;try{for(let t=0;t<e;t++){let e=new Worker(new URL(``+new URL(`aiWorker-DaUMd-74.js`,import.meta.url).href,``+import.meta.url),{type:`module`});e.onmessage=t=>this.onMessage(e,t.data),e.onerror=()=>this.failAllOn(e,Error(`AI worker crashed`)),this.workers.push(e)}return this.idle=[...this.workers],this.workers.length>0}catch{for(let e of this.workers)e.terminate();return this.workers=[],this.idle=[],!1}}onMessage(e,t){if(t?.kind===`ready`)return;let n=this.pendingById.get(t?.id);n&&(this.pendingById.delete(t.id),this.workerOf.delete(t.id),this.idle.push(e),t.kind===`done`?n.resolve(t.children):n.reject(Error(t?.message??`AI worker failed`)),this.pump())}failAllOn(e,t){for(let[n,r]of[...this.workerOf])r===e&&(this.pendingById.get(n)?.reject(t),this.pendingById.delete(n),this.workerOf.delete(n))}pump(){for(;this.queue.length>0&&this.idle.length>0;){let e=this.queue.shift(),t=this.idle.pop(),n=this.nextId++;this.pendingById.set(n,e.pending),this.workerOf.set(n,t),t.postMessage({kind:`job`,id:n,job:e.job,config:e.config})}}setSnapshot(e){if(this.snapshot=e,!this.parallel)return;let t=pu(e);for(let e of this.workers)e.postMessage({kind:`snapshot`,wire:t})}async run(e,t){if(!this.snapshot)throw Error(`SimWorkerPool.run before setSnapshot`);if(!this.parallel){let n=[];for(let r of e)n.push(uu(this.snapshot,r,t)),await Promise.resolve();return n}return Promise.all(e.map(e=>new Promise((n,r)=>{this.queue.push({job:e,config:t,pending:{resolve:n,reject:r}}),this.pump()})))}dispose(){for(let e of this.workers)e.terminate();this.workers=[],this.idle=[],this.queue=[],this.pendingById.clear(),this.workerOf.clear()}},bu=null;function xu(){return bu||=new yu,bu}var Su=32,Cu=4;async function wu(e,t,n,r,i=xu()){let{seed:a=1,score:o=Kc,dialect:s=Wc,beam:c=hu}=n,l=n.beamChildCounts??c.childCounts,u=n.beamDepth??c.depth,d=!!c.spreadWorst;if(![...e.liveUnits()].some(([,e])=>e.playerIndex===t))return{events:[],score:qc(e,t,o),genes:[]};let f=1-t,p=e=>l[Math.min(e,l.length-1)]??1,m={dialect:{...s,extras:{}},extraKinds:Object.keys(s.extras),score:o,foresight:n.foresight};i.setSnapshot(e);let h=[{path:[],rootEvents:[]}],g=null;for(let e=0;e<u;e++){let n=e%2==0?t:f,o=n===t,s=p(e),l=i.parallel?Math.max(1,i.size)*Cu:1,_=Math.max(1,Math.min(Math.ceil(l/h.length),Math.ceil(s/Su))),v=Math.ceil(s/_),y=[],b=[];h.forEach((r,i)=>{for(let o=0;o<s;o+=v)y.push({parentEvents:r.path,side:n,scoreFor:t,resetTurn:e>0,count:Math.min(v,s-o),startIndex:o,seed:xa(a,e,i),genesPerUnit:c.genesPerUnit,...d?{meta:!0,dedupe:c.dedupeChildren}:{dedupe:c.dedupeChildren,keep:{best:c.keepBest,worst:c.keepWorst,opponent:c.keepOpponent}}}),b.push(i)});let x=await i.run(y,m),S=h.map(()=>[]);x.forEach((e,t)=>{S[b[t]].push(...e)});let C=[],w=[];for(let e=0;e<h.length;e++){let t=[...c.dedupeChildren?fu(S[e]):S[e]].sort((e,t)=>t.value-e.value||e.index-t.index);if(t.length===0){C.push([]),w.push(null);continue}if(o){let e=t.slice(0,c.keepBest),n=t.slice(c.keepBest),r=c.keepWorst>0?gu(n,c):[];C.push([...e,...r])}else{let e=t.filter(e=>e.acted),n=e.length>0?e:t;C.push(n.slice(-c.keepOpponent))}w.push(t[0])}if(d){let r=[],o=[];h.forEach((i,s)=>{let l=new Set(C[s].map(e=>e.index)),u=w[s];u&&l.add(u.index),l.size!==0&&(r.push({parentEvents:i.path,side:n,scoreFor:t,resetTurn:e>0,count:l.size,seed:xa(a,e,s),genesPerUnit:c.genesPerUnit,indices:[...l].sort((e,t)=>e-t)}),o.push(s))});let s=await i.run(r,m),l=h.map(()=>new Map);s.forEach((e,t)=>{for(let n of e)l[o[t]].set(n.index,n.events)});for(let e=0;e<h.length;e++){for(let t of C[e])t.events=l[e].get(t.index)??[];let t=w[e];t&&(t.events=l[e].get(t.index)??[])}}let T=[],E=null;for(let t=0;t<h.length;t++){let n=h[t],r=C[t],i=w[t];if(r.length===0&&i===null)continue;let a=t=>({path:[...n.path,...t.events],rootEvents:e===0?t.events:n.rootEvents});if(o){for(let e of r)T.push(a(e));i&&(!E||i.value>E.value)&&(E={node:a(i),value:i.value})}else for(let t of r)T.push(a(t)),e===u-1&&(!E||t.value>E.value)&&(E={node:a(t),value:t.value})}if(T.length===0)break;(o||e===u-1)&&E&&(g=E),h=T,r?.({done:e+1,total:u,label:e===0?`search`:`verify`})}return g?{events:g.node.rootEvents,score:g.value,genes:[]}:{events:[],score:qc(e,t,o),genes:[]}}var Tu=ul({id:`parthian`,name:`Parthian`,notes:`The default: a five-turn beam (run at depth 3) with spread sacrifice slots, per-type unit worth, hit-and-run and the press family.`,planner:_u,asyncPlanner:wu,options:{beam:{depth:3,childCounts:[80,60,30,20,16],keepBest:7,keepWorst:4,keepOpponent:1,genesPerUnit:3,spreadWorst:!0},foresight:{turns:20,weight:.5},score:{unitBase:100,hpWeight:10,armySize:3,aggression:1,buildingOwned:25,captureYield:150,buildingBlockPenalty:15,capturePull:3,vitalWorth:1500,headquartersWorth:1500,typeValue:{Bulwark:1,Sabre:1,Drover:.95,Lynx:.9,Halberd:1.05,Kestrel:1.25,Nightjar:1.3,Shrike:1.35,Pike:1.2,Road:1.1,Gunboat:.9,AttackBoat:1.05,Kloss:.05,Pyramid:1,Boll:1}},dialect:{weights:[[`attack`,.3],[`moveTowards`,.2],[`standoff`,.1],[`moveAway`,.1],[`moveToBuilding`,.1],[Xl,.1],[Ql,.02],[eu,.02],[nu,.02],[iu,.02],[`moveRandom`,.02]],extras:{[Xl]:Zl,[Ql]:$l,[eu]:tu,[nu]:ru,[iu]:su},focusFireChance:.5,sweep:{killBonus:100,friendlyFirePenalty:1.5}},population:24,rounds:4,lookaheadPlies:2,replyCandidates:6,finalists:4,deepPlies:2,replyPopulation:8,replyRounds:2,parsimonyPenalty:.001,immediateWeight:.01,survivorFraction:.25,initGenesPerUnit:3,replyGenesPerUnit:2,maxGenesPerUnit:6,mutation:{insert:.25,remove:.2,replace:.2,swap:.2}}});function Eu(e,t){let n=e%2==1;return[{q:e-1,r:t-+!n},{q:e,r:t-1},{q:e+1,r:t-+!n},{q:e+1,r:t+1-+!n},{q:e,r:t+1},{q:e-1,r:t+1-+!n}]}function Du(e,t,n,r){let i=t-(e-(e&1))/2,a=r-(n-(n&1))/2,o=e-n,s=i-a,c=-o-s;return Math.max(Math.abs(o),Math.abs(c),Math.abs(s))}var Ou=Eu,Z=Du;function ku(e){return!!e&&e.vegetated&&!e.burned&&e.burning===0}function Au(e){return!!e&&e.burning>0}function ju(e,t,n){let r=[],i=[],a=new Set;for(let{q:o,r:s}of t){let t=e.getTile(o,s);if(Au(t)){for(let t of Eu(o,s)){let i=`${t.q},${t.r}`;a.has(i)||ku(e.getTile(t.q,t.r))&&n()<.5&&(a.add(i),r.push({q:t.q,r:t.r}))}t.burning<=1&&i.push({q:o,r:s})}}return{ignited:r,burnedOut:i}}function Mu(e,t,n){let r=[];for(let i=0;i<t;i++)for(let t=0;t<n;t++)Au(e.getTile(i,t))&&r.push({q:i,r:t});return r}function Nu(e,t,n){let r=e.getTile(t,n);ku(r)&&e.setTile(t,n,{...r,burning:6})}function Pu(e,t,n){for(let{q:t,r}of n){let n=e.getTile(t,r);n&&n.burning>0&&e.setTile(t,r,{...n,burning:n.burning-1})}for(let{q:n,r}of t.burnedOut){let t=e.getTile(n,r);t&&e.setTile(n,r,{...t,burning:0,burned:!0})}for(let{q:n,r}of t.ignited){let t=e.getTile(n,r);ku(t)&&e.setTile(n,r,{...t,burning:6})}}function Fu(e,t,n){if(n)return 0;let r=0;for(let n of t)Au(e.getTile(n.q,n.r))&&(r+=1);return r}var Iu=Object.freeze({});function Lu(e,t){return!e||!e[t]}function Ru(e,t){return t.cooldown<=0?e??Iu:{...e??{},[t.id]:t.cooldown}}function zu(e){if(!e)return Iu;let t=Object.keys(e);if(t.length===0)return e;let n={};for(let r of t){let t=e[r]-1;t>0&&(n[r]=t)}return n}function Bu(e,t){return{id:`${e}:attack`,name:`Attack`,glyph:`⚔`,target:{kind:`enemyUnit`},minRange:t.minRange,maxRange:t.maxRange,cooldown:0,spendsAction:!0,endsMovement:!1,effect:{kind:`attack`,minDamage:t.minDamage,maxDamage:t.maxDamage,attackEffect:t.attackEffect??`projectile`}}}var Vu=[`tank`,`aa`,`artillery`,`naval`,`air`],Hu={id:`Pike:repair`,name:`Repair`,glyph:`⚒`,target:{kind:`allyUnit`,classes:Vu,onlyDamaged:!0},minRange:1,maxRange:1,cooldown:3,spendsAction:!0,endsMovement:!1,effect:{kind:`repair`,hp:3}},Uu={id:`Pike:fire`,name:`Start Fire`,glyph:`🔥`,target:{kind:`vegetatedHex`},minRange:1,maxRange:1,cooldown:3,spendsAction:!0,endsMovement:!1,effect:{kind:`startFire`,turns:6}},Wu={id:`Drover:load`,name:`Load`,glyph:`⬇`,target:{kind:`allyUnit`,classes:[`infantry`]},minRange:1,maxRange:1,cooldown:0,spendsAction:!0,endsMovement:!1,effect:{kind:`load`}},Gu={id:`Drover:unload`,name:`Unload`,glyph:`⬆`,target:{kind:`emptyHex`},minRange:1,maxRange:1,cooldown:0,spendsAction:!1,endsMovement:!1,effect:{kind:`unload`}};function Ku(e,t){return{hasAttacked:t.spendsAction?!0:e.hasAttacked,move:t.endsMovement?0:e.move,cooldowns:Ru(e.cooldowns,t)}}var Q={Road:{symbol:`E`,name:`Road`,unitClass:`infantry`,maxHp:2,hp:2,move:3,minRange:1,maxRange:2,minDamage:3,maxDamage:5,attack:4,model:`assets/droid.obj`,scale:.3,attackEffect:`laser`,footprintTexture:null,terrainCosts:{WATER:null,SAND:4,GRASS:2,CONCRETE:2,FOREST:2,MOUNTAIN:null},usePlayerColor:!0,sounds:{movement:`step1`,attack:`laser`}},Gunboat:{symbol:`O`,name:`Gunboat`,unitClass:`naval`,maxHp:10,hp:10,move:2,minRange:1,maxRange:2,minDamage:4,maxDamage:6,attack:5,model:`assets/boat1.obj`,scale:.2,rotation:0,attackEffect:`projectile`,footprintTexture:`assets/textures/tracks3.png`,terrainCosts:{WATER:1,SAND:null,GRASS:null,CONCRETE:null,FOREST:null,MOUNTAIN:null},usePlayerColor:!0,replaceColor:2242575,sounds:{movement:`battleship_movement`,attack:`rlauncher1`}},Bulwark:{symbol:`O`,name:`Bulwark`,unitClass:`tank`,maxHp:10,hp:10,move:2,minRange:1,maxRange:1,minDamage:4,maxDamage:6,attack:5,model:`assets/units/bulwark-heavy-tank.glb`,scale:.2,rotation:0,attackEffect:`cannon`,footprintTexture:`assets/textures/tracks2.png`,terrainCosts:{WATER:null,SAND:1,GRASS:1,CONCRETE:1,FOREST:2,MOUNTAIN:null},usePlayerColor:!1,teamColorMaterial:`teamCamo`,sounds:{movement:`engine_heavy`,attack:`rlauncher2`}},Kestrel:{symbol:`O`,name:`Kestrel`,unitClass:`artillery`,maxHp:3,hp:3,move:2,minRange:2,maxRange:3,minDamage:3,maxDamage:5,attack:4,model:`assets/units/kestrel-bombard-artillery.glb`,scale:.16,rotation:0,attackEffect:`rocketBarrage`,footprintTexture:`assets/textures/tracks2.png`,terrainCosts:{WATER:null,SAND:1,GRASS:1,CONCRETE:1,FOREST:2,MOUNTAIN:null},usePlayerColor:!1,teamColorMaterial:`teamCamo`,sounds:{movement:`engine_light`,attack:`rlauncher2`}},Sabre:{symbol:`O`,name:`Sabre`,unitClass:`tank`,maxHp:5,hp:5,move:3,minRange:1,maxRange:1,minDamage:4,maxDamage:6,attack:5,model:`assets/units/sabre-medium-tank.glb`,scale:.18,rotation:0,attackEffect:`cannon`,footprintTexture:`assets/textures/tracks2.png`,terrainCosts:{WATER:null,SAND:1,GRASS:1,CONCRETE:1,FOREST:2,MOUNTAIN:null},usePlayerColor:!1,teamColorMaterial:`teamCamo`,sounds:{movement:`engine_heavy`,attack:`rlauncher2`}},Pike:{symbol:`E`,name:`Pike`,unitClass:`infantry`,canCapture:!0,maxHp:4,hp:4,move:2,minRange:1,maxRange:1,minDamage:2,maxDamage:4,attack:3,model:`assets/units/infantry-squad.glb`,scale:.35,rotation:0,attackEffect:`laser`,extraSkills:[Hu,Uu],footprintTexture:null,terrainCosts:{WATER:null,SAND:1,GRASS:1,CONCRETE:1,FOREST:1,MOUNTAIN:2},usePlayerColor:!1,teamColorMaterial:`teamCamo`,sounds:{movement:`step1`,attack:`laser`}},Drover:{symbol:`A`,name:`Drover`,unitClass:`tank`,maxHp:6,hp:6,move:3,minRange:1,maxRange:1,minDamage:3,maxDamage:5,attack:4,model:`assets/units/drover-apc.glb`,scale:.22,rotation:0,attackEffect:`cannon`,capacity:1,carries:[`infantry`],extraSkills:[Wu,Gu],footprintTexture:`assets/textures/tracks2.png`,terrainCosts:{WATER:null,SAND:1,GRASS:1,CONCRETE:1,FOREST:1.5,MOUNTAIN:null},usePlayerColor:!1,teamColorMaterial:`teamCamo`,sounds:{movement:`engine_light`,attack:`rlauncher1`}},Halberd:{symbol:`H`,name:`Halberd`,unitClass:`aa`,maxHp:8,hp:8,move:3,minRange:1,maxRange:2,minDamage:4,maxDamage:6,attack:5,model:`assets/units/halberd-aa-tank.glb`,scale:.2,rotation:0,attackEffect:`projectile`,footprintTexture:`assets/textures/tracks2.png`,terrainCosts:{WATER:null,SAND:1,GRASS:1,CONCRETE:1,FOREST:2,MOUNTAIN:null},usePlayerColor:!1,teamColorMaterial:`teamCamo`,sounds:{movement:`engine_heavy`,attack:`rlauncher3`}},Lynx:{symbol:`L`,name:`Lynx`,unitClass:`tank`,maxHp:5,hp:5,move:4,minRange:1,maxRange:1,minDamage:2,maxDamage:4,attack:3,model:`assets/units/lynx-light-ifv.glb`,scale:.22,rotation:0,attackEffect:`cannon`,footprintTexture:`assets/textures/tracks2.png`,terrainCosts:{WATER:null,SAND:1,GRASS:1,CONCRETE:1,FOREST:1.5,MOUNTAIN:null},usePlayerColor:!1,teamColorMaterial:`teamCamo`,sounds:{movement:`engine_light`,attack:`rlauncher1`}},Nightjar:{symbol:`N`,name:`Nightjar`,unitClass:`air`,maxHp:6,hp:6,move:4,minRange:1,maxRange:1,minDamage:4,maxDamage:6,attack:5,model:`assets/units/nightjar-attack-helo.glb`,scale:.165,rotation:0,flightAltitude:1.2,attackEffect:`rocketVolley`,footprintTexture:null,terrainCosts:{WATER:1,SAND:1,GRASS:1,CONCRETE:1,FOREST:1,MOUNTAIN:1},usePlayerColor:!1,teamColorMaterial:`teamCamo`,sounds:{movement:`rotor`,attack:`rlauncher2`}},Shrike:{symbol:`S`,name:`Shrike`,unitClass:`air`,maxHp:4,hp:4,move:5,minRange:1,maxRange:1,minDamage:6,maxDamage:9,attack:7,model:`assets/units/shrike-attack-jet.glb`,scale:.18,rotation:0,flightAltitude:2.5,attackEffect:`projectile`,footprintTexture:null,terrainCosts:{WATER:1,SAND:1,GRASS:1,CONCRETE:1,FOREST:1,MOUNTAIN:1},usePlayerColor:!1,teamColorMaterial:`teamCamo`,sounds:{movement:`jet`,attack:`rlauncher3`}},Kloss:{symbol:`K`,name:`Kloss`,unitClass:`tank`,maxHp:99,hp:99,move:2,minRange:1,maxRange:1,minDamage:1,maxDamage:1,attack:1,model:`primitive:box`,scale:1,rotation:0,attackEffect:`cannon`,footprintTexture:`assets/textures/tracks2.png`,terrainCosts:{WATER:null,SAND:1,GRASS:1,CONCRETE:1,FOREST:1.5,MOUNTAIN:null},usePlayerColor:!0,sounds:{movement:`engine_heavy`,attack:`rlauncher2`}},Pyramid:{symbol:`A`,name:`Pyramid`,unitClass:`artillery`,vital:!0,maxHp:2,hp:2,move:2,minRange:2,maxRange:2,minDamage:4,maxDamage:6,attack:5,model:`primitive:pyramid`,scale:1,rotation:0,attackEffect:`cannon`,footprintTexture:`assets/textures/tracks2.png`,terrainCosts:{WATER:null,SAND:1,GRASS:1,CONCRETE:1,FOREST:1.5,MOUNTAIN:null},usePlayerColor:!0,sounds:{movement:`engine_heavy`,attack:`rlauncher2`}},Boll:{symbol:`B`,name:`Boll`,unitClass:`tank`,maxHp:14,hp:14,move:4,minRange:1,maxRange:1,minDamage:5,maxDamage:7,attack:6,model:`primitive:sphere`,scale:1,rotation:0,attackEffect:`cannon`,footprintTexture:`assets/textures/tracks2.png`,terrainCosts:{WATER:null,SAND:1,GRASS:1,CONCRETE:1,FOREST:1.5,MOUNTAIN:null},usePlayerColor:!0,sounds:{movement:`engine_heavy`,attack:`rlauncher2`}}},qu={aa:{air:2,tank:.5},tank:{aa:2,air:.5},air:{tank:2,aa:.5}};function Ju(e){let t=Q[e]?.unitClass;return!!t&&Vu.includes(t)}function Yu(e,t){let n=Q[e]?.unitClass;return Q[t]?.unitClass!==`air`||n!==`artillery`&&n!==`infantry`}function Xu(e,t){let n=Q[e]?.unitClass,r=Q[t]?.unitClass;return!n||!r?1:qu[n]?.[r]??1}function Zu(e){return!!Q[e]?.vital}var Qu=new Map;function $u(e){let t=Qu.get(e);if(!t){let n=Q[e];if(!n)return[];t=[Bu(e,n),...n.extraSkills??[]],Qu.set(e,t)}return t}function ed(e){return $u(e)[0]}function td(e,t){return $u(e).find(e=>e.id===t)}var nd=class{constructor(){this.heap=[]}enqueue(e,t){this.heap.push({item:e,priority:t}),this._bubbleUp(this.heap.length-1)}dequeue(){if(this.heap.length===0)return null;let e=this.heap[0],t=this.heap.pop();return this.heap.length>0&&(this.heap[0]=t,this._sinkDown(0)),e.item}isEmpty(){return this.heap.length===0}_bubbleUp(e){let t=this.heap[e];for(;e>0;){let n=Math.floor((e-1)/2),r=this.heap[n];if(t.priority>=r.priority)break;this.heap[n]=t,this.heap[e]=r,e=n}}_sinkDown(e){let t=this.heap.length,n=this.heap[e];for(;;){let r=2*e+1,i=2*e+2,a=null;if(r<t&&this.heap[r].priority<n.priority&&(a=r),i<t){let e=this.heap[i];(a===null&&e.priority<n.priority||a!==null&&e.priority<this.heap[a].priority)&&(a=i)}if(a===null)break;this.heap[e]=this.heap[a],this.heap[a]=n,e=a}}},rd=[-1,0,1,1,0,-1],id=[-1,-1,-1,0,1,0],ad=[0,-1,0,1,1,1],od=new Map;function sd(e){let t=od.get(e);return t===void 0&&(t=e.toUpperCase(),od.set(e,t)),t}var cd=new WeakMap;function ld(e,t,n){let r=e.getUnit(t);return r?`${e.events.length}|${t}|${r.q}|${r.r}|${n}`:null}function ud(e,t,n=1/0){let r=ld(e,t,n);if(r!==null){let t=cd.get(e);if(t&&t.key===r)return t.result}let i=dd(e,t,n);return r!==null&&cd.set(e,{key:r,result:i}),i}function dd(e,t,n=1/0){let r=new Map,i=new Map,a=new Set,o=e.getUnit(t);if(!o)return{distances:r,previous:i,reachable:a};let s=e.cols,c=e.rows,l=Q[o.type].terrainCosts,u=new Set,d=o.r*s+o.q;r.set(d,0),a.add(d);let f=new nd;for(f.enqueue(d,0);!f.isEmpty();){let t=f.dequeue();if(u.has(t))continue;u.add(t);let o=r.get(t);if(o>n)break;let d=t%s,p=(t-d)/s,m=d%2==1?ad:id;for(let h=0;h<6;h++){let g=d+rd[h],_=p+m[h];if(g<0||g>=s||_<0||_>=c)continue;let v=_*s+g;if(u.has(v)||e.getUnitAt(g,_))continue;let y=e.getTile(g,_);if(!y)continue;let b=y.hasRoad?.5:l[sd(y.type)];if(!b)continue;let x=o+b;x<(r.get(v)??1/0)&&(r.set(v,x),i.set(v,t),x<=n&&(a.add(v),f.enqueue(v,x)))}}return{distances:r,previous:i,reachable:a}}function fd(e,t,n,r,i=1/0){if(!e.getUnit(t)||n<0||n>=e.cols||r<0||r>=e.rows)return null;let{distances:a,previous:o,reachable:s}=ud(e,t,i),c=r*e.cols+n;if(!s.has(c))return null;let l=[],u=c;for(;o.has(u);){let t=u%e.cols;l.unshift({q:t,r:(u-t)/e.cols}),u=o.get(u)}return{path:l,cost:a.get(c)}}var pd=new WeakMap;function md(e,t,n,r){let i=e.cols,a=!e.hasTerrainOverrides,o=`${t}|${r*i+n}`;if(a){let t=pd.get(e.tileIdentity)?.get(o);if(t)return t}let s=new Map,c=new Set,l=Q[t].terrainCosts,u=r*i+n;s.set(u,0);let d=new nd;for(d.enqueue(u,0);!d.isEmpty();){let t=d.dequeue();if(c.has(t))continue;c.add(t);let n=t%i,r=(t-n)/i,a=s.get(t),o=n%2==1?ad:id;for(let t=0;t<6;t++){let c=n+rd[t],u=r+o[t];if(c<0||c>=i||u<0||u>=e.rows)continue;let f=e.getTile(c,u);if(!f)continue;let p=f.hasRoad?.5:l[sd(f.type)];if(!p)continue;let m=u*i+c,h=a+p;h<(s.get(m)??1/0)&&(s.set(m,h),d.enqueue(m,h))}}if(a){let t=pd.get(e.tileIdentity);t||(t=new Map,pd.set(e.tileIdentity,t)),t.set(o,s)}return s}var hd=-.1,gd=.25;function _d(e){let t=e>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function vd(...e){let t=2654435769;for(let n of e)t=Math.imul(t^n+2654435769,2246822507),t^=t>>>13;return t>>>0}function yd(e){let t=Q[e];return Math.round((t.minDamage+t.maxDamage)/2)}function bd(e){return e.effect.kind===`attack`?Math.round((e.effect.minDamage+e.effect.maxDamage)/2):0}function xd(e,t,n,r,i){let a=e.getUnit(t),o=e.getUnit(n);if(!a||!o)return null;let s=(i?td(a.type,i):void 0)??ed(a.type),c=Q[a.type],l=s?.effect.kind===`attack`?s.effect.attackEffect:c.attackEffect,u=s?bd(s):yd(a.type),d=[],f=[];if(!Yu(a.type,o.type))return{attackerIndex:t,defenderIndex:n,hits:d,impacts:f};if(l===`projectile`||l===`laser`||l===`cannon`){let e=Xu(a.type,o.type);d.push({unitIndex:n,damage:Math.floor(u*e)})}else if(l===`rocketBarrage`){let t=[{q:o.q,r:o.r}];for(let n of Ou(o.q,o.r))n.q>=0&&n.q<e.cols&&n.r>=0&&n.r<e.rows&&t.push({q:n.q,r:n.r});for(let n of t){let t=e.getUnitAt(n.q,n.r);if(!t)continue;let[r,i]=t;if(!Yu(a.type,i.type))continue;let s=n.q===o.q&&n.r===o.r,c=Xu(a.type,i.type);d.push({unitIndex:r,damage:Math.floor(u*(s?1:gd)*c)})}let n=_d(r);for(let e=0;e<6;e++){let e=t[Math.floor(n()*t.length)];f.push({q:e.q,r:e.r,craterDelta:hd})}}else if(l===`rocketVolley`){let e=Xu(a.type,o.type),t=Math.floor(u*e),r=Math.floor(t/4),i=t-r*4;for(let e=0;e<4;e++){let e=r+ +(i-->0);e>0&&d.push({unitIndex:n,damage:e}),f.push({q:o.q,r:o.r,craterDelta:0})}}return{attackerIndex:t,defenderIndex:n,hits:d,impacts:f}}function Sd(e){return!!Q[e.type]?.canCapture}function Cd(e,t){let n=e.getUnit(t);if(!n)return null;let r=null,i=1/0;for(let[t,a]of e.liveBuildings()){if(!a.isEntrance||a.ownerIndex===n.playerIndex)continue;let e=Z(n.q,n.r,a.q,a.r);e<i&&(i=e,r=t)}return r}function wd(e,t){let n=e.getUnit(t);if(!n)return null;let r=null,i=1/0;for(let[t,a]of e.activeUnits()){if(a.playerIndex===n.playerIndex)continue;let e=Z(n.q,n.r,a.q,a.r);e<i&&(i=e,r=t)}return r}function Td(e,t,n){e.record({type:`turnStarted`,playerIndex:t});let r=Mu(e.fireView,e.cols,e.rows);if(r.length===0)return;for(let[n,r]of e.activeUnits()){if(r.playerIndex!==t||Q[r.type]?.unitClass===`air`||!Au(e.getTile(r.q,r.r)))continue;e.record({type:`unitBurned`,unitIndex:n,damage:1});let i=e.getUnit(n);i&&i.hp<=0&&kd(e,n,!1)}let i=ju(e.fireView,r,n);e.record({type:`fireTicked`,ignited:i.ignited,burnedOut:i.burnedOut,aged:r})}var Ed=.5,Dd=.5,Od=488037;function kd(e,t,n=!0){let r=e.getUnit(t);e.record({type:`unitDied`,unitIndex:t}),n&&r&&Ju(r.type)&&ku(e.getTile(r.q,r.r))&&_d(vd(Od,t,r.q,r.r,e.events.length))()<Dd&&e.record({type:`fireStarted`,q:r.q,r:r.r,casterIndex:-1});for(let[n,r]of e.liveUnits())r.carriedBy===t&&e.record({type:`unitDied`,unitIndex:n})}function Ad(e,t){let n=e.getUnit(t);if(!n)return null;let r=null,i=1/0;for(let[t,a]of e.activeUnits()){if(a.playerIndex===n.playerIndex||!Yu(n.type,a.type))continue;let e=Z(n.q,n.r,a.q,a.r);e<i&&(i=e,r=t)}return r}function jd(e,t){let n=e.getUnit(t);if(!n)return null;let r=null,i=1/0,a=1/0;for(let[t,o]of e.activeUnits()){if(o.playerIndex===n.playerIndex||!Yu(n.type,o.type))continue;let e=Z(n.q,n.r,o.q,o.r);(o.hp<i||o.hp===i&&e<a)&&(i=o.hp,a=e,r=t)}return r}function Md(e,t,n){let r=e.getUnit(t);if(n.targetIndex!==void 0){let t=e.getUnit(n.targetIndex);if(t&&t.playerIndex!==r.playerIndex)return n.targetIndex}return n.kind===`attack`||n.kind===`standoff`?Ad(e,t):wd(e,t)}function Nd(e,t,n,r,i){Pd(e,t,n,r),e.record({type:`unitMoved`,unitIndex:t,toQ:n,toR:r,moveSpent:i});let a=e.getUnit(t);if(!a||!Sd(a))return;let o=e.getBuildingAt(n,r);o&&o[1].isEntrance&&o[1].ownerIndex!==a.playerIndex&&e.record({type:`buildingCaptured`,buildingIndex:o[0],playerIndex:a.playerIndex})}function Pd(e,t,n,r){if(!e.hasFire)return;let i=e.getUnit(t);if(!i)return;let a=Math.ceil(i.move/Ed),o=!1;for(let t of e.burningTiles())if(Z(i.q,i.r,t.q,t.r)<=a){o=!0;break}if(!o)return;let s=fd(e,t,n,r,i.move);if(!s)return;let c=Q[i.type]?.unitClass===`air`,l=Fu(e.fireView,s.path,c);if(l<=0)return;e.record({type:`unitBurned`,unitIndex:t,damage:l});let u=e.getUnit(t);u&&u.hp<=0&&kd(e,t,!1)}function Fd(e,t,n={}){let r=e.getUnit(t.unitIndex);if(!r)return!1;switch(t.kind){case`idle`:return!1;case`attack`:{if(r.hasAttacked)return!1;let n=Md(e,t.unitIndex,t);if(n===null)return!1;let i=e.getUnit(n),a=Z(r.q,r.r,i.q,i.r);if(a<r.minRange||a>r.maxRange||!Yu(r.type,i.type))return!1;let o=xd(e,t.unitIndex,n,t.seed,t.skillId);if(!o||o.hits.length===0)return!1;for(let n of o.hits){e.record({type:`unitAttacked`,attackerIndex:t.unitIndex,defenderIndex:n.unitIndex,damage:n.damage,...t.skillId?{skillId:t.skillId}:{}});let r=e.getUnit(n.unitIndex);r&&r.hp<=0&&kd(e,n.unitIndex)}for(let t of o.impacts){if(t.craterDelta===0)continue;let n=e.getTile(t.q,t.r);e.record({type:`terrainModified`,q:t.q,r:t.r,delta:t.craterDelta});let r=e.getTile(t.q,t.r);if(n&&n.type!==`WATER`&&r&&r.type===`WATER`){let n=e.getUnitAt(t.q,t.r);n&&Q[n[1].type].terrainCosts.WATER==null&&kd(e,n[0])}}return!0}case`moveTowards`:case`moveAway`:{if(r.move<=0)return!1;let n=Md(e,t.unitIndex,t);if(n===null)return!1;let i=e.getUnit(n),a=Q[i.type],o=a.move+a.maxRange,s=e.cols,c=r.r*s+r.q,{distances:l,reachable:u}=ud(e,t.unitIndex,r.move),d=null,f=t.kind===`moveTowards`?Z(r.q,r.r,i.q,i.r):-1/0,p=1/0,m=t.kind===`moveAway`&&Z(r.q,r.r,i.q,i.r)>o;for(let e of u){if(e===c)continue;let n=e%s,r=Z(n,(e-n)/s,i.q,i.r),a=l.get(e),u;if(t.kind===`moveTowards`)u=r<f||r===f&&a<p&&d!==null;else{let e=r>o;u=e&&!m||e&&m&&(a<p||a===p&&r>f)||!e&&!m&&(r>f||r===f&&a<p&&d!==null),u&&(m=e)}u&&(f=r,p=a,d=e)}if(d===null&&t.kind===`moveTowards`){let t=md(e,r.type,i.q,i.r),n=t.get(c)??1/0;for(let e of u){if(e===c)continue;let r=t.get(e);if(r===void 0)continue;let i=l.get(e);(r<n||r===n&&i<p&&d!==null)&&(n=r,p=i,d=e)}}if(d===null)return!1;let h=d%s;return Nd(e,t.unitIndex,h,(d-h)/s,p),!0}case`standoff`:{if(r.move<=0)return!1;let n=Md(e,t.unitIndex,t);if(n===null)return!1;let i=e.getUnit(n);if(!Yu(r.type,i.type))return!1;let a=e.cols,o=r.r*a+r.q,{distances:s,reachable:c}=ud(e,t.unitIndex,r.move),l=null,u=-1/0,d=1/0,f=Z(r.q,r.r,i.q,i.r);for(let e of c){if(e===o)continue;let t=e%a,n=Z(t,(e-t)/a,i.q,i.r);if(n<r.minRange||n>r.maxRange)continue;let c=s.get(e);(n>u||n===u&&c<d)&&(u=n,d=c,l=e)}if(l===null||f===r.maxRange&&u<=f)return!1;let p=l%a;return Nd(e,t.unitIndex,p,(l-p)/a,d),!0}case`moveToBuilding`:{if(r.move<=0||!Sd(r))return!1;let n=t.buildingIndex??null;if(n!==null){let t=e.getBuilding(n);(!t||t.destroyed||t.ownerIndex===r.playerIndex)&&(n=null)}if(n===null&&(n=Cd(e,t.unitIndex)),n===null)return!1;let i=e.getBuilding(n),a=e.cols,o=r.r*a+r.q,{distances:s,reachable:c}=ud(e,t.unitIndex,r.move),l=null,u=Z(r.q,r.r,i.q,i.r),d=1/0;for(let e of c){if(e===o)continue;let t=e%a,n=Z(t,(e-t)/a,i.q,i.r),r=s.get(e);(n<u||n===u&&r<d&&l!==null)&&(u=n,d=r,l=e)}if(l===null){let t=md(e,r.type,i.q,i.r),n=t.get(o)??1/0;for(let e of c){if(e===o)continue;let r=t.get(e);if(r===void 0)continue;let i=s.get(e);(r<n||r===n&&i<d&&l!==null)&&(n=r,d=i,l=e)}}if(l===null)return!1;let f=l%a;return Nd(e,t.unitIndex,f,(l-f)/a,d),!0}case`moveRandom`:{if(r.move<=0)return!1;let n=e.cols,i=r.r*n+r.q,{distances:a,reachable:o}=ud(e,t.unitIndex,r.move),s=[...o].filter(e=>e!==i);if(s.length===0)return!1;let c=_d(t.seed),l=s[Math.floor(c()*s.length)],u=l%n;return Nd(e,t.unitIndex,u,(l-u)/n,a.get(l)),!0}default:{let r=n[t.kind];return r?r.apply(e,t):!1}}}function Id(e,t,n=Rd){let r=!1,i=[...e.activeUnits()].filter(([,e])=>e.playerIndex===t&&!e.hasAttacked).map(([e])=>e);for(let a of i){let i=e.getUnit(a);if(!i||i.hasAttacked)continue;let o=-1,s=0;for(let[r,c]of e.activeUnits()){if(c.playerIndex===t)continue;let l=Z(i.q,i.r,c.q,c.r);if(l<i.minRange||l>i.maxRange)continue;let u=xd(e,a,r,vd(24301,a,r));if(!u)continue;let d=0;for(let r of u.hits){let i=e.getUnit(r.unitIndex);if(!i)continue;let a=r.damage+(r.damage>=i.hp?n.killBonus:0);d+=i.playerIndex===t?-n.friendlyFirePenalty*a:a}d>s&&(s=d,o=r)}if(o>=0){let t=vd(24301,a,o);r=Fd(e,{kind:`attack`,unitIndex:a,targetIndex:o,seed:t})||r}}return r}var Ld=[[`attack`,.3],[`moveTowards`,.2],[`standoff`,.1],[`moveRandom`,.1],[`moveAway`,.1],[`moveToBuilding`,.1],[`idle`,.1]],Rd={killBonus:100,friendlyFirePenalty:1.5},zd={weights:Ld,extras:{},focusFireChance:.5,sweep:Rd};function Bd(e,t,n,r=zd){let i=e.getUnit(t),a=[];if(i)for(let[t,n]of e.activeUnits())n.playerIndex!==i.playerIndex&&a.push(t);let o=n(),s=`idle`;for(let[e,t]of r.weights){if(o<t){s=e;break}o-=t}s===`moveToBuilding`&&(!i||!Sd(i)||Cd(e,t)===null)&&(s=`moveTowards`),s===`standoff`&&(!i||Ad(e,t)===null)&&(s=`moveTowards`);let c=r.extras[s];c?.applicable&&!c.applicable(e,t)&&(s=c.fallback??`moveTowards`),a.length===0&&(s===`attack`||s===`moveTowards`||s===`moveAway`)&&(s=`moveRandom`);let l;if(a.length>0){let o=i?jd(e,t):null;l=n()<r.focusFireChance&&o!==null?o:a[Math.floor(n()*a.length)]}return{kind:s,unitIndex:t,targetIndex:l,seed:Math.floor(n()*2147483647)}}var Vd={unitBase:100,hpWeight:10,armySize:3,aggression:1,buildingOwned:25,captureYield:150,buildingBlockPenalty:15,capturePull:3,vitalWorth:1500};function Hd(e,t,n=Vd){let r=0,i=[],a=[];for(let[,o]of e.liveUnits()){let e=(n.unitBase+o.hp*n.hpWeight)*(n.typeValue?.[o.type]??1)+(Zu(o.type)?n.vitalWorth??0:0);o.playerIndex===t?(r+=e,i.push(o)):(r-=e,a.push(o))}r+=n.armySize*(i.length*i.length-a.length*a.length);for(let e of i){let t=1/0;for(let n of a)t=Math.min(t,Z(e.q,e.r,n.q,n.r));t!==1/0&&(r-=n.aggression*t)}for(let[,i]of e.liveBuildings())i.ownerIndex===t?r+=n.buildingOwned:i.ownerIndex!==null&&(r-=n.buildingOwned),i.yieldedTo===t?r+=n.captureYield:i.yieldedTo!==null&&(r-=n.captureYield);for(let a of i){if(!Q[a.type]?.canCapture)continue;let i=1/0;for(let[,n]of e.liveBuildings())!n.isEntrance||n.ownerIndex===t||(i=Math.min(i,Z(a.q,a.r,n.q,n.r)));i!==1/0&&(r-=n.capturePull*i)}for(let a of i){if(Q[a.type]?.canCapture)continue;let i=e.getBuildingAt(a.q,a.r);i&&i[1].isEntrance&&i[1].ownerIndex!==t&&(r-=n.buildingBlockPenalty)}return r}var Ud={insert:.25,remove:.2,replace:.2,swap:.2},Wd=.001,Gd=.01,Kd=.25,qd=3,Jd=2,Yd=6;function Xd(e){let t=2654435769;for(let n of e)t=vd(t,n.kind.charCodeAt(0),n.unitIndex,n.targetIndex??-1,n.seed);return t}function Zd(e,t){let n=[];for(let[r,i]of e.activeUnits())i.playerIndex===t&&n.push(r);return n}function Qd(e,t){let n=[...t];for(let t=n.length-1;t>0;t--){let r=Math.floor(e()*(t+1));[n[t],n[r]]=[n[r],n[t]]}return n}function $d(e,t,n,r,i){let a=Zd(e,t),o=[];for(let e of a){let t=1+Math.floor(n()*r);for(let n=0;n<t;n++)o.push(e)}return Qd(n,o).map(t=>Bd(e,t,n,i))}function ef(e,t,n,r,i,a,o){let s=null,c=-1/0;for(let l=0;l<r;l++){let r=$d(e,t,n,o,i),l=e.fork();for(let e of r)Fd(l,e,i.extras);i.sweep&&Id(l,t,i.sweep);let u=Hd(l,t,a);u>c&&(c=u,s=l)}return s??e.fork()}function*tf(e,t,n){let{population:r=24,rounds:i=4,seed:a=1,lookaheadPlies:o=2,replyCandidates:s=6,finalists:c=4,deepPlies:l=2,replyPopulation:u=8,replyRounds:d=2,score:f=Vd,dialect:p=zd,parsimonyPenalty:m=Wd,immediateWeight:h=Gd,survivorFraction:g=Kd,initGenesPerUnit:_=qd,replyGenesPerUnit:v=Jd,maxGenesPerUnit:y=Yd,mutation:b=Ud}=n,x=_d(a),S={score:f,dialect:p,parsimonyPenalty:m,immediateWeight:h,survivorFraction:g,initGenesPerUnit:_,replyGenesPerUnit:v,maxGenesPerUnit:y,mutation:b},C=Zd(e,t),w=[];for(let[n,r]of e.liveUnits())r.playerIndex!==t&&w.push(n);if(C.length===0)return{events:[],score:Hd(e,t,f),genes:[]};let T=n.maxPlanLength??C.length*y,E=1-t,D=o>0&&w.length>0?Math.max(0,c):0,O=1+i+(D>0?D:0),k=0,ee=n=>{let r=e.fork();for(let e of n)Fd(r,e,p.extras);p.sweep&&Id(r,t,p.sweep);let i=Hd(r,t,f),c=r;if(o>0&&w.length>0){let e=_d(vd(a,Xd(n)));c=r.fork();let i=E;for(let n=0;n<o;n++)Td(c,i,e),c=ef(c,i,e,s,p,f,v),i=i===t?E:t}let l=Hd(c,t,f);return{genes:n,branch:r,score:l,fitness:l+i*h-n.length*m}},te=e=>{let n=e.branch.fork(),r=E;for(let i=0;i<l;i++){Td(n,r,_d(vd(a,Xd(e.genes),i)));let o=n.condense(),s=af(o,r,{...S,population:u,rounds:d,seed:vd(a,Xd(e.genes),i),lookaheadPlies:0});for(let e of s.events)o.record(e);n=o,r=r===t?E:t}return Hd(n,t,f)},ne=()=>$d(e,t,x,_,p),re=b.insert,A=re+b.remove,ie=A+b.replace,ae=ie+b.swap,oe=t=>{let n=t.map(e=>({...e})),r=x();if(r<re&&n.length<T){let t=Math.floor(x()*(n.length+1)),r=C[Math.floor(x()*C.length)];n.splice(t,0,Bd(e,r,x,p))}else if(r<A&&n.length>1)n.splice(Math.floor(x()*n.length),1);else if(r<ie&&n.length>0){let t=Math.floor(x()*n.length);n[t]=Bd(e,n[t].unitIndex,x,p)}else if(r<ae&&n.length>=2){let e=Math.floor(x()*n.length),t=Math.floor(x()*n.length);t===e&&(t=(t+1)%n.length),[n[e],n[t]]=[n[t],n[e]]}else if(n.length>0){let e=Math.floor(x()*n.length);n[e]={...n[e],seed:Math.floor(x()*2147483647),targetIndex:w.length>0?w[Math.floor(x()*w.length)]:n[e].targetIndex}}return n},se=Array.from({length:r},()=>ee(ne()));yield{done:++k,total:O,label:`search`};for(let e=0;e<i;e++){se.sort((e,t)=>t.fitness-e.fitness);let e=se.slice(0,Math.max(1,Math.floor(r*g))),t=[...e];for(;t.length<r;){let n=e[Math.floor(x()*e.length)];t.push(ee(oe(n.genes)))}se=t,yield{done:++k,total:O,label:`search`}}if(se.sort((e,t)=>t.fitness-e.fitness),D===0){let e=se[0];return{events:e.branch.events,score:e.score,genes:e.genes}}let ce=new Set,le=[];for(let e of se){let t=Xd(e.genes);if(!ce.has(t)&&(ce.add(t),le.push(e),le.length>=D))break}let ue=le[0],de=-1/0;for(let e of le){let t=te(e);(t>de||t===de&&e.fitness>ue.fitness)&&(de=t,ue=e),yield{done:++k,total:O,label:`verify`}}return{events:ue.branch.events,score:de,genes:ue.genes}}function nf(e){let t=e.next();for(;!t.done;)t=e.next();return t.value}async function rf(e,t){let n=e.next();for(;!n.done;)t?.(n.value),await new Promise(e=>setTimeout(e,0)),n=e.next();return n.value}function af(e,t,n={}){return nf(tf(e,t,n))}function of(e){let{id:t,name:n,notes:r,options:i,planner:a,asyncPlanner:o}=e,s=(e,t,n)=>(a??tf)(e,t,{...i,seed:n});return{id:t,name:n,notes:r,options:i,planTurn:(e,t,n)=>nf(s(e,t,n)),planTurnAsync:(e,t,n,r)=>o?o(e,t,{...i,seed:n},r):rf(s(e,t,n),r),withBudget:e=>of({id:t,name:n,notes:r,planner:a,asyncPlanner:o,options:{...i,...e}})}}var sf={WATER:{name:`water`,moveCost:1/0,baseHeight:0,heightVariation:0,heightModifier:1,threshold:.4,impassable:!0,material:{color:2702726,metalness:.3,roughness:.4}},SAND:{name:`sand`,moveCost:1.5,baseHeight:.7,heightVariation:.15,heightModifier:1,threshold:.45,impassable:!1,material:{color:15245949,metalness:.1,roughness:.6}},GRASS:{name:`grass`,moveCost:1,baseHeight:.9,heightVariation:.3,heightModifier:1,threshold:.6,impassable:!1,material:{color:4806183,metalness:.15,roughness:.6}},FOREST:{name:`forest`,moveCost:2,baseHeight:1.1,heightVariation:.6,heightModifier:1,threshold:.7,impassable:!1,material:{color:3288599,metalness:.1,roughness:.6}},MOUNTAIN:{name:`mountain`,moveCost:3,baseHeight:1.6,heightVariation:4.5,heightModifier:14.5,threshold:1,impassable:!0,material:{color:5197124,metalness:.1,roughness:.8}}},cf=sf;function lf(e){return cf[e]?.baseHeight??sf.GRASS.baseHeight}var uf=sf,df=new WeakMap,ff=new WeakMap;function pf(e,t){let n=ff.get(e);if(n===void 0){n=[];for(let t=0;t<e.length;t++)e[t].burning>0&&n.push(t);ff.set(e,n)}return n}(class e{static{this.FACTORY_REPAIR_HP=2}constructor(e,t,n,r,i,a,o,s,c){this.occupancy=null,this.terrainChanged=!1,this.cols=e,this.rows=t,this.baseTiles=n,this.baseUnits=r,this.baseBuildings=i,this.log=a,this.tileOverrides=o,this.unitOverrides=s,this.buildingOverrides=c}static snapshot(t){let{cols:n,rows:r}=t.map,i=Array(n*r);for(let e=0;e<n;e++)for(let a=0;a<r;a++){let r=t.map.getTile(e,a);i[a*n+e]={height:r.height,type:r.type,hasRoad:r.hasRoad,moveCost:r.moveCost,vegetated:r.vegetated??!1,burning:r.burning??0,burned:r.burned??!1}}let a=e=>{if(e==null)return null;if(typeof e==`number`)return e;let n=t.units.indexOf(e);return n>=0?n:null},o=t.units.map(e=>({type:e.type,q:e.q,r:e.r,playerIndex:e.playerIndex,hp:e.hp,maxHp:e.maxHp,move:e.move,attack:e.attack,minRange:e.minRange,maxRange:e.maxRange,hasAttacked:e.hasAttacked,cooldowns:e.cooldowns??Iu,carriedBy:a(e.carriedBy)})),s=(t.buildings??[]).map(e=>({q:e.q,r:e.r,ownerIndex:e.ownerIndex??null,hasHiddenUnit:e.hasHiddenUnit??e.hiddenUnitType!=null,yieldedTo:null,destroyed:!!e.destroyed,groupId:e.groupId??null,isEntrance:e.isEntrance??e.groupId==null}));return new e(n,r,i,o,s,[],new Map,new Map,new Map)}condense(){let t=[],n=new Map;for(let[e]of this.liveUnits())n.set(e,n.size);for(let[,e]of this.liveUnits())t.push({...e,carriedBy:e.carriedBy===null?null:n.get(e.carriedBy)??null});return e.snapshot({map:{cols:this.cols,rows:this.rows,getTile:(e,t)=>this.getTile(e,t)},units:t,buildings:this.baseBuildings.map((e,t)=>this.getBuilding(t))})}fork(){let t=new e(this.cols,this.rows,this.baseTiles,this.baseUnits,this.baseBuildings,[...this.log],new Map(this.tileOverrides),new Map(this.unitOverrides),new Map(this.buildingOverrides));return t.terrainChanged=this.terrainChanged,t}get events(){return this.log}record(e){this.apply(e),this.log.push(e)}apply(t){switch(t.type){case`unitMoved`:{for(let e=0;e<this.baseUnits.length;e++){let n=this.getUnit(e);n?.carriedBy===t.unitIndex&&this.setUnit(e,{...n,q:t.toQ,r:t.toR})}let e=this.getUnit(t.unitIndex);if(!e)return;this.setUnit(t.unitIndex,{...e,q:t.toQ,r:t.toR,move:e.move-t.moveSpent});return}case`unitAttacked`:{let e=this.getUnit(t.attackerIndex),n=this.getUnit(t.defenderIndex);if(e){let n=t.skillId?td(e.type,t.skillId):ed(e.type);this.setUnit(t.attackerIndex,{...e,...n?Ku(e,n):{hasAttacked:!0}})}n&&this.setUnit(t.defenderIndex,{...n,hp:n.hp-t.damage});return}case`unitRepaired`:{let e=this.getUnit(t.repairerIndex),n=this.getUnit(t.targetIndex);if(e){let n=td(e.type,t.skillId);this.setUnit(t.repairerIndex,{...e,...n?Ku(e,n):{hasAttacked:!0}})}n&&this.setUnit(t.targetIndex,{...n,hp:Math.min(n.maxHp,n.hp+t.hp)});return}case`unitLoaded`:{let e=this.getUnit(t.carrierIndex),n=this.getUnit(t.passengerIndex);if(e){let n=td(e.type,t.skillId);this.setUnit(t.carrierIndex,{...e,...n?Ku(e,n):{}})}n&&e&&this.setUnit(t.passengerIndex,{...n,carriedBy:t.carrierIndex,q:e.q,r:e.r,move:0});return}case`unitUnloaded`:{let e=this.getUnit(t.carrierIndex),n=this.getUnit(t.passengerIndex);if(e){let n=td(e.type,t.skillId);this.setUnit(t.carrierIndex,{...e,...n?Ku(e,n):{}})}n&&this.setUnit(t.passengerIndex,{...n,carriedBy:null,q:t.toQ,r:t.toR,move:0});return}case`unitDied`:t.unitIndex>=0&&t.unitIndex<this.baseUnits.length&&this.unitOverrides.set(t.unitIndex,null);return;case`fireStarted`:{Nu(this.fireBoard,t.q,t.r);let e=this.getUnit(t.casterIndex);if(e){let n=t.skillId?td(e.type,t.skillId):void 0;this.setUnit(t.casterIndex,{...e,...n?Ku(e,n):{hasAttacked:!0}})}return}case`fireTicked`:Pu(this.fireBoard,t,t.aged);return;case`unitBurned`:{let e=this.getUnit(t.unitIndex);e&&this.setUnit(t.unitIndex,{...e,hp:e.hp-t.damage});return}case`turnStarted`:for(let n=0;n<this.baseUnits.length;n++){let r=this.getUnit(n);if(r&&r.playerIndex===t.playerIndex&&r.carriedBy===null){let t=this.getBuildingAt(r.q,r.r),i=t&&t[1].ownerIndex===r.playerIndex?Math.min(r.maxHp,r.hp+e.FACTORY_REPAIR_HP):r.hp;this.setUnit(n,{...r,hp:i,move:Q[r.type].move,hasAttacked:!1,cooldowns:zu(r.cooldowns)})}}return;case`terrainModified`:{let e=this.getTile(t.q,t.r);if(!e||e.type===`WATER`)return;let n=Math.max(0,e.height+t.delta),r=lf(`WATER`);if(n<=r){this.setTile(t.q,t.r,{...e,type:`WATER`,height:r,moveCost:uf.WATER.moveCost});for(let e=0;e<this.baseBuildings.length;e++){let n=this.getBuilding(e);n.q===t.q&&n.r===t.r&&!n.destroyed&&this.setBuilding(e,{...n,destroyed:!0})}}else this.setTile(t.q,t.r,{...e,height:n});return}case`buildingCaptured`:{let e=this.getBuilding(t.buildingIndex);if(!e||e.destroyed)return;for(let[e,n]of this.groupOf(t.buildingIndex)){let r=n.hasHiddenUnit;this.setBuilding(e,{...n,ownerIndex:t.playerIndex,hasHiddenUnit:!1,yieldedTo:r?t.playerIndex:n.yieldedTo})}return}}}tileIndex(e,t){return e<0||e>=this.cols||t<0||t>=this.rows?null:t*this.cols+e}getTile(e,t){let n=this.tileIndex(e,t);return n===null?null:this.tileOverrides.get(n)??this.baseTiles[n]}get unitCount(){return this.baseUnits.length}getUnit(e){if(e<0||e>=this.baseUnits.length)return null;let t=this.unitOverrides.get(e);return t===void 0?this.baseUnits[e]:t}*liveUnits(){for(let e=0;e<this.baseUnits.length;e++){let t=this.getUnit(e);t&&(yield[e,t])}}*activeUnits(){for(let e of this.liveUnits())e[1].carriedBy===null&&(yield e)}getUnitAt(e,t){let n=this.occupancy;if(n===null){n=new Map;for(let[e,t]of this.liveUnits())t.carriedBy===null&&n.set(t.r*this.cols+t.q,e);this.occupancy=n}if(e<0||e>=this.cols||t<0||t>=this.rows)return null;let r=n.get(t*this.cols+e);if(r===void 0)return null;let i=this.getUnit(r);return i?[r,i]:null}get buildingCount(){return this.baseBuildings.length}getBuilding(e){return e<0||e>=this.baseBuildings.length?null:this.buildingOverrides.get(e)??this.baseBuildings[e]}*liveBuildings(){for(let e=0;e<this.baseBuildings.length;e++){let t=this.getBuilding(e);t.destroyed||(yield[e,t])}}getBuildingAt(e,t){for(let[n,r]of this.liveBuildings())if(r.q===e&&r.r===t)return[n,r];return null}*groupOf(e){let t=this.getBuilding(e);if(!(!t||t.destroyed)){if(t.groupId===null){yield[e,t];return}for(let[e,n]of this.liveBuildings())n.groupId===t.groupId&&(yield[e,n])}}*burningTiles(){for(let[e,t]of this.tileOverrides)t.burning>0&&(yield{q:e%this.cols,r:Math.floor(e/this.cols)});for(let e of pf(this.baseTiles,this.cols)){let t=this.tileOverrides.get(e);(!t||t.burning>0)&&(t||(yield{q:e%this.cols,r:Math.floor(e/this.cols)}))}}get tileIdentity(){return this.baseTiles}get hasTerrainOverrides(){return this.terrainChanged}get hasFire(){let e=df.get(this.baseTiles);if(e===void 0&&(e=this.baseTiles.some(e=>e.burning>0),df.set(this.baseTiles,e)),e)return!0;for(let e of this.tileOverrides.values())if(e.burning>0)return!0;return!1}get fireView(){return this.fireBoard}get fireBoard(){return{getTile:(e,t)=>this.getTile(e,t),setTile:(e,t,n)=>this.setTile(e,t,n)}}setTile(e,t,n){let r=this.tileIndex(e,t);if(r===null)return;let i=this.tileOverrides.get(r)??this.baseTiles[r];(i.type!==n.type||i.hasRoad!==n.hasRoad)&&(this.terrainChanged=!0),this.tileOverrides.set(r,n)}setUnit(e,t){this.unitOverrides.set(e,t),this.occupancy=null}setBuilding(e,t){this.buildingOverrides.set(e,t)}});var mf=`regroup`;function hf(e,t,n){let r=0;for(let i of n)r+=Z(e,t,i.q,i.r);return r}function gf(e,t){let n=e.getUnit(t);if(!n)return[];let r=[];for(let[i,a]of e.liveUnits())i!==t&&a.playerIndex===n.playerIndex&&r.push({q:a.q,r:a.r});return r}var _f={applicable(e,t){return gf(e,t).length>0},apply(e,t){let n=e.getUnit(t.unitIndex);if(!n||n.move<=0)return!1;let r=gf(e,t.unitIndex);if(r.length===0)return!1;let i=e.cols,a=n.r*i+n.q,{distances:o,reachable:s}=ud(e,t.unitIndex,n.move),c=hf(n.q,n.r,r),l=1/0,u=null;for(let e of s){if(e===a)continue;let t=e%i,n=hf(t,(e-t)/i,r),s=o.get(e);(n<c||n===c&&s<l&&u!==null)&&(c=n,l=s,u=e)}if(u===null)return!1;let d=u%i;return Nd(e,t.unitIndex,d,(u-d)/i,l),!0}},vf=`screen`;function yf(e,t){let n=e.getUnit(t);if(!n)return null;let r=null;for(let[i,a]of e.liveUnits())i!==t&&a.playerIndex===n.playerIndex&&(a.maxHp>=n.maxHp||(!r||a.maxHp<r.maxHp||a.maxHp===r.maxHp&&a.hp<r.hp)&&(r=a));return r}function bf(e,t,n){let r=null,i=1/0;for(let[,a]of e.liveUnits()){if(a.playerIndex===n||!Yu(a.type,t.type))continue;let e=Z(a.q,a.r,t.q,t.r);e<i&&(i=e,r=a)}return r}var xf={applicable(e,t){let n=e.getUnit(t);if(!n)return!1;let r=yf(e,t);return!!r&&!!bf(e,r,n.playerIndex)},apply(e,t){let n=e.getUnit(t.unitIndex);if(!n||n.move<=0)return!1;let r=yf(e,t.unitIndex);if(!r)return!1;let i=bf(e,r,n.playerIndex);if(!i)return!1;let{distances:a,reachable:o}=ud(e,t.unitIndex,n.move),s=(e,t)=>Z(e,t,r.q,r.r)>1?1/0:Z(e,t,i.q,i.r),c=e.cols,l=n.r*c+n.q,u=s(n.q,n.r),d=1/0,f=null;for(let e of o){if(e===l)continue;let t=e%c,n=s(t,(e-t)/c),r=a.get(e);(n<u||n===u&&r<d&&f!==null)&&(u=n,d=r,f=e)}if(f===null)return!1;let p=f%c,m=(f-p)/c;return Nd(e,t.unitIndex,p,m,d),!0}},Sf=`mend`;function Cf(e,t){let n=e.getUnit(t);if(!n)return null;let r=null,i=1/0;for(let[,t]of e.liveBuildings()){if(t.ownerIndex!==n.playerIndex)continue;let e=Z(n.q,n.r,t.q,t.r);e<i&&(i=e,r={q:t.q,r:t.r})}return r}var wf={applicable(e,t){let n=e.getUnit(t);return!n||n.hp>=n.maxHp?!1:Cf(e,t)!==null},apply(e,t){let n=e.getUnit(t.unitIndex);if(!n||n.move<=0||n.hp>=n.maxHp)return!1;let r=Cf(e,t.unitIndex);if(!r)return!1;let{distances:i,reachable:a}=ud(e,t.unitIndex,n.move),o=e.cols,s=n.r*o+n.q,c=Z(n.q,n.r,r.q,r.r),l=1/0,u=null;for(let e of a){if(e===s)continue;let t=e%o,n=Z(t,(e-t)/o,r.q,r.r),a=i.get(e);(n<c||n===c&&a<l&&u!==null)&&(c=n,l=a,u=e)}if(u===null)return!1;let d=u%o;return Nd(e,t.unitIndex,d,(u-d)/o,l),!0}},Tf=`sink`,Ef=6/7*Math.abs(hd)*4;function Df(e){return Q[e]?.attackEffect===`rocketBarrage`}function Of(e,t){let n=e.getUnit(t);if(!n)return null;let r=null,i=1/0;for(let[t,a]of e.liveUnits()){if(a.playerIndex===n.playerIndex||!Yu(n.type,a.type)||Q[a.type]?.terrainCosts.WATER!=null)continue;let o=e.getTile(a.q,a.r);!o||o.type===`WATER`||o.height>Ef||o.height<i&&(i=o.height,r=[t,o.height])}return r}var kf={applicable(e,t){let n=e.getUnit(t);return!n||!Df(n.type)?!1:Of(e,t)!==null},apply(e,t){let n=e.getUnit(t.unitIndex);if(!n||!Df(n.type))return!1;let r=Of(e,t.unitIndex);if(!r)return!1;let[i]=r,a=e.getUnit(i),o=Z(n.q,n.r,a.q,a.r);if(o>=n.minRange&&o<=n.maxRange)return!n.hasAttacked&&Fd(e,{kind:`attack`,unitIndex:t.unitIndex,targetIndex:i,seed:t.seed});if(n.move<=0)return!1;let s=e.cols,c=n.r*s+n.q,{distances:l,reachable:u}=ud(e,t.unitIndex,n.move),d=null,f=-1/0,p=1/0;for(let e of u){if(e===c)continue;let t=e%s,r=Z(t,(e-t)/s,a.q,a.r);if(r<n.minRange||r>n.maxRange)continue;let i=l.get(e);(r>f||r===f&&i<p)&&(f=r,p=i,d=e)}if(d===null)return!1;let m=d%s;return Nd(e,t.unitIndex,m,(d-m)/s,p),!0}},Af=`holdDoor`;function jf(e,t){let n=e.getUnit(t);return!!n&&!!Q[n.type]?.canCapture}function Mf(e,t){let n=e.getUnit(t);if(!n)return null;let r=!1;for(let[,t]of e.liveUnits())if(t.playerIndex!==n.playerIndex&&Q[t.type]?.canCapture){r=!0;break}if(!r)return null;let i=null,a=1/0;for(let[,t]of e.liveBuildings()){if(!t.isEntrance||e.getUnitAt(t.q,t.r))continue;let r=Z(n.q,n.r,t.q,t.r);r<a&&(a=r,i={q:t.q,r:t.r})}return i}var Nf={applicable(e,t){return!jf(e,t)&&Mf(e,t)!==null},apply(e,t){let n=e.getUnit(t.unitIndex);if(!n||n.move<=0||jf(e,t.unitIndex))return!1;let r=Mf(e,t.unitIndex);if(!r)return!1;let{distances:i,reachable:a}=ud(e,t.unitIndex,n.move),o=r.r*e.cols+r.q;return!a.has(o)||r.q===n.q&&r.r===n.r?!1:(Nd(e,t.unitIndex,r.q,r.r,i.get(o)),!0)}},Pf=`repair`;function Ff(e,t,n,r){if(n===t)return!1;let i=e.getUnit(t),a=e.getUnit(n);if(!i||!a||a.playerIndex!==i.playerIndex||a.hp>=a.maxHp||r.target.kind!==`allyUnit`)return!1;let o=r.target.classes;if(!o)return!0;let s=Q[a.type]?.unitClass;return!!s&&o.includes(s)}function If(e,t,n){let r=null,i=0,a=1/0,o=n.effect.kind===`repair`?n.effect.hp:0;for(let[s,c]of e.liveUnits()){if(!Ff(e,t,s,n))continue;let l=Math.min(o,c.maxHp-c.hp);(l>i||l===i&&c.hp<a)&&(i=l,a=c.hp,r=s)}return r}function Lf(e,t){let n=e.getUnit(t);if(!n)return null;let r=td(n.type,Hu.id);return!r||r.effect.kind!==`repair`?null:Lu(n.cooldowns,r.id)?r:null}var Rf={applicable(e,t){let n=e.getUnit(t);if(!n||n.hasAttacked)return!1;let r=Lf(e,t);return r?If(e,t,r)!==null:!1},apply(e,t){let n=e.getUnit(t.unitIndex);if(!n||n.hasAttacked)return!1;let r=Lf(e,t.unitIndex);if(!r||r.effect.kind!==`repair`)return!1;let i=If(e,t.unitIndex,r);if(i===null)return!1;let a=e.getUnit(i),o=Z(n.q,n.r,a.q,a.r);if(o>=r.minRange&&o<=r.maxRange)return e.record({type:`unitRepaired`,repairerIndex:t.unitIndex,targetIndex:i,hp:Math.min(r.effect.hp,a.maxHp-a.hp),skillId:r.id}),!0;if(n.move<=0)return!1;let s=e.cols,c=n.r*s+n.q,{distances:l,reachable:u}=ud(e,t.unitIndex,n.move),d=null,f=o,p=1/0;for(let e of u){if(e===c)continue;let t=e%s,n=Z(t,(e-t)/s,a.q,a.r),r=l.get(e);(n<f||n===f&&r<p&&d!==null)&&(f=n,p=r,d=e)}if(d===null)return!1;let m=d%s;return Nd(e,t.unitIndex,m,(d-m)/s,p),!0}},zf=`load`,Bf=`unload`;function Vf(e,t,n){let r=e.getUnit(t);if(!r)return null;let i=td(r.type,n);return i&&Lu(r.cooldowns,i.id)?i:null}function Hf(e,t){let n=[];for(let[r,i]of e.liveUnits())i.carriedBy===t&&n.push([r,i]);return n}function Uf(e,t){let n=e.getUnit(t);if(!n)return!1;let r=Q[n.type]?.capacity??0;return r>0&&Hf(e,t).length<r}function Wf(e,t,n){let r=e.getUnit(t);if(!r)return null;let i=Q[r.type]?.carries;for(let[a,o]of e.liveUnits()){if(a===t||o.carriedBy!==null||o.playerIndex!==r.playerIndex)continue;let e=Q[o.type]?.unitClass;if(i&&(!e||!i.includes(e)))continue;let s=Z(r.q,r.r,o.q,o.r);if(!(s<n.minRange||s>n.maxRange))return a}return null}var Gf={applicable(e,t){let n=Vf(e,t,Wu.id);if(!n)return!1;let r=e.getUnit(t);return!r||r.hasAttacked||!Uf(e,t)?!1:Wf(e,t,n)!==null},apply(e,t){let n=Vf(e,t.unitIndex,Wu.id);if(!n)return!1;let r=e.getUnit(t.unitIndex);if(!r||r.hasAttacked||!Uf(e,t.unitIndex))return!1;let i=Wf(e,t.unitIndex,n);return i!==null&&(e.record({type:`unitLoaded`,carrierIndex:t.unitIndex,passengerIndex:i,skillId:n.id}),!0)}};function Kf(e,t,n,r){let i=e.getUnit(t);if(!i)return[];let a=Q[n.type]?.terrainCosts??{},o=[];for(let t of Ou(i.q,i.r)){let n=Z(i.q,i.r,t.q,t.r);if(n<r.minRange||n>r.maxRange)continue;let s=e.getTile(t.q,t.r);!s||a[s.type]==null||e.getUnitAt(t.q,t.r)||e.getBuildingAt(t.q,t.r)||o.push([t.q,t.r])}return o}var qf={applicable(e,t){let n=Vf(e,t,Gu.id);if(!n)return!1;let r=Hf(e,t);return r.length!==0&&Kf(e,t,r[0][1],n).length>0},apply(e,t){let n=Vf(e,t.unitIndex,Gu.id);if(!n)return!1;let r=Hf(e,t.unitIndex);if(r.length===0)return!1;let[i,a]=r[0],o=Kf(e,t.unitIndex,a,n);if(o.length===0)return!1;let s=e.getUnit(t.unitIndex),c=o[0],l=1/0;for(let[t,n]of o)for(let[,r]of e.liveUnits()){if(r.playerIndex===s.playerIndex||r.carriedBy!==null)continue;let e=Z(t,n,r.q,r.r);e<l&&(l=e,c=[t,n])}return e.record({type:`unitUnloaded`,carrierIndex:t.unitIndex,passengerIndex:i,toQ:c[0],toR:c[1],skillId:n.id}),!0}},Jf=`burn`;function Yf(e,t){let n=e.getUnit(t);if(!n)return null;let r=td(n.type,Uu.id);return!r||r.effect.kind!==`startFire`?null:Lu(n.cooldowns,r.id)?r:null}function Xf(e,t,n){let r=e.getUnit(t);if(!r)return null;let i=null,a=1/0;for(let t of Ou(r.q,r.r)){let o=Z(r.q,r.r,t.q,t.r);if(!(o<n.minRange||o>n.maxRange)&&ku(e.getTile(t.q,t.r)))for(let[,n]of e.activeUnits()){if(n.playerIndex===r.playerIndex)continue;let e=Z(t.q,t.r,n.q,n.r);e<a&&(a=e,i={q:t.q,r:t.r})}}return i}var Zf={applicable(e,t){let n=Yf(e,t);if(!n)return!1;let r=e.getUnit(t);return!r||r.hasAttacked?!1:Xf(e,t,n)!==null},apply(e,t){let n=Yf(e,t.unitIndex);if(!n)return!1;let r=e.getUnit(t.unitIndex);if(!r||r.hasAttacked)return!1;let i=Xf(e,t.unitIndex,n);return i?(e.record({type:`fireStarted`,q:i.q,r:i.r,casterIndex:t.unitIndex,skillId:n.id}),!0):!1}},Qf=`hitAndRun`,$f={applicable(e,t){let n=e.getUnit(t);return!n||n.hasAttacked||n.move<=0?!1:Ad(e,t)!==null},apply(e,t){let n=e.getUnit(t.unitIndex);if(!n||n.hasAttacked||n.move<=0)return!1;let r=t.targetIndex??-1,i=e.getUnit(r);if(!i||i.playerIndex===n.playerIndex||!Yu(n.type,i.type)){let n=Ad(e,t.unitIndex);if(n===null)return!1;r=n,i=e.getUnit(n)}let a=Z(n.q,n.r,i.q,i.r),o=!1;if(a<n.minRange||a>n.maxRange){let r=e.cols,a=n.r*r+n.q,{distances:s,reachable:c}=ud(e,t.unitIndex,n.move),l=null,u=-1/0,d=1/0;for(let e of c){if(e===a)continue;let t=e%r,o=Z(t,(e-t)/r,i.q,i.r);if(o<n.minRange||o>n.maxRange)continue;let c=s.get(e);(o>u||o===u&&c<d)&&(u=o,d=c,l=e)}if(l===null)return!1;let f=l%r;Nd(e,t.unitIndex,f,(l-f)/r,d),o=!0}let s=Fd(e,{kind:`attack`,unitIndex:t.unitIndex,targetIndex:r,seed:t.seed}),c=Fd(e,{kind:`moveAway`,unitIndex:t.unitIndex,targetIndex:r,seed:t.seed});return o||s||c}},ep=`shootAdvance`,tp={fallback:`idle`,applicable(e,t){let n=e.getUnit(t);if(!n||n.hasAttacked||n.minRange>1)return!1;let r=Ad(e,t);if(r===null)return!1;let i=e.getUnit(r),a=Z(n.q,n.r,i.q,i.r);return a>=n.minRange&&a<=n.maxRange},apply(e,t){let n=e.getUnit(t.unitIndex);if(!n||n.hasAttacked||n.minRange>1)return!1;let r=t.targetIndex??-1,i=e.getUnit(r);if(!i||i.playerIndex===n.playerIndex||!Yu(n.type,i.type)){let n=Ad(e,t.unitIndex);if(n===null)return!1;r=n,i=e.getUnit(n)}let a=Z(n.q,n.r,i.q,i.r);if(a<n.minRange||a>n.maxRange)return!1;let o=Fd(e,{kind:`attack`,unitIndex:t.unitIndex,targetIndex:r,seed:t.seed});if(!o)return!1;let s=Fd(e,{kind:`moveTowards`,unitIndex:t.unitIndex,targetIndex:r,seed:t.seed});return o||s}},np=`shootBlock`,rp={fallback:`idle`,applicable(e,t){return Nf.applicable?.(e,t)??!0},apply(e,t){let n=e.getUnit(t.unitIndex);if(!n)return!1;let r=!1;if(!n.hasAttacked){let i=Ad(e,t.unitIndex);if(i!==null){let a=e.getUnit(i),o=Z(n.q,n.r,a.q,a.r);o>=n.minRange&&o<=n.maxRange&&Yu(n.type,a.type)&&(r=Fd(e,{kind:`attack`,unitIndex:t.unitIndex,targetIndex:i,seed:t.seed}))}}let i=Nf.apply(e,{...t,kind:`holdDoor`});return r||i}},ip=`stormCapture`,ap={fallback:`idle`,applicable(e,t){let n=e.getUnit(t);return!n||!Q[n.type]?.canCapture?!1:Cd(e,t)!==null},apply(e,t){let n=e.getUnit(t.unitIndex);if(!n||!Q[n.type]?.canCapture)return!1;let r=!1;if(!n.hasAttacked){let i=Ad(e,t.unitIndex);if(i!==null){let a=e.getUnit(i),o=Z(n.q,n.r,a.q,a.r);o>=n.minRange&&o<=n.maxRange&&Yu(n.type,a.type)&&(r=Fd(e,{kind:`attack`,unitIndex:t.unitIndex,targetIndex:i,seed:t.seed}))}}let i=Fd(e,{kind:`moveToBuilding`,unitIndex:t.unitIndex,buildingIndex:t.buildingIndex,seed:t.seed});return r||i}},op=`blockade`,sp=8,cp=1/0,lp=6,up=3;function dp(e,t){let n=e.getUnit(t);if(!n)return null;let r=null;for(let[i,a]of e.activeUnits())i!==t&&a.playerIndex===n.playerIndex&&(!r||a.hp<r[1].hp)&&(r=[i,a]);return r}function fp(e,t){let n=[];for(let[r,i]of e.activeUnits())i.playerIndex!==t.playerIndex&&Yu(i.type,t.type)&&n.push([r,i,Z(i.q,i.r,t.q,t.r)]);return n.sort((e,t)=>e[2]-t[2]||e[0]-t[0]),n.slice(0,up).map(([e,t])=>[e,t])}function pp(e,t,n,r,i,a){let o=e.cols,s=e.rows,c=Q[t.type].terrainCosts,l=(e,r)=>{let i=Z(e,r,n.q,n.r);return i>=t.minRange&&i<=t.maxRange},u=t.r*o+t.q;if(l(t.q,t.r))return 0;let d=new Map([[u,0]]),f=[u];for(;f.length>0;){let t=0;for(let e=1;e<f.length;e++)d.get(f[e])<d.get(f[t])&&(t=e);let n=f.splice(t,1)[0],u=d.get(n);if(u>a)return cp;let p=n%o,m=(n-p)/o;for(let t of Ou(p,m)){if(t.q<0||t.q>=o||t.r<0||t.r>=s)continue;let n=t.r*o+t.q;if(n===r)continue;let a=e.getUnitAt(t.q,t.r);if(a&&a[0]!==i)continue;let p=e.getTile(t.q,t.r);if(!p)continue;let m=p.hasRoad?.5:c[p.type]||null;if(!m)continue;let h=u+m;if(!(h>=(d.get(n)??1/0))){if(l(t.q,t.r))return h;d.set(n,h),f.push(n)}}}return cp}function mp(e,t,n,r,i,a){let o=cp;for(let[,s]of t){let t=pp(e,s,n,r,i,a);if(t<o&&(o=t),o===0)break}return o}var hp={fallback:`idle`,applicable(e,t){if(!e.getUnit(t))return!1;let n=dp(e,t);return n?fp(e,n[1]).length>0:!1},apply(e,t){let n=e.getUnit(t.unitIndex);if(!n)return!1;let r=dp(e,t.unitIndex);if(!r)return!1;let i=r[1],a=fp(e,i);if(a.length===0)return!1;let o=e.cols,s=n.r*o+n.q,c=mp(e,a,i,null,-1,999);if(c===0)return!1;let l=Math.min(999,c+sp),[,u]=a[0],d=md(e,u.type,u.q,u.r),f=md(e,u.type,i.q,i.r),p=d.get(i.r*o+i.q),m=[];if(n.move>0&&p!==void 0){let{reachable:r}=ud(e,t.unitIndex,n.move);for(let e of r){if(e===s)continue;let t=d.get(e),n=f.get(e);t!==void 0&&n!==void 0&&t+n<=p+2&&m.push([e,t+n])}m.sort((e,t)=>e[1]-t[1]||e[0]-t[0]),m.length=Math.min(m.length,lp)}let h=t=>{let r=t%o,i=(t-r)/o,a=0;for(let t of Ou(r,i)){if(t.q<0||t.q>=o||t.r<0||t.r>=g)continue;let r=e.getTile(t.q,t.r);if(!r)continue;let i=Q[n.type].terrainCosts;(r.hasRoad||i[r.type])&&a++}return a},g=e.rows,_=s,v=mp(e,a,i,s,t.unitIndex,l);for(let[n]of m){let r=mp(e,a,i,n,t.unitIndex,l);(r>v||r===v&&r===cp&&(f.get(n)??1/0)<(f.get(_)??1/0)||r===v&&r!==cp&&h(n)<h(_))&&(v=r,_=n)}if(_===s)return!1;let{distances:y}=ud(e,t.unitIndex,n.move),b=y.get(_);if(b===void 0)return!1;let x=_%o;return Nd(e,t.unitIndex,x,(_-x)/o,b),!0}},gp={[mf]:_f,[vf]:xf,[Sf]:wf,[Tf]:kf,[Af]:Nf,[Pf]:Rf,[zf]:Gf,[Bf]:qf,[Jf]:Zf,[Qf]:$f,[ep]:tp,[np]:rp,[ip]:ap,[op]:hp};function _p(e){let t={};for(let n of e){let e=gp[n];if(!e)throw Error(`Gene "${n}" is not in GENE_REGISTRY. A worker cannot rebuild it, so the parallel planner would search without it. Register it in genes/registry.ts.`);t[n]=e}return t}function vp(e,t,n={}){let r=n.dialect??zd,i=n.extraKinds?{...r,extras:_p(n.extraKinds)}:r,a=n.score??Vd,o=e.fork();for(let e of t.parentEvents)o.record(e);let s=o.events.length;if(t.dedupe&&t.meta)throw Error(`SimJob.dedupe and SimJob.meta are mutually exclusive`);let c=t.startIndex??0,l=t.indices??Array.from({length:t.count},(e,t)=>c+t),u=[];for(let e of l){let n=o.fork(),r=_d(vd(t.seed,e));t.resetTurn&&Td(n,t.side,r);for(let e of $d(n,t.side,r,t.genesPerUnit,i))Fd(n,e,i.extras);i.sweep&&Id(n,t.side,i.sweep),u.push({index:e,events:t.meta?[]:n.events.slice(s),value:Hd(n,t.scoreFor,a),acted:n.events.length>s})}let d=t.dedupe?yp(u):u;return t.keep?xp(d,t.keep):d}function yp(e){let t=new Set,n=[];for(let r of e){let e=JSON.stringify(r.events);t.has(e)||(t.add(e),n.push(r))}return n}function bp(e){let t=[];for(let n=0;n<e.rows;n++)for(let r=0;r<e.cols;r++)t.push({...e.getTile(r,n)});let n=[];for(let t=0;t<e.unitCount;t++){let r=e.getUnit(t);n.push(r?{...r}:{type:`Bulwark`,q:0,r:0,playerIndex:0,hp:0,maxHp:1,move:0,attack:0,minRange:1,maxRange:1,hasAttacked:!0})}let r=[];for(let t=0;t<e.buildingCount;t++)r.push({...e.getBuilding(t)});return{cols:e.cols,rows:e.rows,tiles:t,units:n,buildings:r}}function xp(e,t){let n=t.best+t.worst+t.opponent;if(e.length<=n)return e;let r=[...e].sort((e,t)=>t.value-e.value||e.index-t.index),i=new Set;for(let e of r.slice(0,t.best))i.add(e);if(t.worst>0)for(let e of r.slice(t.best).slice(-t.worst))i.add(e);if(t.opponent>0){let e=r.filter(e=>e.acted),n=e.length>0?e:r;for(let e of n.slice(-t.opponent))i.add(e)}return[...i].sort((e,t)=>e.index-t.index)}var Sp={depth:5,childCounts:[40,20,14,10,8],keepBest:4,keepWorst:2,keepOpponent:1,genesPerUnit:3};function Cp(e,t){if(!t.spreadWorst)return e.slice(-t.keepWorst);let n=e.slice(Math.floor(e.length/2));if(n.length<=t.keepWorst)return n;let r=[];for(let e=1;e<=t.keepWorst;e++)r.push(n[Math.floor(e*(n.length-1)/t.keepWorst)]);return r}function*wp(e,t,n){let{seed:r=1,score:i=Vd,dialect:a=zd,beam:o=Sp}=n,s=n.beamChildCounts??o.childCounts,c=n.beamDepth??o.depth;if(o.dedupeChildren&&o.spreadWorst)throw Error(`beam.dedupeChildren and beam.spreadWorst are mutually exclusive`);if(![...e.liveUnits()].some(e=>e[1].playerIndex===t))return{events:[],score:Hd(e,t,i),genes:[]};let l=1-t,u=e=>s[Math.min(e,s.length-1)]??1,d=[{path:[],rootEvents:[]}],f=null,p=-1/0;for(let n=0;n<c;n++){let s=n%2==0?t:l,m=s===t,h=u(n),g=d.map((c,l)=>vp(e,{parentEvents:c.path,side:s,scoreFor:t,resetTurn:n>0,count:h,seed:vd(r,n,l),genesPerUnit:o.genesPerUnit,dedupe:o.dedupeChildren,keep:o.spreadWorst?void 0:{best:o.keepBest,worst:o.keepWorst,opponent:o.keepOpponent}},{dialect:a,score:i}).map(e=>({node:{path:[...c.path,...e.events],rootEvents:n===0?e.events:c.rootEvents},value:e.value,index:e.index,acted:e.acted}))),_=[],v=null;for(let e of g)if(e.length!==0)if(e.sort((e,t)=>t.value-e.value||e.index-t.index),m){let t=e.slice(0,o.keepBest),n=e.slice(o.keepBest),r=o.keepWorst>0?Cp(n,o):[];for(let e of[...t,...r])_.push(e.node);(!v||e[0].value>v.value)&&(v=e[0])}else{let t=e.filter(e=>e.acted),r=t.length>0?t:e;for(let e of r.slice(-o.keepOpponent))_.push(e.node),n===c-1&&(!v||e.value>v.value)&&(v=e)}if(_.length===0)break;(m||n===c-1)&&v&&(f=v.node,p=v.value),d=_,yield{done:n+1,total:c,label:n===0?`search`:`verify`}}return f?{events:f.rootEvents,score:p,genes:[]}:{events:[],score:Hd(e,t,i),genes:[]}}function Tp(){let e=typeof navigator<`u`&&navigator.hardwareConcurrency||4;return Math.max(1,Math.min(8,e-1))}var Ep=class{constructor(e=Tp()){this.workers=[],this.idle=[],this.queue=[],this.pendingById=new Map,this.workerOf=new Map,this.nextId=1,this.snapshot=null,this.parallel=this.spawn(e)}get size(){return this.workers.length}spawn(e){if(typeof Worker>`u`)return!1;try{for(let t=0;t<e;t++){let e=new Worker(new URL(``+new URL(`aiWorker-BRcVeN9t.js`,import.meta.url).href,``+import.meta.url),{type:`module`});e.onmessage=t=>this.onMessage(e,t.data),e.onerror=()=>this.failAllOn(e,Error(`AI worker crashed`)),this.workers.push(e)}return this.idle=[...this.workers],this.workers.length>0}catch{for(let e of this.workers)e.terminate();return this.workers=[],this.idle=[],!1}}onMessage(e,t){if(t?.kind===`ready`)return;let n=this.pendingById.get(t?.id);n&&(this.pendingById.delete(t.id),this.workerOf.delete(t.id),this.idle.push(e),t.kind===`done`?n.resolve(t.children):n.reject(Error(t?.message??`AI worker failed`)),this.pump())}failAllOn(e,t){for(let[n,r]of[...this.workerOf])r===e&&(this.pendingById.get(n)?.reject(t),this.pendingById.delete(n),this.workerOf.delete(n))}pump(){for(;this.queue.length>0&&this.idle.length>0;){let e=this.queue.shift(),t=this.idle.pop(),n=this.nextId++;this.pendingById.set(n,e.pending),this.workerOf.set(n,t),t.postMessage({kind:`job`,id:n,job:e.job,config:e.config})}}setSnapshot(e){if(this.snapshot=e,!this.parallel)return;let t=bp(e);for(let e of this.workers)e.postMessage({kind:`snapshot`,wire:t})}async run(e,t){if(!this.snapshot)throw Error(`SimWorkerPool.run before setSnapshot`);if(!this.parallel){let n=[];for(let r of e)n.push(vp(this.snapshot,r,t)),await Promise.resolve();return n}return Promise.all(e.map(e=>new Promise((n,r)=>{this.queue.push({job:e,config:t,pending:{resolve:n,reject:r}}),this.pump()})))}dispose(){for(let e of this.workers)e.terminate();this.workers=[],this.idle=[],this.queue=[],this.pendingById.clear(),this.workerOf.clear()}},Dp=null;function Op(){return Dp||=new Ep,Dp}var kp=32,Ap=4;async function jp(e,t,n,r,i=Op()){let{seed:a=1,score:o=Vd,dialect:s=zd,beam:c=Sp}=n,l=n.beamChildCounts??c.childCounts,u=n.beamDepth??c.depth,d=!!c.spreadWorst;if(d&&c.dedupeChildren)throw Error(`beam.dedupeChildren and beam.spreadWorst are mutually exclusive`);if(![...e.liveUnits()].some(([,e])=>e.playerIndex===t))return{events:[],score:Hd(e,t,o),genes:[]};let f=1-t,p=e=>l[Math.min(e,l.length-1)]??1,m={dialect:{...s,extras:{}},extraKinds:Object.keys(s.extras),score:o};i.setSnapshot(e);let h=[{path:[],rootEvents:[]}],g=null;for(let e=0;e<u;e++){let n=e%2==0?t:f,o=n===t,s=p(e),l=i.parallel?Math.max(1,i.size)*Ap:1,_=Math.max(1,Math.min(Math.ceil(l/h.length),Math.ceil(s/kp))),v=Math.ceil(s/_),y=[],b=[];h.forEach((r,i)=>{for(let o=0;o<s;o+=v)y.push({parentEvents:r.path,side:n,scoreFor:t,resetTurn:e>0,count:Math.min(v,s-o),startIndex:o,seed:vd(a,e,i),genesPerUnit:c.genesPerUnit,...d?{meta:!0}:{dedupe:c.dedupeChildren,keep:{best:c.keepBest,worst:c.keepWorst,opponent:c.keepOpponent}}}),b.push(i)});let x=await i.run(y,m),S=h.map(()=>[]);x.forEach((e,t)=>{S[b[t]].push(...e)});let C=[],w=[];for(let e=0;e<h.length;e++){let t=[...c.dedupeChildren?yp(S[e]):S[e]].sort((e,t)=>t.value-e.value||e.index-t.index);if(t.length===0){C.push([]),w.push(null);continue}if(o){let e=t.slice(0,c.keepBest),n=t.slice(c.keepBest),r=c.keepWorst>0?Cp(n,c):[];C.push([...e,...r])}else{let e=t.filter(e=>e.acted),n=e.length>0?e:t;C.push(n.slice(-c.keepOpponent))}w.push(t[0])}if(d){let r=[],o=[];h.forEach((i,s)=>{let l=new Set(C[s].map(e=>e.index)),u=w[s];u&&l.add(u.index),l.size!==0&&(r.push({parentEvents:i.path,side:n,scoreFor:t,resetTurn:e>0,count:l.size,seed:vd(a,e,s),genesPerUnit:c.genesPerUnit,indices:[...l].sort((e,t)=>e-t)}),o.push(s))});let s=await i.run(r,m),l=h.map(()=>new Map);s.forEach((e,t)=>{for(let n of e)l[o[t]].set(n.index,n.events)});for(let e=0;e<h.length;e++){for(let t of C[e])t.events=l[e].get(t.index)??[];let t=w[e];t&&(t.events=l[e].get(t.index)??[])}}let T=[],E=null;for(let t=0;t<h.length;t++){let n=h[t],r=C[t],i=w[t];if(r.length===0&&i===null)continue;let a=t=>({path:[...n.path,...t.events],rootEvents:e===0?t.events:n.rootEvents});if(o){for(let e of r)T.push(a(e));i&&(!E||i.value>E.value)&&(E={node:a(i),value:i.value})}else for(let t of r)T.push(a(t)),e===u-1&&(!E||t.value>E.value)&&(E={node:a(t),value:t.value})}if(T.length===0)break;(o||e===u-1)&&E&&(g=E),h=T,r?.({done:e+1,total:u,label:e===0?`search`:`verify`})}return g?{events:g.node.rootEvents,score:g.value,genes:[]}:{events:[],score:Hd(e,t,o),genes:[]}}var Mp=of({id:`gambit`,name:`Gambit`,notes:`Beam tree five turns deep that keeps its worst-looking moves alive, plus per-type unit worth.`,planner:wp,asyncPlanner:jp,options:{beam:{depth:5,childCounts:[80,60,30,20,16],keepBest:7,keepWorst:4,keepOpponent:1,genesPerUnit:3},score:{unitBase:100,hpWeight:10,armySize:3,aggression:1,buildingOwned:25,captureYield:150,buildingBlockPenalty:15,capturePull:3,vitalWorth:1500,typeValue:{Bulwark:1,Sabre:1,Drover:.95,Lynx:.9,Halberd:1.05,Kestrel:1.25,Mortar:1.35,Nightjar:1.3,Shrike:1.35,Pike:1.2,Road:1.1,Gunboat:.9,Kloss:.05,Pyramid:1,Boll:1}},dialect:{weights:[[`attack`,.3],[`moveTowards`,.2],[`standoff`,.1],[`moveRandom`,.1],[`moveAway`,.1],[`moveToBuilding`,.1],[`idle`,.1]],extras:{},focusFireChance:.5,sweep:{killBonus:100,friendlyFirePenalty:1.5}},population:24,rounds:4,lookaheadPlies:2,replyCandidates:6,finalists:4,deepPlies:2,replyPopulation:8,replyRounds:2,parsimonyPenalty:.001,immediateWeight:.01,survivorFraction:.25,initGenesPerUnit:3,replyGenesPerUnit:2,maxGenesPerUnit:6,mutation:{insert:.25,remove:.2,replace:.2,swap:.2}}}),Np=[dl,Tu,of({id:`feint`,name:`Feint`,notes:`Gambit at depth 3 instead of 5 -- the ablation that asks whether the win is the search shape or the search volume.`,planner:wp,asyncPlanner:jp,options:{...Mp.options,beam:{...Mp.options.beam,depth:3}}})],Pp=Tu;function Fp(e){return Np.find(t=>t.id===e)}var Ip=300,Lp={low:{population:32,rounds:5,finalists:6,deepPlies:4,replyPopulation:10,replyRounds:2,beamChildCounts:[160,120,60,40,32],beamDepth:3},medium:{population:48,rounds:6,finalists:8,deepPlies:4,replyPopulation:14,replyRounds:2,beamChildCounts:[1400,1e3,620,400,260],beamDepth:4},hard:{population:96,rounds:9,finalists:14,deepPlies:5,replyPopulation:24,replyRounds:3,beamChildCounts:[2600,1900,1200,800,520],beamDepth:5}},Rp=[`low`,`medium`,`hard`];function zp(e){return Lp[e]??Lp.low}var Bp=zp(at);function Vp(){let e=[Pp,Pp];if(typeof window>`u`||!window.location?.search)return e;let t=new URLSearchParams(window.location.search).get(`ai`);if(!t)return e;let n=t.split(`:`),r=(n.length===2?n:[t,t]).map(e=>{let t=Fp(e.trim());return t||console.warn(`Unknown AI engine "${e}" -- known: ${Np.map(e=>e.id).join(`, `)}. Using ${Pp.id}.`),t??Pp});return[r[0],r[1]]}var Hp=null;function Up(){if(!Hp){let[e,t]=Vp();Hp=[e.withBudget(Bp),t.withBudget(Bp)]}return Hp}var Wp=e=>new Promise(t=>setTimeout(t,e)),Gp=class{static async runCpuTurn(e,t=1){let n={moves:0,attacks:0},r=dc.snapshot(e),i=[...e.units],a=Math.floor(Math.random()*2147483647),o=(e,n)=>window.dispatchEvent(new CustomEvent(`vibewars:aiprogress`,{detail:{done:e,total:n,playerIndex:t}})),s=Up(),{events:c}=await(s[t]??s[1]).planTurnAsync(r,t,a,e=>o(e.done,e.total));o(1,1);let l=t=>t!==void 0&&e.units.includes(t),u=0;for(;u<c.length;){let e=c[u];if(e.type===`unitMoved`){u++;let t=i[e.unitIndex];if(!l(t))continue;let r=Wi.getPath(t.q,t.r,e.toQ,e.toR,t.move,t);if(r.length===0){console.warn(`AI replay: no live path for ${t.type} (${t.q},${t.r}) -> (${e.toQ},${e.toR}) with move ${t.move} -- move dropped`);continue}t.move-=e.moveSpent,n.moves++,await H.move(t,r),await Wp(Ip);continue}if(e.type===`unitAttacked`){let t=e.attackerIndex,r=i[e.defenderIndex],a={damages:[],impacts:[]},o=e.skillId,s=e.isCounter===!0;for(;u<c.length;){let e=c[u];if(e.type===`unitAttacked`&&e.attackerIndex===t&&e.skillId===o&&e.isCounter===!0===s){let t=i[e.defenderIndex];t&&a.damages.push({unit:t,damage:e.damage}),u++}else if(e.type===`unitDied`)u++;else if(e.type===`terrainModified`)a.impacts.push({q:e.q,r:e.r,craterDelta:e.delta}),u++;else if(e.type===`fireStarted`&&e.casterIndex<0)(a.ignitions??=[]).push({q:e.q,r:e.r}),u++;else break}let d=i[t];if(l(d)&&l(r)){let e=H.getHexDistance(d.q,d.r,r.q,r.r);e<d.minRange||e>d.maxRange||!s&&H.hasUnitAttacked(d)?console.warn(`AI replay: attack dropped for ${d.type} at (${d.q},${d.r}) -> ${r.type} at (${r.q},${r.r}): dist ${e}, range ${d.minRange}-${d.maxRange}, hasAttacked ${H.hasUnitAttacked(d)}`):(n.attacks++,s?await H.counterAttack(d,r,a):await H.attack(d,r,a,o),await Wp(Ip))}continue}if(e.type===`unitRepaired`){let t=i[e.repairerIndex],n=i[e.targetIndex];l(t)&&l(n)&&(H.repair(n,e.hp,t),await Wp(Ip)),u++;continue}if(e.type===`unitLoaded`||e.type===`unitUnloaded`){let t=i[e.carrierIndex],n=i[e.passengerIndex];l(t)&&l(n)&&(e.type===`unitLoaded`?H.loadPassenger(t,n):H.unloadPassenger(t,n,e.toQ,e.toR),await Wp(Ip)),u++;continue}if(e.type===`fireStarted`){if(e.casterIndex<0){H.igniteTile(e.q,e.r),u++;continue}let t=i[e.casterIndex],n=e.skillId?P(t?.type??``,e.skillId):void 0;l(t)&&n&&(H.startFire(t,e.q,e.r,n),await Wp(Ip)),u++;continue}if(e.type===`unitBurned`){u++;continue}if(e.type===`fireTicked`){u++;continue}if(e.type===`buildingCaptured`){u++;continue}console.warn(`AI replay: no handler for event "${e.type}" -- skipped. The simulation planned something the live game cannot execute.`),u++}return n}},Kp=class e{static{this.CPU_TURN_PAUSE_MS=400}static{this.FACTORY_REPAIR_HP=2}static{this.MAX_TURNS=200}static{this.STALEMATE_IDLE_TURNS=4}static{this.STALEMATE_NO_COMBAT_TURNS=40}constructor(e=[`human`,`cpu`]){this.buildings=[],this.turnCount=0,this.idleCpuTurns=0,this.turnsWithoutCombat=0,this.vitalSpawned=null,this.map=new $s,this.players=[],this.units=[],this.currentTurn=0,this.gameOver=!1;let t=(e,t)=>`${e===`human`?`Human`:`AI`} ${t+1}`;st.forEach((n,r)=>{this.players.push({id:r,name:t(e[r],r),color:n.color,controller:e[r]})})}start(){!this.gameOver&&this.getCurrentPlayer().controller===`cpu`&&this.cpuTurn()}nextTurn(){if(!this.gameOver&&!this.checkHeadquartersDefeat()){if(this.units.length>0){if(this.vitalSpawned===null&&(this.vitalSpawned=this.players.map(e=>this.units.some(t=>t.playerIndex===e.id&&Ye(t.type)))),this.vitalSpawned.some(Boolean)){let e=this.players.map(e=>this.units.some(t=>t.playerIndex===e.id&&Ye(t.type))),t=this.players.map((e,t)=>t).filter(t=>this.vitalSpawned[t]&&!e[t]);if(t.length>0){let e=t.length===this.players.length?-1:this.players.findIndex((e,n)=>!t.includes(n));this.endGame(e,`vital unit lost`);return}}let e=this.players.map(e=>this.units.some(t=>t.playerIndex===e.id));if(e.filter(e=>!e).length>0){let t=e.findIndex(e=>e);this.endGame(t,t>=0?`elimination`:`mutual destruction`);return}}if(this.players.every(e=>e.controller===`cpu`)){if(this.idleCpuTurns>=e.STALEMATE_IDLE_TURNS){this.endGameOnPoints(`stalemate -- no side can act`);return}if(this.turnsWithoutCombat>=e.STALEMATE_NO_COMBAT_TURNS){this.endGameOnPoints(`stalemate -- no combat possible`);return}if(this.turnCount>=e.MAX_TURNS){this.endGameOnPoints(`turn limit reached`);return}}this.turnCount++,this.currentTurn=(this.currentTurn+1)%this.players.length,this.units.forEach(t=>{if(t.playerIndex===this.currentTurn&&(t.move=H.unitTypesRecord[t.type].move,H.setHasAttacked(t,!1),t.cooldowns=Me(t.cooldowns),this.buildings.find(e=>e.type!==`hq`&&!e.destroyed&&e.q===t.q&&e.r===t.r&&e.ownerIndex===t.playerIndex)&&t.hp<t.maxHp)){let n=t.hp;t.hp=Math.min(t.maxHp,t.hp+e.FACTORY_REPAIR_HP),H.updateUnitVisuals(t),W.showDamageNumber(t.visualUnit.position.clone(),t.hp-n)}}),this.buildings.forEach(e=>{if(e.destroyed||e.ownerIndex!==this.currentTurn||!(e.isEntrance??!e.groupId)||e.productType==null)return;let t=e.productionCountdown??4,n=Math.max(0,t-1);if(e.productionCountdown=n,n>0)return;let r=Mi({getTile:(e,t)=>this.map.getTile(e,t),isOccupied:(e,t)=>!!this.getUnitAt(e,t),isBuilding:(e,t)=>this.buildings.some(n=>!n.destroyed&&n.q===e&&n.r===t)},e,e.productType);if(!r)return;let i=this.spawnUnit(e.productType,r.q,r.r,this.currentTurn);i&&(i.move=0,H.setHasAttacked(i,!0),e.productionCountdown=4)}),this.tickFire(),Fa(),this.getCurrentPlayer().controller===`cpu`&&this.cpuTurn()}}cpuTurn(){Gp.runCpuTurn(this,this.currentTurn).then(e=>{this.idleCpuTurns=e.moves+e.attacks===0?this.idleCpuTurns+1:0,this.turnsWithoutCombat=e.attacks===0?this.turnsWithoutCombat+1:0}).catch(e=>console.error(`AI turn failed:`,e)).finally(()=>setTimeout(()=>this.nextTurn(),e.CPU_TURN_PAUSE_MS))}get fireBoard(){let e=this.map;return{getTile:(t,n)=>e.getTile(t,n),setTile:(t,n,r)=>{let i=e.getTile(t,n);i&&Object.assign(i,r)}}}tickFire(){no.tickSmoulder();let e=we(this.fireBoard,this.map.cols,this.map.rows);if(e.length===0)return;for(let e of De(this.fireBoard,this.units,this.currentTurn,e=>H.unitTypesRecord[e.type]?.unitClass===`air`))H.applyDamage(e,1),W.showDamageNumber(e.visualUnit.position.clone(),1),e.hp<=0&&H.removeUnit(e);let t=Ce(this.fireBoard,e,Math.random);Ee(this.fireBoard,t,e),no.sync(this.map)}endGame(e,t){this.gameOver=!0,window.dispatchEvent(new CustomEvent(`vibewars:gameover`,{detail:{winner:e,name:e>=0?this.players[e].name:null,reason:t}}))}checkHeadquartersDefeat(){if(this.gameOver)return!0;let e=Ui(this.buildings,this.players.length);if(e.length===0)return!1;let t=e.length===this.players.length?-1:this.players.findIndex((t,n)=>!e.includes(n));return this.endGame(t,`headquarters lost`),!0}endGameOnPoints(e){let t=this.players.map(e=>this.units.filter(t=>t.playerIndex===e.id).reduce((e,t)=>e+t.hp,0)),n=-1;t[0]>t[1]?n=0:t[1]>t[0]&&(n=1),this.endGame(n,`${e} (points: ${t.join(` vs `)})`)}getCurrentPlayer(){return this.players[this.currentTurn]}isPlayerTurn(e){return this.currentTurn===e}getUnitAt(e,t){return this.units.find(n=>!n.carriedBy&&n.q===e&&n.r===t)}getPlayerUnits(e){return this.units.filter(t=>t.playerIndex===e)}spawnUnit(e,t,n,r){let i=H.createUnit(e,t,n,r);if(!i)return null;let a=H.unitTypesRecord[e],o={type:e,q:t,r:n,playerIndex:r,hp:a.hp,maxHp:a.maxHp,move:a.move,attack:a.attack,minRange:a.minRange,maxRange:a.maxRange,hasAttacked:!1,cooldowns:ke,visualUnit:i};return this.units.push(o),o}initializeUnits(){let{player:e,cpu:t}=Ai().spawns;e.forEach(e=>this.spawnUnit(e.type,e.q,e.r,0)),t.forEach(e=>this.spawnUnit(e.type,e.q,e.r,1))}clone(){let t=new e;return t.map=this.map.clone(),t.players=JSON.parse(JSON.stringify(this.players)),t.units=JSON.parse(JSON.stringify(this.units)),t.currentTurn=this.currentTurn,t}},qp=[{key:`grid`,label:`격자`,title:`지형 위에 표시되는 육각 격자선`},{key:`textures`,label:`텍스처`,title:`절차 생성된 지면 디테일, 도로, 자국`},{key:`minimap`,label:`미니맵`,title:`아래쪽에 표시되는 전체 지도`},{key:`bloom`,label:`블룸`,title:`발광 효과 주변의 실험적 글로우 — 비용이 크고 기본은 꺼짐`},{key:`grass`,label:`잔디`,title:`잔디 타일 위에 실제 풀잎을, 카메라가 가까울 때만 그림`},{key:`stats`,label:`통계`,title:`프레임 시간, 드로 콜, 삼각형 수`}],Jp=[{map:`random30fixed`,label:`View 1`,position:[33.01423490563091,26,47.958068764895366],quaternion:[-.4478282350657019,.2854377067551525,.15339230689209105,.8333342592421247],groundLookAt:[22.465720933342098,0,34.366460468487574],up:[0,1,0],scale:[1,1,1],cameraHeight:26,zoom:1,fov:70,aspect:1.6,near:1,far:1e4,focus:10,filmGauge:35,filmOffset:0},{map:`random30fixed`,label:`View 2`,position:[-3.0336095764246966,15,49.17129314655757],quaternion:[-.3833340669417683,-.39358168809929583,-.1851714628596237,.8147760288921241],groundLookAt:[6.689557743838813,-17763568394002505e-31,41.45546255889942],up:[0,1,0],scale:[1,1,1],cameraHeight:15,zoom:1,fov:70,aspect:1.6,near:1,far:1e4,focus:10,filmGauge:35,filmOffset:0}];function Yp(e){K.position.fromArray(e.position),K.up.fromArray(e.up),K.quaternion.fromArray(e.quaternion).normalize(),K.scale.fromArray(e.scale),vs.fromArray(e.groundLookAt),xs(e.cameraHeight),K.zoom=e.zoom,K.fov=e.fov,K.aspect=e.aspect,K.near=e.near,K.far=e.far,K.focus=e.focus,K.filmGauge=e.filmGauge,K.filmOffset=e.filmOffset,K.clearViewOffset(),K.updateProjectionMatrix(),K.updateMatrixWorld(!0),window.dispatchEvent(new Event(`vibewars-camera-view-changed`))}function Xp(e){return{x:e.x,y:e.y,z:e.z}}function Zp(){K.updateProjectionMatrix(),K.updateMatrixWorld(!0);let e=new THREE.Vector3;K.getWorldDirection(e);let t=Math.abs(e.y)>1e-8?-K.position.y/e.y:null,n=t!==null&&t>=0?K.position.clone().addScaledVector(e,t):null;return JSON.stringify({schema:`vibewars-camera-v1`,map:rt,projection:`perspective`,position:Xp(K.position),direction:Xp(e),groundLookAt:n?Xp(n):null,up:Xp(K.up),rotation:{x:K.rotation.x,y:K.rotation.y,z:K.rotation.z,order:K.rotation.order},quaternion:{x:K.quaternion.x,y:K.quaternion.y,z:K.quaternion.z,w:K.quaternion.w},scale:Xp(K.scale),cameraHeight:bs(),zoom:K.zoom,fov:K.fov,aspect:K.aspect,near:K.near,far:K.far,focus:K.focus,filmGauge:K.filmGauge,filmOffset:K.filmOffset,viewOffset:K.view??null,projectionMatrix:[...K.projectionMatrix.elements],matrixWorld:[...K.matrixWorld.elements],matrixWorldInverse:[...K.matrixWorldInverse.elements],viewport:{width:q.domElement.width,height:q.domElement.height,pixelRatio:q.getPixelRatio()}},null,2)}async function Qp(e){if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(e);return}let t=document.createElement(`textarea`);t.value=e,t.style.position=`fixed`,t.style.opacity=`0`,document.body.appendChild(t),t.select();let n=document.execCommand(`copy`);if(t.remove(),!n)throw Error(`Browser refused clipboard access`)}function $p(e){let t=document.getElementById(`minimap-overlay`);t&&(t.style.display=e.minimap?`block`:`none`)}function em(){let e=document.createElement(`div`);e.className=`sun-controls`,e.id=`scene-controls`;let t=x.getAngles(),n=d(`water`),r=Ps(),i={exposure:r?.exposure??1,contrast:r?.contrast??1,saturation:r?.saturation??1,gamma:r?.gamma??1,balance:r?.balance??[1,1,1]},a=(e,t,n,r,i)=>{let a=document.createElement(`label`);a.className=`sun-control`;let o=document.createElement(`span`);o.textContent=e;let s=document.createElement(`input`);s.type=`range`,s.min=String(t),s.max=String(n),s.step=`1`,s.value=String(r);let c=document.createElement(`output`);return c.value=i(r),a.append(o,s,c),{row:a,input:s,output:c}},o=e=>`${Math.round(e)}°`,s=e=>`${Math.round(e)}%`,c=a(`Solrotation`,0,360,t.azimuth,o),l=a(`Sol över plan`,0,180,t.elevation,o),u=a(`Solstyrka`,0,300,x.getStrength()*100,s),f=a(`Perspektiv`,20,100,K.fov,o),p=a(`Vattenmättnad`,0,300,n.saturation*100,s),m=a(`Vattenkontrast`,0,300,n.contrast*100,s),h=a(`Vattenljushet`,0,300,n.exposure*100,s),g=a(`Total ljushet`,0,300,i.exposure*100,s),_=a(`Total kontrast`,0,300,i.contrast*100,s),y=a(`Total mättnad`,0,300,i.saturation*100,s);c.input.title=`Rotate the directional light around the battlefield`,l.input.title=`Move the directional light over the battlefield`,u.input.title=`Adjust the strength of the directional sunlight`,f.input.title=`Adjust camera lens: low is flatter telephoto, high is stronger wide-angle perspective`,p.input.title=`Adjust saturation of the final rendered water colour`,m.input.title=`Adjust contrast of the final rendered water colour`,h.input.title=`Adjust brightness of the final rendered water colour`,g.input.title=`Adjust brightness of the complete rendered scene`,_.input.title=`Adjust contrast of the complete rendered scene`,y.input.title=`Adjust saturation of the complete rendered scene`;let b=()=>{let e=Number(c.input.value),t=Number(l.input.value),n=Number(u.input.value);c.output.value=o(e),l.output.value=o(t),u.output.value=s(n),x.setAngles(e,t),x.setStrength(n/100)},S=()=>{K.fov=Number(f.input.value),f.output.value=o(K.fov),K.updateProjectionMatrix()},C=()=>{f.input.value=String(K.fov),f.output.value=o(K.fov)},w=()=>{n.saturation=Number(p.input.value)/100,n.contrast=Number(m.input.value)/100,n.exposure=Number(h.input.value)/100,p.output.value=s(n.saturation*100),m.output.value=s(n.contrast*100),h.output.value=s(n.exposure*100),v(`water`,n)},T=()=>{i.exposure=Number(g.input.value)/100,i.contrast=Number(_.input.value)/100,i.saturation=Number(y.input.value)/100,g.output.value=s(i.exposure*100),_.output.value=s(i.contrast*100),y.output.value=s(i.saturation*100),Ns(i)};return c.input.addEventListener(`input`,b),l.input.addEventListener(`input`,b),u.input.addEventListener(`input`,b),f.input.addEventListener(`input`,S),p.input.addEventListener(`input`,w),m.input.addEventListener(`input`,w),h.input.addEventListener(`input`,w),g.input.addEventListener(`input`,T),_.input.addEventListener(`input`,T),y.input.addEventListener(`input`,T),window.addEventListener(`vibewars-camera-view-changed`,C),e.append(c.row,l.row,u.row,f.row,p.row,m.row,h.row,g.row,_.row,y.row),e}function tm(){if(document.getElementById(`view-toolbar`))return;let e=document.getElementById(`minimap-overlay`);e&&(e.style.top=`${I.MINIMAP.TOP}px`,e.style.width=`${I.MINIMAP.WIDTH}px`,e.style.height=`${I.MINIMAP.HEIGHT}px`);let t=document.createElement(`div`);t.id=`view-toolbar`;for(let e of qp){let n=document.createElement(`button`);n.className=`view-toggle`,n.textContent=e.label,n.title=e.title,n.dataset.key=e.key;let r=()=>{let t=L[e.key];n.classList.toggle(`is-on`,t),n.setAttribute(`aria-pressed`,String(t))};r(),n.addEventListener(`click`,()=>{_t(e.key),r(),e.key===`minimap`&&$p(L),e.key===`bloom`&&Fs(L.bloom),e.key===`stats`&&ms.setEnabled(L.stats,q)}),t.appendChild(n)}let n=document.createElement(`button`);n.className=`view-toggle`,n.textContent=`Copy camera`,n.title=`Copy the complete camera view as JSON`,n.addEventListener(`click`,async()=>{try{await Qp(Zp()),n.textContent=`Copied`}catch(e){console.error(`Could not copy camera JSON`,e),n.textContent=`Copy failed`}window.setTimeout(()=>{n.textContent=`Copy camera`},1400)}),t.appendChild(n);for(let e of Jp.filter(e=>e.map===rt)){let n=document.createElement(`button`);n.className=`view-toggle`,n.textContent=e.label,n.title=`Restore ${e.label} for this map`,n.addEventListener(`click`,()=>Yp(e)),t.appendChild(n)}let r=em();r.hidden=!0;let i=document.createElement(`button`);i.className=`view-toggle`,i.textContent=`…`,i.title=`Show or hide scene controls`,i.setAttribute(`aria-controls`,r.id),i.setAttribute(`aria-expanded`,`false`),i.addEventListener(`click`,()=>{r.hidden=!r.hidden;let e=!r.hidden;i.classList.toggle(`is-on`,e),i.setAttribute(`aria-expanded`,String(e))}),t.append(i,r),document.body.appendChild(t),$p(L),ms.setEnabled(L.stats,q)}var nm=typeof window<`u`&&window.VIBEWARS_TERRAIN_VIEWER===!0,$=null,rm=!1;function im(e){$=e}var am=!1,om=!1,sm={x:0,y:0},cm=-1;function lm(e){let t=new THREE.Raycaster,n=new THREE.Vector2;tm();let r=document.getElementById(`minimap-overlay`),i=document.getElementById(`end-turn-button`),a=document.createElement(`button`);a.id=`next-unit-button`,a.textContent=`다음 유닛`,a.className=`game-button`,document.body.appendChild(a),i.className=`game-button`;function o(e,t){let n=r.getBoundingClientRect();return e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom}window.addEventListener(`mousedown`,e=>{let t=e.clientX,n=e.clientY;o(t,n)?am=!0:e.button===2?(om=!0,sm={x:e.clientX,y:e.clientY}):(rm=!0,sm={x:e.clientX,y:e.clientY})}),window.addEventListener(`mousemove`,async i=>{if(n.x=i.clientX/window.innerWidth*2-1,n.y=-(i.clientY/window.innerHeight)*2+1,t.setFromCamera(n,K),am){let t=getMinimapWorldPosition(i,r);t&&Bs(t.x,t.z,e),i.preventDefault(),i.stopPropagation();return}if(om){let e=(i.clientX-sm.x)*.01,t=new THREE.Vector3,n=new THREE.Vector3;K.getWorldDirection(n),t.copy(K.position).add(n.multiplyScalar(K.position.length()));let r=new THREE.Matrix4;r.makeRotationY(-e);let a=new THREE.Vector3().copy(K.position);a.sub(t),a.applyMatrix4(r),a.add(t),K.position.copy(a),K.lookAt(t),sm={x:i.clientX,y:i.clientY};return}let a=te(t),o=J.getObjectByName(`highlights`);if(o&&[...o.children].filter(e=>e.name===`cursorHighlight`).forEach(e=>o.remove(e)),a.length>0){let e=a[0].object.parent,t=W.highlightHex(e,65280);if(t&&(t.name=`cursorHighlight`),$){await W.clearPathLine();let t=Wi.getPath($.q,$.r,e.userData.q,e.userData.r,$.move,$);t.length>0&&H.isValidMove($,e)&&await W.drawPath($,t)}}else $&&await W.clearPathLine();rm&&(Vs(-(i.clientX-sm.x)*.05,-(i.clientY-sm.y)*.05,e),sm={x:i.clientX,y:i.clientY})}),window.addEventListener(`mouseup`,t=>{if(am){let n=getMinimapWorldPosition(t,r);n&&Bs(n.x,n.z,e),am=!1,t.preventDefault(),t.stopPropagation()}else rm?rm=!1:om&&=!1}),window.addEventListener(`wheel`,t=>{t.preventDefault();let n=t.deltaY>0?-I.CAMERA.ZOOM_SPEED:I.CAMERA.ZOOM_SPEED;xs(Math.max(I.CAMERA.MIN_HEIGHT,Math.min(I.CAMERA.MAX_HEIGHT,bs()+n))),Hs(e)},{passive:!1});function s(){return A().getCurrentPlayer().controller===`human`}function c(e){return e&&s()&&A().isPlayerTurn(e.playerIndex)?($&&mm(),$=e,H.handleSelection(e),!0):!1}ka((e,t)=>{!e||!t||t.effect.kind===`attack`||H.highlightSkillTargets(e,t)}),window.addEventListener(`click`,e=>{if(hm(e.target))return;n.x=e.clientX/window.innerWidth*2-1,n.y=-(e.clientY/window.innerHeight)*2+1,t.setFromCamera(n,K);let r=te(t);if(r.length>0){let e=r[0].object.parent,t=A().getUnitAt(e.userData.q,e.userData.r);t?Oo.show(t):Oo.hide();let n=$?Ma():null;if($&&n&&n.effect.kind!==`attack`){gm($,e.userData.q,e.userData.r);return}if($&&t&&t.playerIndex!==$.playerIndex){let n=J.getObjectByName(`highlights`);if(n&&n.children.some(t=>{let n=new R(e.userData.q,e.userData.r).getWorldPosition(),r=Math.round(n.x*10)/10,i=Math.round(n.z*10)/10,a=Math.round(t.position.x*10)/10,o=Math.round(t.position.z*10)/10;return r===a&&i===o})){H.attack($,t);return}}if(t){if(c(t))return}else $&&H.isValidMove($,e)?H.handleMovement($,e):$&&mm();return}Oo.hide(),$&&mm()}),r.addEventListener(`click`,t=>{let n=getMinimapWorldPosition(t,r);n&&Bs(n.x,n.z,e),t.preventDefault(),t.stopPropagation()}),i.addEventListener(`click`,()=>{s()&&(mm(),A().nextTurn(),ha.update())});let l=()=>{s()?(i.disabled=!1,i.textContent=`턴 종료`):(i.disabled=!0,i.textContent=`AI 턴`)};l();let u=A(),d=u.nextTurn;u.nextTurn=function(){d.call(this),l(),f(),cm=-1},a.addEventListener(`click`,()=>{if(!s())return;let e=A().currentTurn,t=A().units.filter(t=>t.playerIndex===e);if(t.length===0)return;cm=(cm+1)%t.length;let n=t[cm],r=new R(n.q,n.r).getWorldPosition(),i=F.getHeight(R.findHex(n.q,n.r)),a=new THREE.Vector3(r.x,i,r.z);K.position.set(a.x,a.y+20,a.z+15),K.lookAt(a.x,a.y,a.z),setTimeout(()=>{c(n)&&Oo.show(n)},50)});let f=()=>{s()?a.disabled=!1:a.disabled=!0};f(),window.addEventListener(`resize`,()=>{K.aspect=window.innerWidth/window.innerHeight,K.updateProjectionMatrix(),q.setSize(window.innerWidth,window.innerHeight),Is(window.innerWidth,window.innerHeight),r.style.top=`10px`,r.style.right=`10px`}),window.addEventListener(`contextmenu`,e=>{e.preventDefault()})}var um=null;function dm(){return um??=Promise.all([ga.initialize(),ha.initialize(),co.initialize(),W.initialize(),$i.initialize(),H.loadUnitModels(),Ii.loadBuildingModels()]).then(()=>{W.preloadParticleTextures()}),um}function fm(){let e=()=>{ga.audioContext?.resume?.(),window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,e)};window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,e)}async function pm(e){Ls();let t=new Kp(e);re(t),await dm(),wm();let{mapCenterX:n,mapCenterZ:r}=await V.createMap(t);x.setCenter(n,0,r),xm(t),V.smoothTerrain(),await us.init(G,q,V.hexGrid),Xo.init(G,V.hexGrid),V.decorateTerrain(),await Promise.all([H.loadUnitModels(),Ii.loadBuildingModels()]),nm||(t.initializeUnits(),Ii.initializeBuildings(t)),V.updateAllDecoratorTransparency(),V.buildDecorationChunks();let i=Rs(n,r),{miniMapCamera:a,mapWidth:o,mapHeight:s,highlightGroup:c}=Us(n,r);lm(i),nm&&(document.getElementById(`end-turn-button`)?.style.setProperty(`display`,`none`),document.getElementById(`next-unit-button`)?.style.setProperty(`display`,`none`)),K.position.set(n,20,r+15),K.lookAt(n,0,r),E.initLocalLights(J),U.init(J),Ws(a,i,o,s,c),window.renderFrameNow=()=>{q.info.reset(),Gs(a,i,c);let e=q.info.render;return{calls:e.calls,triangles:e.triangles}},window.getRuntimeColorGrade=Ps,window.setRuntimeColorGrade=Ns,window.getRuntimeMaterialCalibration=d,window.setRuntimeMaterialCalibration=v,nm||t.start()}function mm(){$=null,W.clearPathLine(),W.clearHighlights(),H.handleSelection(null)}function hm(e){let t=e;return!t||typeof t.closest!=`function`?!1:!!t.closest(`button, #skill-bar, #view-toolbar, #minimap-overlay, #start-menu, #unit-info`)}function gm(e,t,n){let r=Ma();if(!r||r.effect.kind===`attack`||!ze(e,r)||!Be(r,H.getHexDistance(e.q,e.r,t,n)))return!1;let i=A(),a=i.getUnitAt(t,n),o=i.map.getTile(t,n);if(!Ve(r,e,a?{...a,unitClass:H.unitTypesRecord[a.type]?.unitClass??``}:null,o?{vegetated:o.vegetated,burning:o.burning>0,burned:o.burned}:null))return!1;if(r.effect.kind===`startFire`)return H.startFire(e,t,n,r),H.handleSelection(e),!0;if(r.effect.kind===`repair`)return a?(H.repair(a,r.effect.hp,e),H.handleSelection(e),!0):!1;if(r.effect.kind===`load`){if(!a)return!1;let t=H.unitTypesRecord[e.type]?.capacity??0;return i.units.filter(t=>t.carriedBy===e).length>=t?!1:(H.loadPassenger(e,a),H.handleSelection(e),!0)}if(r.effect.kind===`unload`){let r=i.units.find(t=>t.carriedBy===e);if(!r)return!1;let a=i.map.getTile(t,n);return!a||H.unitTypesRecord[r.type]?.terrainCosts[a.type]==null||Ii.getBuildingAt(t,n)?!1:(H.unloadPassenger(e,r,t,n),H.handleSelection(e),!0)}return!1}var _m={"human-cpu":{label:`인간 vs AI`,controllers:[`human`,`cpu`]},"cpu-cpu":{label:`AI vs AI`,controllers:[`cpu`,`cpu`]},"human-human":{label:`인간 vs 인간`,controllers:[`human`,`human`]}};function vm(){let e=document.createElement(`div`);e.id=`start-menu`,e.style.cssText=`position:absolute;inset:0;background:#0a0f1e;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;z-index:100;font-family:Arial,sans-serif;overflow-y:auto;padding:40px 20px;box-sizing:border-box;`;let t=document.createElement(`h1`);t.textContent=`VibeWars`,t.style.cssText=`color:#fff;font-size:44px;margin:0 0 4px 0;`,e.appendChild(t);let n=t=>{let n=document.createElement(`div`);n.textContent=t,n.style.cssText=`color:#8fa3c8;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;margin:14px 0 2px 0;`,e.appendChild(n)};n(`맵`);let r=rt,i=document.createElement(`div`);i.style.cssText=`display:grid;grid-template-columns:repeat(2, minmax(0, 210px));gap:8px;justify-content:center;`,e.appendChild(i);let a=[],o=()=>{for(let{key:e,element:t}of a){let n=e===r;t.style.borderColor=n?`#4CAF50`:`#2b3a55`,t.style.background=n?`#1b3a24`:`#141c30`,t.style.color=n?`#dff5e3`:`#9fb2d0`}},s=e=>`${e.cols}×${e.rows} · ${e.spawns.cpu.length} a side`,c=[...Ti.map((e,t)=>({key:e.key,label:`미러 ${t+1} — ${e.name}`,note:s(e)})),...Ei.map(e=>({key:e.key,label:e.name,note:s(e)})),...Di.map(e=>({key:e.key,label:`시나리오 — ${e.name}`,note:s(e)}))];for(let e of c){let t=document.createElement(`button`);t.style.cssText=`padding:10px 12px;font-size:15px;border:2px solid #2b3a55;border-radius:6px;cursor:pointer;background:#141c30;color:#9fb2d0;text-align:left;line-height:1.35;font-family:inherit;`;let n=document.createElement(`div`);n.textContent=e.label,n.style.cssText=`font-weight:bold;`;let s=document.createElement(`div`);s.textContent=e.note,s.style.cssText=`font-size:12px;opacity:0.75;`,t.appendChild(n),t.appendChild(s),t.addEventListener(`click`,()=>{r=e.key,o()}),i.appendChild(t),a.push({key:e.key,element:t})}o(),n(`AI 난이도`);let l=at??`low`,u=document.createElement(`div`);u.style.cssText=`display:flex;gap:8px;justify-content:center;`,e.appendChild(u);let d={low:`3턴 앞을 내다봅니다`,medium:`4턴 앞을 내다보고 더 넓게 탐색`,hard:`5턴 앞을 내다보고 가장 넓게 탐색 — 사고 시간이 길어집니다`},f=[],p=()=>{for(let{key:e,element:t}of f){let n=e===l;t.style.borderColor=n?`#4CAF50`:`#2b3a55`,t.style.background=n?`#1b3a24`:`#141c30`,t.style.color=n?`#dff5e3`:`#9fb2d0`}};for(let e of Rp){let t=document.createElement(`button`);t.dataset.difficulty=e,t.style.cssText=`padding:10px 12px;font-size:15px;border:2px solid #2b3a55;border-radius:6px;cursor:pointer;background:#141c30;color:#9fb2d0;text-align:left;line-height:1.35;font-family:inherit;min-width:150px;`;let n=document.createElement(`div`);n.textContent=e[0].toUpperCase()+e.slice(1),n.style.cssText=`font-weight:bold;`;let r=document.createElement(`div`);r.textContent=d[e]??``,r.style.cssText=`font-size:12px;opacity:0.75;`,t.appendChild(n),t.appendChild(r),t.addEventListener(`click`,()=>{l=e,p()}),u.appendChild(t),f.push({key:e,element:t})}p(),n(`매치 유형`);for(let[t,{label:n}]of Object.entries(_m)){let i=document.createElement(`button`);i.textContent=n,i.style.cssText=`padding:14px 40px;font-size:20px;background-color:#4CAF50;color:white;border:none;border-radius:6px;cursor:pointer;min-width:280px;font-family:inherit;`,i.addEventListener(`click`,()=>{if(r===rt&&l===(at??`low`)){e.remove(),pm(_m[t].controllers).catch(e=>{console.error(`Error initializing game:`,e)});return}window.location.search=`?map=${encodeURIComponent(r)}&mode=${encodeURIComponent(t)}&difficulty=${encodeURIComponent(l)}`}),e.appendChild(i)}document.body.appendChild(e)}function ym(){if(fm(),dm(),nm){pm([`human`,`human`]).catch(e=>{console.error(`Error initializing terrain viewer:`,e)});return}let e=it&&_m[it];if(e){pm(e.controllers).catch(e=>{console.error(`Error initializing game:`,e)});return}vm()}function bm(){let e=document.getElementById(`ai-thinking-panel`);if(e)return{panel:e,bar:document.getElementById(`ai-thinking-bar`),label:document.getElementById(`ai-thinking-label`)};e=document.createElement(`div`),e.id=`ai-thinking-panel`,e.style.cssText=`position:absolute;top:12px;left:50%;transform:translateX(-50%);z-index:90;display:none;padding:10px 18px;font-family:Arial,sans-serif;color:#fff;text-align:center;background:rgba(10,15,30,0.85);border:1px solid #4CAF50;border-radius:8px;min-width:220px;`;let t=document.createElement(`div`);t.id=`ai-thinking-label`,t.style.cssText=`font-size:13px;margin-bottom:6px;letter-spacing:0.5px;`,t.textContent=`AI 사고 중…`;let n=document.createElement(`div`);n.style.cssText=`height:8px;background:rgba(255,255,255,0.15);border-radius:4px;overflow:hidden;`;let r=document.createElement(`div`);return r.id=`ai-thinking-bar`,r.style.cssText=`height:100%;width:0%;background:#4CAF50;transition:width 0.15s;`,n.appendChild(r),e.appendChild(t),e.appendChild(n),document.body.appendChild(e),{panel:e,bar:r,label:t}}window.addEventListener(`vibewars:aiprogress`,(e=>{let{done:t,total:n,playerIndex:r}=e.detail??{},{panel:i,bar:a,label:o}=bm();if(typeof t!=`number`||typeof n!=`number`||t>=n){i.style.display=`none`,a.style.width=`0%`;return}o.textContent=`AI ${typeof r==`number`?r+1:``} thinking…`,a.style.width=`${Math.round(t/n*100)}%`,i.style.display=`block`})),window.addEventListener(`vibewars:gameover`,(e=>{let t=document.createElement(`div`);t.id=`game-over-banner`;let n=e.detail?.name?`${e.detail.name} 승리!`:`무승부`,r={elimination:`전멸`,"mutual destruction":`서로 전멸`,"headquarters lost":`본거지 함락`,"turn cap":`턴 제한 초과`,"turn cap (points:":`턴 제한 초과 (점수:`},i=e.detail?.reason??``,a=Object.entries(r).reduce((e,[t,n])=>e.replace(t,n),i);t.textContent=a?`${n} (${a})`:n,t.style.cssText=`position:absolute;top:40%;left:50%;transform:translate(-50%,-50%);z-index:100;padding:24px 60px;font-family:Arial,sans-serif;font-size:36px;font-weight:bold;color:#fff;background:rgba(10,15,30,0.92);border:2px solid #4CAF50;border-radius:10px;`,document.body.appendChild(t)})),{}.VITEST||(document.readyState===`complete`?ym():window.addEventListener(`load`,ym,{once:!0}));function xm(e){let t=Ai(),n=t.randomRoads,r=t.seed===void 0?Math.random:ni(t.seed^1919902052);for(let t=0;t<n;t++){let t,n;do t=Math.floor(r()*I.COLS),n=Math.floor(r()*I.ROWS);while(e.map.getTile(t,n).type===`WATER`);let i,a;do i=Math.floor(r()*I.COLS),a=Math.floor(r()*I.ROWS);while(e.map.getTile(i,a).type===`WATER`);$i.generateRoad(t,n,i,a)}}function Sm(){return new THREE.AmbientLight(16777215,.5*Math.PI)}function Cm(){let e=new THREE.DirectionalLight(16777215,1.2*Math.PI);return e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.bias=-.001,e.shadow.normalBias=.04,e.shadow.radius=2.2,e.shadow.blurSamples=8,e.shadow.camera.near=1,e.shadow.camera.far=200,e.shadow.camera.left=-Ss*1.05,e.shadow.camera.right=Ss*1.05,e.shadow.camera.top=Cs*1.05,e.shadow.camera.bottom=-Cs*1.05,new THREE.DirectionalLightHelper(e,5),new THREE.CameraHelper(e.shadow.camera),e}function wm(){let e=Sm(),t=Cm();G.add(e),G.add(t),x.init(G,t)}