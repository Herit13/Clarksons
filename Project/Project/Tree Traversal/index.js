const arr = [{
	"name": "ABC",
	"parentFolderId": "1e5196f3-c3f9-34db-aaab-8efdd63dd5b0",
	"fixtureId": null,
	"mailboxId": null,
	"cChatChannelId": null,
	"archived": false,
	"systemRoomFolder": false,
	"adminUserConfigurationRoleId": null,
	"readConfigurationRoleId": null,
	"externalConfigurationRoleId": null,
	"favouritesForUsers": [3],
	"childrenCount": 0,
	"id": "e597cb3f-bc6a-43e6-9c90-26cc38fbbb32"
}, {
	"name": "FORT",
	"parentFolderId": "1e5196f3-c3f9-34db-aaab-8efdd63dd5b0",
	"fixtureId": null,
	"mailboxId": "523ed89e-987a-4f9e-a828-4d06d7149dfb",
	"cChatChannelId": "C.G1.U2D469T0VP",
	"archived": false,
	"systemRoomFolder": false,
	"adminUserConfigurationRoleId": "48349be3-cf3f-4ff9-8d45-d738b6082fd9",
	"readConfigurationRoleId": null,
	"externalConfigurationRoleId": null,
	"favouritesForUsers": [7352, 19627, 18927, 17552],
	"childrenCount": 0,
	"id": "c64ac3d7-5e88-40ed-8d6f-e7f10d21c5bc",
	"children": [{
		"name": "test@app.live",
		"parentFolderId": "1e5196f3-c3f9-34db-aaab-8efdd63dd5b0",
		"fixtureId": null,
		"mailboxId": "0e063116-b027-327f-d44d-8aed0644be0e",
		"cChatChannelId": "C.G1.7L1UVDRJ6H",
		"archived": false,
		"systemRoomFolder": false,
		"adminUserConfigurationRoleId": "48349be3-cf3f-4ff9-8d45-d738b6082fd9",
		"readConfigurationRoleId": null,
		"externalConfigurationRoleId": null,
		"favouritesForUsers": [3, 18927, 17552],
		"childrenCount": 0,
		"id": "697eae2f-40dd-445e-a0f0-a918f3a4d5c0"
	}]
}, {
	"name": "London",
	"parentFolderId": "1e5196f3-c3f9-34db-aaab-8efdd63dd5b0",
	"fixtureId": null,
	"mailboxId": "e88865b8-6aa6-f17a-9647-b565428fd1cb",
	"cChatChannelId": "C.G1.F9X2AUS1ZX",
	"archived": false,
	"systemRoomFolder": false,
	"adminUserConfigurationRoleId": "48349be3-cf3f-4ff9-8d45-d738b6082fd9",
	"readConfigurationRoleId": null,
	"externalConfigurationRoleId": null,
	"favouritesForUsers": [7352, 19627, 18927, 17552],
	"childrenCount": 4,
	"id": "ea816550-8dce-4534-a8a2-ad73229f4aca"
}, {
	"name": "RENAMING a",
	"parentFolderId": "1e5196f3-c3f9-34db-aaab-8efdd63dd5b0",
	"fixtureId": null,
	"mailboxId": null,
	"cChatChannelId": null,
	"archived": false,
	"systemRoomFolder": false,
	"adminUserConfigurationRoleId": null,
	"readConfigurationRoleId": null,
	"externalConfigurationRoleId": null,
	"favouritesForUsers": [],
	"childrenCount": 1,
	"id": "ecac3eed-6691-4e95-9e3e-30ac5b725fca"
}]



class TreeTraversal {
  constructor(tree){
    this.tree = tree;
  }
  
  flatten() {
    const result = []
    console.log(this.tree)
    this.tree.forEach((node) => {
      if (node.children) {
        node.children.forEach((child) => {
          result.push(child)
        })

        delete node.children
        result.push(node)
      } else {
      result.push(node)
      }
    })
    return result
  }

  parentElement(id) {
    const node = flatten()
    return node.filter((el) => el.id === id )[0]
  }

  insertNode(aId, bId) {
    aNode = parentElement(aId, this.tree)
    bNode = parentElement(aId, this.tree)
    aNode.children = [bNode]
    return aNode;
  }

}
