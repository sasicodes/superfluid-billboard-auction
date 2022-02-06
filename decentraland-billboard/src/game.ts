import Script2 from '../9a0c9732-f45c-4836-a524-e32f786787f7/src/item'
import Script1 from '../b53e3bde-9d22-4098-8707-29a685d25a3b/src/item'
import Script3 from '../c4a799c1-9ef8-4787-914e-4f8c15357881/src/item'
import Script4 from '../e915cdb6-03e6-43e2-81fb-58ad8603f68c/src/item'
import Script5 from '../f4d78d36-228b-4623-8984-8a68986dbf6a/src/item'
import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const twitterLink = new Entity('twitterLink')
engine.addEntity(twitterLink)
twitterLink.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(28, 0, 29.5),
  rotation: new Quaternion(
    -3.0760558403702737e-15,
    0,
    1.088531040241566e-15,
    1
  ),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
})
twitterLink.addComponentOrReplace(transform2)

const githubLink = new Entity('githubLink')
engine.addEntity(githubLink)
githubLink.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(18, 0, 3),
  rotation: new Quaternion(-1.899164123016152e-15, -3.725290298461914e-8, 0, 1),
  scale: new Vector3(1.0000015497207642, 1, 1.0000015497207642)
})
githubLink.addComponentOrReplace(transform3)

const imageBillboardBlack = new Entity('imageBillboardBlack')
engine.addEntity(imageBillboardBlack)
imageBillboardBlack.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(9.5, 0, 23),
  rotation: new Quaternion(
    2.2736492474585398e-16,
    -0.2902846932411194,
    3.4604628496026635e-8,
    0.9569404125213623
  ),
  scale: new Vector3(3.3641774654388428, 2, 1.7314941883087158)
})
imageBillboardBlack.addComponentOrReplace(transform4)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape(
  '5a51cce6-b537-4f8a-af12-e17d2ab46ba6/Grass.glb'
)
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform5)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform6 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform6)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform7 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform7)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform8 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform8)

const balsamFlower = new Entity('balsamFlower')
engine.addEntity(balsamFlower)
balsamFlower.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(19.5, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
balsamFlower.addComponentOrReplace(transform9)
const gltfShape2 = new GLTFShape(
  '71806ca6-1a2b-4d8b-b919-ae96241f8c08/Plant_02/Plant_02.glb'
)
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
balsamFlower.addComponentOrReplace(gltfShape2)

const cactus3 = new Entity('cactus3')
engine.addEntity(cactus3)
cactus3.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(5.5, 0, 18.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
cactus3.addComponentOrReplace(transform10)
const gltfShape3 = new GLTFShape(
  'ac4bee02-ae33-4788-a041-183781554855/Cactus_01/Cactus_01.glb'
)
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
cactus3.addComponentOrReplace(gltfShape3)

const bush = new Entity('bush')
engine.addEntity(bush)
bush.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(5, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bush.addComponentOrReplace(transform11)
const gltfShape4 = new GLTFShape(
  '3168d3fe-8f93-4a1a-81f4-689780f2a373/Bush_02/Bush_02.glb'
)
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
bush.addComponentOrReplace(gltfShape4)

const evergreenShrub = new Entity('evergreenShrub')
engine.addEntity(evergreenShrub)
evergreenShrub.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(20.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
evergreenShrub.addComponentOrReplace(transform12)
const gltfShape5 = new GLTFShape(
  '0d4f1e28-c9bd-4f3e-9605-c76c84702742/Bush_03/Bush_03.glb'
)
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
evergreenShrub.addComponentOrReplace(gltfShape5)

const plant = new Entity('plant')
engine.addEntity(plant)
plant.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(4, 0, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plant.addComponentOrReplace(transform13)
const gltfShape6 = new GLTFShape(
  'e28de28a-8cc3-49c6-9bd2-ea09ed28d57d/Plant 1.glb'
)
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
plant.addComponentOrReplace(gltfShape6)

const fenceWoodV = new Entity('fenceWoodV')
engine.addEntity(fenceWoodV)
fenceWoodV.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(8, 0, 31),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5099997520446777, 1, 0.9999991655349731)
})
fenceWoodV.addComponentOrReplace(transform14)
const gltfShape7 = new GLTFShape(
  '6554b000-8e50-42c2-a282-db5d12842f45/Fence Wood V2 1.glb'
)
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
fenceWoodV.addComponentOrReplace(gltfShape7)

const fenceWoodV2 = new Entity('fenceWoodV2')
engine.addEntity(fenceWoodV2)
fenceWoodV2.setParent(_scene)
fenceWoodV2.addComponentOrReplace(gltfShape7)
const transform15 = new Transform({
  position: new Vector3(3, 0, 31),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5099997520446777, 1, 0.9999991655349731)
})
fenceWoodV2.addComponentOrReplace(transform15)

const fenceWoodV3 = new Entity('fenceWoodV3')
engine.addEntity(fenceWoodV3)
fenceWoodV3.setParent(_scene)
fenceWoodV3.addComponentOrReplace(gltfShape7)
const transform16 = new Transform({
  position: new Vector3(13, 0, 31),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5099997520446777, 1, 0.9999991655349731)
})
fenceWoodV3.addComponentOrReplace(transform16)

const fenceWoodV4 = new Entity('fenceWoodV4')
engine.addEntity(fenceWoodV4)
fenceWoodV4.setParent(_scene)
fenceWoodV4.addComponentOrReplace(gltfShape7)
const transform17 = new Transform({
  position: new Vector3(18, 0, 31),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5099997520446777, 1, 0.9999991655349731)
})
fenceWoodV4.addComponentOrReplace(transform17)

const fenceWoodV5 = new Entity('fenceWoodV5')
engine.addEntity(fenceWoodV5)
fenceWoodV5.setParent(_scene)
fenceWoodV5.addComponentOrReplace(gltfShape7)
const transform18 = new Transform({
  position: new Vector3(23, 0, 31),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5099997520446777, 1, 0.9999991655349731)
})
fenceWoodV5.addComponentOrReplace(transform18)

const fenceWoodV6 = new Entity('fenceWoodV6')
engine.addEntity(fenceWoodV6)
fenceWoodV6.setParent(_scene)
fenceWoodV6.addComponentOrReplace(gltfShape7)
const transform19 = new Transform({
  position: new Vector3(28, 0, 31),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5099997520446777, 1, 0.9999991655349731)
})
fenceWoodV6.addComponentOrReplace(transform19)

const fenceWoodV7 = new Entity('fenceWoodV7')
engine.addEntity(fenceWoodV7)
fenceWoodV7.setParent(_scene)
fenceWoodV7.addComponentOrReplace(gltfShape7)
const transform20 = new Transform({
  position: new Vector3(29, 0, 31),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5099997520446777, 1, 0.9999991655349731)
})
fenceWoodV7.addComponentOrReplace(transform20)

const fenceWoodV8 = new Entity('fenceWoodV8')
engine.addEntity(fenceWoodV8)
fenceWoodV8.setParent(_scene)
fenceWoodV8.addComponentOrReplace(gltfShape7)
const transform21 = new Transform({
  position: new Vector3(29, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5099997520446777, 1, 0.9999991655349731)
})
fenceWoodV8.addComponentOrReplace(transform21)

const fenceWoodV9 = new Entity('fenceWoodV9')
engine.addEntity(fenceWoodV9)
fenceWoodV9.setParent(_scene)
fenceWoodV9.addComponentOrReplace(gltfShape7)
const transform22 = new Transform({
  position: new Vector3(24, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5099997520446777, 1, 0.9999991655349731)
})
fenceWoodV9.addComponentOrReplace(transform22)

const fenceWoodV10 = new Entity('fenceWoodV10')
engine.addEntity(fenceWoodV10)
fenceWoodV10.setParent(_scene)
fenceWoodV10.addComponentOrReplace(gltfShape7)
const transform23 = new Transform({
  position: new Vector3(19, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5099997520446777, 1, 0.9999991655349731)
})
fenceWoodV10.addComponentOrReplace(transform23)

const fenceWoodV11 = new Entity('fenceWoodV11')
engine.addEntity(fenceWoodV11)
fenceWoodV11.setParent(_scene)
fenceWoodV11.addComponentOrReplace(gltfShape7)
const transform24 = new Transform({
  position: new Vector3(14, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5099997520446777, 1, 0.9999991655349731)
})
fenceWoodV11.addComponentOrReplace(transform24)

const fenceWoodV12 = new Entity('fenceWoodV12')
engine.addEntity(fenceWoodV12)
fenceWoodV12.setParent(_scene)
fenceWoodV12.addComponentOrReplace(gltfShape7)
const transform25 = new Transform({
  position: new Vector3(9, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5099997520446777, 1, 0.9999991655349731)
})
fenceWoodV12.addComponentOrReplace(transform25)

const fenceWoodV13 = new Entity('fenceWoodV13')
engine.addEntity(fenceWoodV13)
fenceWoodV13.setParent(_scene)
fenceWoodV13.addComponentOrReplace(gltfShape7)
const transform26 = new Transform({
  position: new Vector3(0.5, 0, 3),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(2.5099992752075195, 1, 0.9999998807907104)
})
fenceWoodV13.addComponentOrReplace(transform26)

const fenceWoodV14 = new Entity('fenceWoodV14')
engine.addEntity(fenceWoodV14)
fenceWoodV14.setParent(_scene)
fenceWoodV14.addComponentOrReplace(gltfShape7)
const transform27 = new Transform({
  position: new Vector3(2.5, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5099997520446777, 1, 0.9999991655349731)
})
fenceWoodV14.addComponentOrReplace(transform27)

const fenceWoodV15 = new Entity('fenceWoodV15')
engine.addEntity(fenceWoodV15)
fenceWoodV15.setParent(_scene)
fenceWoodV15.addComponentOrReplace(gltfShape7)
const transform28 = new Transform({
  position: new Vector3(5, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5099997520446777, 1, 0.9999991655349731)
})
fenceWoodV15.addComponentOrReplace(transform28)

const fenceWoodV16 = new Entity('fenceWoodV16')
engine.addEntity(fenceWoodV16)
fenceWoodV16.setParent(_scene)
fenceWoodV16.addComponentOrReplace(gltfShape7)
const transform29 = new Transform({
  position: new Vector3(0.5, 0, 7.5),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(2.5099997520446777, 1, 1.0000001192092896)
})
fenceWoodV16.addComponentOrReplace(transform29)

const fenceWoodV17 = new Entity('fenceWoodV17')
engine.addEntity(fenceWoodV17)
fenceWoodV17.setParent(_scene)
fenceWoodV17.addComponentOrReplace(gltfShape7)
const transform30 = new Transform({
  position: new Vector3(0.5, 0, 12.5),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(2.5099992752075195, 1, 1.0000003576278687)
})
fenceWoodV17.addComponentOrReplace(transform30)

const fenceWoodV18 = new Entity('fenceWoodV18')
engine.addEntity(fenceWoodV18)
fenceWoodV18.setParent(_scene)
fenceWoodV18.addComponentOrReplace(gltfShape7)
const transform31 = new Transform({
  position: new Vector3(0.5, 0, 17.5),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(2.510000228881836, 1, 1.0000008344650269)
})
fenceWoodV18.addComponentOrReplace(transform31)

const fenceWoodV19 = new Entity('fenceWoodV19')
engine.addEntity(fenceWoodV19)
fenceWoodV19.setParent(_scene)
fenceWoodV19.addComponentOrReplace(gltfShape7)
const transform32 = new Transform({
  position: new Vector3(0.5, 0, 22.5),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(2.510000228881836, 1, 1.0000015497207642)
})
fenceWoodV19.addComponentOrReplace(transform32)

const fenceWoodV20 = new Entity('fenceWoodV20')
engine.addEntity(fenceWoodV20)
fenceWoodV20.setParent(_scene)
fenceWoodV20.addComponentOrReplace(gltfShape7)
const transform33 = new Transform({
  position: new Vector3(0.5, 0, 28.5),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(2.510000228881836, 1, 1.0000020265579224)
})
fenceWoodV20.addComponentOrReplace(transform33)

const fenceWoodV21 = new Entity('fenceWoodV21')
engine.addEntity(fenceWoodV21)
fenceWoodV21.setParent(_scene)
fenceWoodV21.addComponentOrReplace(gltfShape7)
const transform34 = new Transform({
  position: new Vector3(0.5, 0, 26.5),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(2.5100011825561523, 1, 1.0000020265579224)
})
fenceWoodV21.addComponentOrReplace(transform34)

const fenceWoodV22 = new Entity('fenceWoodV22')
engine.addEntity(fenceWoodV22)
fenceWoodV22.setParent(_scene)
fenceWoodV22.addComponentOrReplace(gltfShape7)
const transform35 = new Transform({
  position: new Vector3(31.5, 0, 3),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(2.5099997520446777, 1, 1.0000005960464478)
})
fenceWoodV22.addComponentOrReplace(transform35)

const fenceWoodVEntry = new Entity('fenceWoodVEntry')
engine.addEntity(fenceWoodVEntry)
fenceWoodVEntry.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(31.5, 0, 7),
  rotation: new Quaternion(
    -1.9455749640203465e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
fenceWoodVEntry.addComponentOrReplace(transform36)
const gltfShape8 = new GLTFShape(
  'c58efc8e-b7de-4bd6-a639-1711cf569e2d/Fence Wood V4 Entry.glb'
)
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
fenceWoodVEntry.addComponentOrReplace(gltfShape8)

const fenceWoodV23 = new Entity('fenceWoodV23')
engine.addEntity(fenceWoodV23)
fenceWoodV23.setParent(_scene)
fenceWoodV23.addComponentOrReplace(gltfShape7)
const transform37 = new Transform({
  position: new Vector3(31.5, 0, 11),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(2.5099997520446777, 1, 1.000001072883606)
})
fenceWoodV23.addComponentOrReplace(transform37)

const fenceWoodV24 = new Entity('fenceWoodV24')
engine.addEntity(fenceWoodV24)
fenceWoodV24.setParent(_scene)
fenceWoodV24.addComponentOrReplace(gltfShape7)
const transform38 = new Transform({
  position: new Vector3(31.5, 0, 16),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(2.510000228881836, 1, 1.000001311302185)
})
fenceWoodV24.addComponentOrReplace(transform38)

const fenceWoodV25 = new Entity('fenceWoodV25')
engine.addEntity(fenceWoodV25)
fenceWoodV25.setParent(_scene)
fenceWoodV25.addComponentOrReplace(gltfShape7)
const transform39 = new Transform({
  position: new Vector3(31.5, 0, 21),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(2.510000705718994, 1, 1.0000015497207642)
})
fenceWoodV25.addComponentOrReplace(transform39)

const fenceWoodV26 = new Entity('fenceWoodV26')
engine.addEntity(fenceWoodV26)
fenceWoodV26.setParent(_scene)
fenceWoodV26.addComponentOrReplace(gltfShape7)
const transform40 = new Transform({
  position: new Vector3(31.5, 0, 26),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(2.5100011825561523, 1, 1.0000017881393433)
})
fenceWoodV26.addComponentOrReplace(transform40)

const fenceWoodV27 = new Entity('fenceWoodV27')
engine.addEntity(fenceWoodV27)
fenceWoodV27.setParent(_scene)
fenceWoodV27.addComponentOrReplace(gltfShape7)
const transform41 = new Transform({
  position: new Vector3(31.5, 0, 28.5),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(2.5100016593933105, 1, 1.0000020265579224)
})
fenceWoodV27.addComponentOrReplace(transform41)

const shovel = new Entity('shovel')
engine.addEntity(shovel)
shovel.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(29.5, 0, 23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
shovel.addComponentOrReplace(transform42)
const gltfShape9 = new GLTFShape(
  '58ce18c8-873c-4b3a-af71-f07e18ea7d71/Shovel.glb'
)
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
shovel.addComponentOrReplace(gltfShape9)

const beachgrassFern = new Entity('beachgrassFern')
engine.addEntity(beachgrassFern)
beachgrassFern.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(4.5, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
beachgrassFern.addComponentOrReplace(transform43)
const gltfShape10 = new GLTFShape(
  '7ea57b9c-29ee-47a5-9ad2-c109101b72ac/JunglePlant_06/JunglePlant_06.glb'
)
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
beachgrassFern.addComponentOrReplace(gltfShape10)

const jungleShrub = new Entity('jungleShrub')
engine.addEntity(jungleShrub)
jungleShrub.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(8.5, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
jungleShrub.addComponentOrReplace(transform44)
const gltfShape11 = new GLTFShape(
  'd8b2cdd4-043a-4982-91c2-202d85677533/JunglePlant_02/JunglePlant_02.glb'
)
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
jungleShrub.addComponentOrReplace(gltfShape11)

const mountainRagweed = new Entity('mountainRagweed')
engine.addEntity(mountainRagweed)
mountainRagweed.setParent(_scene)
const transform45 = new Transform({
  position: new Vector3(6, 0, 28.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mountainRagweed.addComponentOrReplace(transform45)
const gltfShape12 = new GLTFShape(
  '105b342a-820e-43bd-99bb-d4eea6ad39ba/Bush_Fantasy_01/Bush_Fantasy_01.glb'
)
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
mountainRagweed.addComponentOrReplace(gltfShape12)

const phantomFieldcress = new Entity('phantomFieldcress')
engine.addEntity(phantomFieldcress)
phantomFieldcress.setParent(_scene)
const transform46 = new Transform({
  position: new Vector3(29.5, 0, 22.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
phantomFieldcress.addComponentOrReplace(transform46)
const gltfShape13 = new GLTFShape(
  'e6e79b63-5b5e-4612-af8e-0ba1058c60c5/Bush_Fantasy_03/Bush_Fantasy_03.glb'
)
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
phantomFieldcress.addComponentOrReplace(gltfShape13)

const tallPalmTree = new Entity('tallPalmTree')
engine.addEntity(tallPalmTree)
tallPalmTree.setParent(_scene)
const transform47 = new Transform({
  position: new Vector3(7.5, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tallPalmTree.addComponentOrReplace(transform47)
const gltfShape14 = new GLTFShape(
  'a29c8a0e-1f2c-4d85-a099-36301da3fe36/PalmTree_02/PalmTree_02.glb'
)
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
tallPalmTree.addComponentOrReplace(gltfShape14)

const petHouse = new Entity('petHouse')
engine.addEntity(petHouse)
petHouse.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(23.5, 0, 3),
  rotation: new Quaternion(
    -4.743535276488693e-15,
    -0.7071068286895752,
    8.429368847373553e-8,
    -0.7071067690849304
  ),
  scale: new Vector3(1, 1.5, 1.5)
})
petHouse.addComponentOrReplace(transform48)
const gltfShape15 = new GLTFShape(
  'd66e204f-9afc-415f-bebd-22c40312459f/PetHouse_01/PetHouse_01.glb'
)
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
petHouse.addComponentOrReplace(gltfShape15)

const bigRock = new Entity('bigRock')
engine.addEntity(bigRock)
bigRock.setParent(_scene)
const transform49 = new Transform({
  position: new Vector3(3.5, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bigRock.addComponentOrReplace(transform49)
const gltfShape16 = new GLTFShape(
  'c91329da-ee59-4595-88fd-10b2b75a4f5b/RockLarge_01/RockLarge_01.glb'
)
gltfShape16.withCollisions = true
gltfShape16.isPointerBlocker = true
gltfShape16.visible = true
bigRock.addComponentOrReplace(gltfShape16)

const birdSNestFern = new Entity('birdSNestFern')
engine.addEntity(birdSNestFern)
birdSNestFern.setParent(_scene)
const transform50 = new Transform({
  position: new Vector3(30, 0, 26.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
birdSNestFern.addComponentOrReplace(transform50)
const gltfShape17 = new GLTFShape(
  'f17f4ed8-f0a2-48f0-a461-95d426b58d54/Plant_01/Plant_01.glb'
)
gltfShape17.withCollisions = true
gltfShape17.isPointerBlocker = true
gltfShape17.visible = true
birdSNestFern.addComponentOrReplace(gltfShape17)

const shrub = new Entity('shrub')
engine.addEntity(shrub)
shrub.setParent(_scene)
const transform51 = new Transform({
  position: new Vector3(10, 0, 28.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
shrub.addComponentOrReplace(transform51)
const gltfShape18 = new GLTFShape(
  '4db158c0-a44f-4f79-a9e6-c5d6a219d48d/Bush_01/Bush_01.glb'
)
gltfShape18.withCollisions = true
gltfShape18.isPointerBlocker = true
gltfShape18.visible = true
shrub.addComponentOrReplace(gltfShape18)

const ironFenceDoor = new Entity('ironFenceDoor')
engine.addEntity(ironFenceDoor)
ironFenceDoor.setParent(_scene)
const transform52 = new Transform({
  position: new Vector3(31.5, 0, 6),
  rotation: new Quaternion(
    1.5182985958436292e-14,
    0.7071065902709961,
    -8.429368136830817e-8,
    0.7071070075035095
  ),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
ironFenceDoor.addComponentOrReplace(transform52)

const signpostStreetName = new Entity('signpostStreetName')
engine.addEntity(signpostStreetName)
signpostStreetName.setParent(_scene)
const transform53 = new Transform({
  position: new Vector3(30, 0, 1.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.5, 1)
})
signpostStreetName.addComponentOrReplace(transform53)

const blockdog = new Entity('blockdog')
engine.addEntity(blockdog)
blockdog.setParent(_scene)
const transform54 = new Transform({
  position: new Vector3(23.5, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
blockdog.addComponentOrReplace(transform54)
const gltfShape19 = new GLTFShape(
  '17d3bec1-f259-470d-806a-28fb8e5aa81a/BlockDog.glb'
)
gltfShape19.withCollisions = true
gltfShape19.isPointerBlocker = true
gltfShape19.visible = true
blockdog.addComponentOrReplace(gltfShape19)

const shrub2 = new Entity('shrub2')
engine.addEntity(shrub2)
shrub2.setParent(_scene)
shrub2.addComponentOrReplace(gltfShape18)
const transform55 = new Transform({
  position: new Vector3(25, 0, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
shrub2.addComponentOrReplace(transform55)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
script1.init()
script2.init()
script3.init()
script4.init()
script5.init()
script1.spawn(
  twitterLink,
  { url: 'sasicodes', bnw: false, name: 'sasicodes' },
  createChannel(channelId, twitterLink, channelBus)
)
script2.spawn(
  githubLink,
  { url: 'sasicodes', bnw: false, name: 'sasicodes' },
  createChannel(channelId, githubLink, channelBus)
)
script3.spawn(
  imageBillboardBlack,
  {
    image:
      'https://cloudflare-ipfs.com/ipfs/QmcLVgyfHAw6RewyVFEP7HSTojfDBRTXGkhGrGaYEy68h5'
  },
  createChannel(channelId, imageBillboardBlack, channelBus)
)
script4.spawn(
  ironFenceDoor,
  {
    onClickText: 'Open/Close',
    onClick: [{ entityName: 'ironFenceDoor', actionId: 'toggle', values: {} }]
  },
  createChannel(channelId, ironFenceDoor, channelBus)
)
script5.spawn(
  signpostStreetName,
  { textTop: 'Welcome', textLower: 'Post Ad here', fontSize: 20 },
  createChannel(channelId, signpostStreetName, channelBus)
)
