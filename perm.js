const comp = {"compID":22,"comp_name":"HPSC Sunday Morning Solos","comp_location":"StAC","comp_start_time":"2022-10-30T10:56:16.000Z","ent_open_time":"2022-10-10T18:36:16.000Z","ent_close_time":"2022-10-30T10:56:16.000Z","comp_rooms":"[{\"room_name\":\"1\",\"room_judge\":{\"user_name\":\"Allan McKenzie\"},\"room_steward\":{\"user_name\":\"Renee Brook\"}},{\"room_name\":\"2\",\"room_judge\":{\"user_name\":\"Tom Glover\"},\"room_steward\":{\"user_name\":\"Jodie Paterson\"}},{\"room_name\":\"3\",\"room_judge\":{\"user_name\":\"Evan Williams\"},\"room_steward\":{\"user_name\":\"Courtney Williamson\"}},{\"room_name\":\"4\",\"room_judge\":{\"user_name\":\"Peter McLean\"},\"room_steward\":{\"user_name\":\"Stella Diamond\"}}]","comp_events":"[{\"event\":1,\"grade\":4},{\"event\":2,\"grade\":4},{\"event\":4,\"grade\":4},{\"event\":1,\"grade\":3},{\"event\":2,\"grade\":3},{\"event\":4,\"grade\":3},{\"event\":1,\"grade\":2},{\"event\":2,\"grade\":2},{\"event\":3,\"grade\":6},{\"event\":5,\"grade\":5}]","comp_schedule":"0"}
const entries = [
    {"entryID":286,"userID":100,"compID":22,"gradeID":4,"eventID":1,"placing":0,"user_name":"Alice Glover ","email":"al@a.a","user":"AliceGlover","user_pass":"2bd806c97f0e00af1a1fc3328fa763a9269723c8db8fac4f93af71db186d6e90","user_type":0,"user_approve":1,"parent":0},
    {"entryID":287,"userID":100,"compID":22,"gradeID":5,"eventID":5,"placing":0,"user_name":"Alice Glover ","email":"al@a.a","user":"AliceGlover","user_pass":"2bd806c97f0e00af1a1fc3328fa763a9269723c8db8fac4f93af71db186d6e90","user_type":0,"user_approve":1,"parent":0},
    {"entryID":288,"userID":101,"compID":22,"gradeID":4,"eventID":1,"placing":0,"user_name":"Anton Zhang","email":"Anton@a.z","user":"AntonZhang","user_pass":"1f29f2d29f02f2608eb72d45625ba3a851eda1ee2be1bda22427a584b787c722","user_type":0,"user_approve":1,"parent":0},
    {"entryID":289,"userID":101,"compID":22,"gradeID":4,"eventID":2,"placing":0,"user_name":"Anton Zhang","email":"Anton@a.z","user":"AntonZhang","user_pass":"1f29f2d29f02f2608eb72d45625ba3a851eda1ee2be1bda22427a584b787c722","user_type":0,"user_approve":1,"parent":0},
    {"entryID":290,"userID":101,"compID":22,"gradeID":3,"eventID":1,"placing":0,"user_name":"Anton Zhang","email":"Anton@a.z","user":"AntonZhang","user_pass":"1f29f2d29f02f2608eb72d45625ba3a851eda1ee2be1bda22427a584b787c722","user_type":0,"user_approve":1,"parent":0},
    {"entryID":291,"userID":101,"compID":22,"gradeID":3,"eventID":2,"placing":0,"user_name":"Anton Zhang","email":"Anton@a.z","user":"AntonZhang","user_pass":"1f29f2d29f02f2608eb72d45625ba3a851eda1ee2be1bda22427a584b787c722","user_type":0,"user_approve":1,"parent":0},
    {"entryID":292,"userID":102,"compID":22,"gradeID":4,"eventID":1,"placing":0,"user_name":"Lachlan Sneddon","email":"Lachlan@l.s","user":"LachlanSneddon","user_pass":"11becb396444ef85a1a5023d3b6393acb519d6576484e76cf13ea5ee3da07d64","user_type":0,"user_approve":1,"parent":0},
    {"entryID":293,"userID":102,"compID":22,"gradeID":4,"eventID":2,"placing":0,"user_name":"Lachlan Sneddon","email":"Lachlan@l.s","user":"LachlanSneddon","user_pass":"11becb396444ef85a1a5023d3b6393acb519d6576484e76cf13ea5ee3da07d64","user_type":0,"user_approve":1,"parent":0},
    {"entryID":294,"userID":103,"compID":22,"gradeID":4,"eventID":1,"placing":0,"user_name":"Emily Carswell","email":"Emily@e.c","user":"EmilyCarswell","user_pass":"e8e9689deac5bac977b64e85c1105bd1419608f1223bdafb8e5fbdf6cf939879","user_type":0,"user_approve":1,"parent":0},
    {"entryID":295,"userID":103,"compID":22,"gradeID":4,"eventID":2,"placing":0,"user_name":"Emily Carswell","email":"Emily@e.c","user":"EmilyCarswell","user_pass":"e8e9689deac5bac977b64e85c1105bd1419608f1223bdafb8e5fbdf6cf939879","user_type":0,"user_approve":1,"parent":0},
    {"entryID":296,"userID":103,"compID":22,"gradeID":3,"eventID":1,"placing":0,"user_name":"Emily Carswell","email":"Emily@e.c","user":"EmilyCarswell","user_pass":"e8e9689deac5bac977b64e85c1105bd1419608f1223bdafb8e5fbdf6cf939879","user_type":0,"user_approve":1,"parent":0},
    {"entryID":297,"userID":103,"compID":22,"gradeID":3,"eventID":2,"placing":0,"user_name":"Emily Carswell","email":"Emily@e.c","user":"EmilyCarswell","user_pass":"e8e9689deac5bac977b64e85c1105bd1419608f1223bdafb8e5fbdf6cf939879","user_type":0,"user_approve":1,"parent":0},
    {"entryID":298,"userID":104,"compID":22,"gradeID":4,"eventID":1,"placing":0,"user_name":"William Nicholls","email":"William@w.n","user":"WilliamNicholls","user_pass":"d0784c6b1785dcd474688d46b1fe99792ff66f6b56bebf26dda0c08516bac22e","user_type":0,"user_approve":1,"parent":0},
    {"entryID":299,"userID":104,"compID":22,"gradeID":4,"eventID":2,"placing":0,"user_name":"William Nicholls","email":"William@w.n","user":"WilliamNicholls","user_pass":"d0784c6b1785dcd474688d46b1fe99792ff66f6b56bebf26dda0c08516bac22e","user_type":0,"user_approve":1,"parent":0},
    {"entryID":300,"userID":104,"compID":22,"gradeID":3,"eventID":1,"placing":0,"user_name":"William Nicholls","email":"William@w.n","user":"WilliamNicholls","user_pass":"d0784c6b1785dcd474688d46b1fe99792ff66f6b56bebf26dda0c08516bac22e","user_type":0,"user_approve":1,"parent":0},
    {"entryID":301,"userID":104,"compID":22,"gradeID":3,"eventID":2,"placing":0,"user_name":"William Nicholls","email":"William@w.n","user":"WilliamNicholls","user_pass":"d0784c6b1785dcd474688d46b1fe99792ff66f6b56bebf26dda0c08516bac22e","user_type":0,"user_approve":1,"parent":0},
    {"entryID":302,"userID":105,"compID":22,"gradeID":4,"eventID":1,"placing":0,"user_name":"Jed Thompson","email":"Jed@j.t","user":"JedThompson","user_pass":"53accc333dc04657e052bb978473ba20ec1162b8ba1b96b21fc7edc30fa3c3b3","user_type":0,"user_approve":1,"parent":0},
    {"entryID":303,"userID":105,"compID":22,"gradeID":4,"eventID":2,"placing":0,"user_name":"Jed Thompson","email":"Jed@j.t","user":"JedThompson","user_pass":"53accc333dc04657e052bb978473ba20ec1162b8ba1b96b21fc7edc30fa3c3b3","user_type":0,"user_approve":1,"parent":0},
    {"entryID":304,"userID":105,"compID":22,"gradeID":3,"eventID":1,"placing":0,"user_name":"Jed Thompson","email":"Jed@j.t","user":"JedThompson","user_pass":"53accc333dc04657e052bb978473ba20ec1162b8ba1b96b21fc7edc30fa3c3b3","user_type":0,"user_approve":1,"parent":0},
    {"entryID":305,"userID":105,"compID":22,"gradeID":3,"eventID":2,"placing":0,"user_name":"Jed Thompson","email":"Jed@j.t","user":"JedThompson","user_pass":"53accc333dc04657e052bb978473ba20ec1162b8ba1b96b21fc7edc30fa3c3b3","user_type":0,"user_approve":1,"parent":0},
    {"entryID":306,"userID":106,"compID":22,"gradeID":4,"eventID":1,"placing":0,"user_name":"Sam Foote ","email":"Sam@s.f","user":"SamFoote","user_pass":"e96e02d8e47f2a7c03be5117b3ed175c52aa30fb22028cf9c96f261563577605","user_type":0,"user_approve":1,"parent":0},
    {"entryID":307,"userID":106,"compID":22,"gradeID":4,"eventID":2,"placing":0,"user_name":"Sam Foote ","email":"Sam@s.f","user":"SamFoote","user_pass":"e96e02d8e47f2a7c03be5117b3ed175c52aa30fb22028cf9c96f261563577605","user_type":0,"user_approve":1,"parent":0},
    {"entryID":308,"userID":106,"compID":22,"gradeID":4,"eventID":4,"placing":0,"user_name":"Sam Foote ","email":"Sam@s.f","user":"SamFoote","user_pass":"e96e02d8e47f2a7c03be5117b3ed175c52aa30fb22028cf9c96f261563577605","user_type":0,"user_approve":1,"parent":0},
    {"entryID":309,"userID":106,"compID":22,"gradeID":3,"eventID":1,"placing":0,"user_name":"Sam Foote ","email":"Sam@s.f","user":"SamFoote","user_pass":"e96e02d8e47f2a7c03be5117b3ed175c52aa30fb22028cf9c96f261563577605","user_type":0,"user_approve":1,"parent":0},
    {"entryID":310,"userID":106,"compID":22,"gradeID":3,"eventID":2,"placing":0,"user_name":"Sam Foote ","email":"Sam@s.f","user":"SamFoote","user_pass":"e96e02d8e47f2a7c03be5117b3ed175c52aa30fb22028cf9c96f261563577605","user_type":0,"user_approve":1,"parent":0},
    {"entryID":311,"userID":106,"compID":22,"gradeID":3,"eventID":4,"placing":0,"user_name":"Sam Foote ","email":"Sam@s.f","user":"SamFoote","user_pass":"e96e02d8e47f2a7c03be5117b3ed175c52aa30fb22028cf9c96f261563577605","user_type":0,"user_approve":1,"parent":0},
    {"entryID":312,"userID":107,"compID":22,"gradeID":4,"eventID":1,"placing":0,"user_name":"James Anthony","email":"james@j.a","user":"JamesAnthony","user_pass":"119c9ae6f9ca741bd0a76f87fba0b22cab5413187afb2906aa2875c38e213603","user_type":0,"user_approve":1,"parent":0},
    {"entryID":313,"userID":107,"compID":22,"gradeID":4,"eventID":2,"placing":0,"user_name":"James Anthony","email":"james@j.a","user":"JamesAnthony","user_pass":"119c9ae6f9ca741bd0a76f87fba0b22cab5413187afb2906aa2875c38e213603","user_type":0,"user_approve":1,"parent":0},
    {"entryID":314,"userID":107,"compID":22,"gradeID":3,"eventID":1,"placing":0,"user_name":"James Anthony","email":"james@j.a","user":"JamesAnthony","user_pass":"119c9ae6f9ca741bd0a76f87fba0b22cab5413187afb2906aa2875c38e213603","user_type":0,"user_approve":1,"parent":0},
    {"entryID":315,"userID":107,"compID":22,"gradeID":3,"eventID":2,"placing":0,"user_name":"James Anthony","email":"james@j.a","user":"JamesAnthony","user_pass":"119c9ae6f9ca741bd0a76f87fba0b22cab5413187afb2906aa2875c38e213603","user_type":0,"user_approve":1,"parent":0},
    {"entryID":316,"userID":108,"compID":22,"gradeID":4,"eventID":1,"placing":0,"user_name":"Angelique Kinsman","email":"Angelique@a.k","user":"AngeliqueKinsman","user_pass":"004e0187bb762756b810f9cfd743ffced0151bbe79f76765137b1784cffc34d9","user_type":0,"user_approve":1,"parent":0},
    {"entryID":317,"userID":108,"compID":22,"gradeID":4,"eventID":2,"placing":0,"user_name":"Angelique Kinsman","email":"Angelique@a.k","user":"AngeliqueKinsman","user_pass":"004e0187bb762756b810f9cfd743ffced0151bbe79f76765137b1784cffc34d9","user_type":0,"user_approve":1,"parent":0},
    {"entryID":318,"userID":108,"compID":22,"gradeID":4,"eventID":4,"placing":0,"user_name":"Angelique Kinsman","email":"Angelique@a.k","user":"AngeliqueKinsman","user_pass":"004e0187bb762756b810f9cfd743ffced0151bbe79f76765137b1784cffc34d9","user_type":0,"user_approve":1,"parent":0},
    {"entryID":319,"userID":108,"compID":22,"gradeID":3,"eventID":1,"placing":0,"user_name":"Angelique Kinsman","email":"Angelique@a.k","user":"AngeliqueKinsman","user_pass":"004e0187bb762756b810f9cfd743ffced0151bbe79f76765137b1784cffc34d9","user_type":0,"user_approve":1,"parent":0},
    {"entryID":320,"userID":109,"compID":22,"gradeID":4,"eventID":1,"placing":0,"user_name":"Charlie Gregg","email":"charlie@c.g","user":"CharlieGregg","user_pass":"b9dd960c1753459a78115d3cb845a57d924b6877e805b08bd01086ccdf34433c","user_type":0,"user_approve":1,"parent":0},
    {"entryID":321,"userID":109,"compID":22,"gradeID":4,"eventID":2,"placing":0,"user_name":"Charlie Gregg","email":"charlie@c.g","user":"CharlieGregg","user_pass":"b9dd960c1753459a78115d3cb845a57d924b6877e805b08bd01086ccdf34433c","user_type":0,"user_approve":1,"parent":0},
    {"entryID":322,"userID":109,"compID":22,"gradeID":3,"eventID":1,"placing":0,"user_name":"Charlie Gregg","email":"charlie@c.g","user":"CharlieGregg","user_pass":"b9dd960c1753459a78115d3cb845a57d924b6877e805b08bd01086ccdf34433c","user_type":0,"user_approve":1,"parent":0},
    {"entryID":323,"userID":109,"compID":22,"gradeID":3,"eventID":2,"placing":0,"user_name":"Charlie Gregg","email":"charlie@c.g","user":"CharlieGregg","user_pass":"b9dd960c1753459a78115d3cb845a57d924b6877e805b08bd01086ccdf34433c","user_type":0,"user_approve":1,"parent":0},
    {"entryID":324,"userID":110,"compID":22,"gradeID":4,"eventID":1,"placing":0,"user_name":"Anthony Song","email":"anthony@a.s","user":"AnthonySong","user_pass":"502913bfdd49eab564282dff101e6d167321237eeec66eedb2a438ed80fdeaa0","user_type":0,"user_approve":1,"parent":0},
    {"entryID":325,"userID":110,"compID":22,"gradeID":4,"eventID":2,"placing":0,"user_name":"Anthony Song","email":"anthony@a.s","user":"AnthonySong","user_pass":"502913bfdd49eab564282dff101e6d167321237eeec66eedb2a438ed80fdeaa0","user_type":0,"user_approve":1,"parent":0},
    {"entryID":326,"userID":110,"compID":22,"gradeID":3,"eventID":1,"placing":0,"user_name":"Anthony Song","email":"anthony@a.s","user":"AnthonySong","user_pass":"502913bfdd49eab564282dff101e6d167321237eeec66eedb2a438ed80fdeaa0","user_type":0,"user_approve":1,"parent":0},
    {"entryID":327,"userID":110,"compID":22,"gradeID":3,"eventID":2,"placing":0,"user_name":"Anthony Song","email":"anthony@a.s","user":"AnthonySong","user_pass":"502913bfdd49eab564282dff101e6d167321237eeec66eedb2a438ed80fdeaa0","user_type":0,"user_approve":1,"parent":0},
    {"entryID":328,"userID":111,"compID":22,"gradeID":4,"eventID":1,"placing":0,"user_name":"Cameron Sharpe ","email":"cameron@c.s","user":"CameronSharpe","user_pass":"e66e9a769d159582cda9c0da24247e36340045a7c340ec59dcd63c0b61cc95cc","user_type":0,"user_approve":1,"parent":0},
    {"entryID":329,"userID":111,"compID":22,"gradeID":4,"eventID":2,"placing":0,"user_name":"Cameron Sharpe ","email":"cameron@c.s","user":"CameronSharpe","user_pass":"e66e9a769d159582cda9c0da24247e36340045a7c340ec59dcd63c0b61cc95cc","user_type":0,"user_approve":1,"parent":0},
    {"entryID":330,"userID":111,"compID":22,"gradeID":4,"eventID":4,"placing":0,"user_name":"Cameron Sharpe ","email":"cameron@c.s","user":"CameronSharpe","user_pass":"e66e9a769d159582cda9c0da24247e36340045a7c340ec59dcd63c0b61cc95cc","user_type":0,"user_approve":1,"parent":0},
    {"entryID":331,"userID":111,"compID":22,"gradeID":3,"eventID":1,"placing":0,"user_name":"Cameron Sharpe ","email":"cameron@c.s","user":"CameronSharpe","user_pass":"e66e9a769d159582cda9c0da24247e36340045a7c340ec59dcd63c0b61cc95cc","user_type":0,"user_approve":1,"parent":0},
    {"entryID":332,"userID":111,"compID":22,"gradeID":3,"eventID":2,"placing":0,"user_name":"Cameron Sharpe ","email":"cameron@c.s","user":"CameronSharpe","user_pass":"e66e9a769d159582cda9c0da24247e36340045a7c340ec59dcd63c0b61cc95cc","user_type":0,"user_approve":1,"parent":0},
    {"entryID":333,"userID":111,"compID":22,"gradeID":3,"eventID":4,"placing":0,"user_name":"Cameron Sharpe ","email":"cameron@c.s","user":"CameronSharpe","user_pass":"e66e9a769d159582cda9c0da24247e36340045a7c340ec59dcd63c0b61cc95cc","user_type":0,"user_approve":1,"parent":0},
    {"entryID":334,"userID":112,"compID":22,"gradeID":4,"eventID":1,"placing":0,"user_name":"Ryley Medland","email":"ryley@r.m","user":"RyleyMedland","user_pass":"e60c54bd430942cea124c0fca0f5870886d0720988c63466b5dc55556002d8e5","user_type":0,"user_approve":1,"parent":0},
    {"entryID":335,"userID":112,"compID":22,"gradeID":5,"eventID":5,"placing":0,"user_name":"Ryley Medland","email":"ryley@r.m","user":"RyleyMedland","user_pass":"e60c54bd430942cea124c0fca0f5870886d0720988c63466b5dc55556002d8e5","user_type":0,"user_approve":1,"parent":0},
    {"entryID":336,"userID":113,"compID":22,"gradeID":4,"eventID":1,"placing":0,"user_name":"James Stockdale","email":"james@j.s","user":"JamesStockdale","user_pass":"119c9ae6f9ca741bd0a76f87fba0b22cab5413187afb2906aa2875c38e213603","user_type":0,"user_approve":1,"parent":0},
    {"entryID":337,"userID":113,"compID":22,"gradeID":5,"eventID":5,"placing":0,"user_name":"James Stockdale","email":"james@j.s","user":"JamesStockdale","user_pass":"119c9ae6f9ca741bd0a76f87fba0b22cab5413187afb2906aa2875c38e213603","user_type":0,"user_approve":1,"parent":0},
    {"entryID":338,"userID":114,"compID":22,"gradeID":3,"eventID":1,"placing":0,"user_name":"Cooper Gallagher","email":"cooper@c.g","user":"CooperGallagher","user_pass":"7781113a99f177280ad3e89bcf631f03acb8fa8e626082dd9158eeee0bdd5674","user_type":0,"user_approve":1,"parent":0},
    {"entryID":339,"userID":114,"compID":22,"gradeID":3,"eventID":2,"placing":0,"user_name":"Cooper Gallagher","email":"cooper@c.g","user":"CooperGallagher","user_pass":"7781113a99f177280ad3e89bcf631f03acb8fa8e626082dd9158eeee0bdd5674","user_type":0,"user_approve":1,"parent":0},
    {"entryID":340,"userID":114,"compID":22,"gradeID":3,"eventID":4,"placing":0,"user_name":"Cooper Gallagher","email":"cooper@c.g","user":"CooperGallagher","user_pass":"7781113a99f177280ad3e89bcf631f03acb8fa8e626082dd9158eeee0bdd5674","user_type":0,"user_approve":1,"parent":0},
    {"entryID":341,"userID":114,"compID":22,"gradeID":2,"eventID":1,"placing":0,"user_name":"Cooper Gallagher","email":"cooper@c.g","user":"CooperGallagher","user_pass":"7781113a99f177280ad3e89bcf631f03acb8fa8e626082dd9158eeee0bdd5674","user_type":0,"user_approve":1,"parent":0},
    {"entryID":342,"userID":114,"compID":22,"gradeID":2,"eventID":2,"placing":0,"user_name":"Cooper Gallagher","email":"cooper@c.g","user":"CooperGallagher","user_pass":"7781113a99f177280ad3e89bcf631f03acb8fa8e626082dd9158eeee0bdd5674","user_type":0,"user_approve":1,"parent":0},
    {"entryID":343,"userID":115,"compID":22,"gradeID":3,"eventID":1,"placing":0,"user_name":"Emily Brook ","email":"emily@e.b","user":"EmilyBrook","user_pass":"e8e9689deac5bac977b64e85c1105bd1419608f1223bdafb8e5fbdf6cf939879","user_type":0,"user_approve":1,"parent":0},
    {"entryID":344,"userID":115,"compID":22,"gradeID":3,"eventID":2,"placing":0,"user_name":"Emily Brook ","email":"emily@e.b","user":"EmilyBrook","user_pass":"e8e9689deac5bac977b64e85c1105bd1419608f1223bdafb8e5fbdf6cf939879","user_type":0,"user_approve":1,"parent":0},
    {"entryID":345,"userID":116,"compID":22,"gradeID":3,"eventID":1,"placing":0,"user_name":"Iona Lawson","email":"iona@i.l","user":"IonaLawson","user_pass":"d345d7b19a0eb9cf6a0676241087f7e479faab5070acfd56834a04f3206588d4","user_type":0,"user_approve":1,"parent":0},
    {"entryID":346,"userID":116,"compID":22,"gradeID":3,"eventID":2,"placing":0,"user_name":"Iona Lawson","email":"iona@i.l","user":"IonaLawson","user_pass":"d345d7b19a0eb9cf6a0676241087f7e479faab5070acfd56834a04f3206588d4","user_type":0,"user_approve":1,"parent":0},
    {"entryID":347,"userID":116,"compID":22,"gradeID":3,"eventID":4,"placing":0,"user_name":"Iona Lawson","email":"iona@i.l","user":"IonaLawson","user_pass":"d345d7b19a0eb9cf6a0676241087f7e479faab5070acfd56834a04f3206588d4","user_type":0,"user_approve":1,"parent":0},
    {"entryID":348,"userID":116,"compID":22,"gradeID":2,"eventID":1,"placing":0,"user_name":"Iona Lawson","email":"iona@i.l","user":"IonaLawson","user_pass":"d345d7b19a0eb9cf6a0676241087f7e479faab5070acfd56834a04f3206588d4","user_type":0,"user_approve":1,"parent":0},
    {"entryID":349,"userID":116,"compID":22,"gradeID":2,"eventID":2,"placing":0,"user_name":"Iona Lawson","email":"iona@i.l","user":"IonaLawson","user_pass":"d345d7b19a0eb9cf6a0676241087f7e479faab5070acfd56834a04f3206588d4","user_type":0,"user_approve":1,"parent":0},
    {"entryID":350,"userID":117,"compID":22,"gradeID":3,"eventID":1,"placing":0,"user_name":"Madisyn Braithwaite","email":"madisyn@m.b","user":"MadisynBraithwaite","user_pass":"ef59bdc966f599df4d4f307adf842c66d1fda60e07528e64ca525e9f3cde9023","user_type":0,"user_approve":1,"parent":0},
    {"entryID":351,"userID":117,"compID":22,"gradeID":3,"eventID":2,"placing":0,"user_name":"Madisyn Braithwaite","email":"madisyn@m.b","user":"MadisynBraithwaite","user_pass":"ef59bdc966f599df4d4f307adf842c66d1fda60e07528e64ca525e9f3cde9023","user_type":0,"user_approve":1,"parent":0},
    {"entryID":352,"userID":117,"compID":22,"gradeID":3,"eventID":4,"placing":0,"user_name":"Madisyn Braithwaite","email":"madisyn@m.b","user":"MadisynBraithwaite","user_pass":"ef59bdc966f599df4d4f307adf842c66d1fda60e07528e64ca525e9f3cde9023","user_type":0,"user_approve":1,"parent":0},
    {"entryID":353,"userID":117,"compID":22,"gradeID":2,"eventID":1,"placing":0,"user_name":"Madisyn Braithwaite","email":"madisyn@m.b","user":"MadisynBraithwaite","user_pass":"ef59bdc966f599df4d4f307adf842c66d1fda60e07528e64ca525e9f3cde9023","user_type":0,"user_approve":1,"parent":0},
    {"entryID":354,"userID":117,"compID":22,"gradeID":2,"eventID":2,"placing":0,"user_name":"Madisyn Braithwaite","email":"madisyn@m.b","user":"MadisynBraithwaite","user_pass":"ef59bdc966f599df4d4f307adf842c66d1fda60e07528e64ca525e9f3cde9023","user_type":0,"user_approve":1,"parent":0},
    {"entryID":355,"userID":118,"compID":22,"gradeID":6,"eventID":3,"placing":0,"user_name":"Lily May","email":"Lily@l.m","user":"LilyMay","user_pass":"40903c59d19feef1d67c455499304c194ebdec82df78790c3ceaac92bd1d84be","user_type":0,"user_approve":1,"parent":0},
    {"entryID":356,"userID":119,"compID":22,"gradeID":6,"eventID":3,"placing":0,"user_name":"Fletcher McNeill","email":"fletcher@f.m","user":"FletcherMcNeill","user_pass":"fad68de0366cdcbbba040891fd694529cce0a154f4e55bdc8d334c4df2b5735c","user_type":0,"user_approve":1,"parent":0},
    {"entryID":357,"userID":120,"compID":22,"gradeID":5,"eventID":5,"placing":0,"user_name":"Matteo Ballara","email":"matteo@m.b","user":"MatteoBallara","user_pass":"fe301eaaac49b4652b8dfd9fb0e913683ac5600f59370a6261824ab608b4fad7","user_type":0,"user_approve":1,"parent":0},
    {"entryID":358,"userID":121,"compID":22,"gradeID":5,"eventID":5,"placing":0,"user_name":"George MacLean","email":"george@g.m","user":"GeorgeMacLean","user_pass":"0522a55e2d5f0993a3d66d28864b2862a7218a75ea7968b075333434404485c3","user_type":0,"user_approve":1,"parent":0},
    {"entryID":359,"userID":122,"compID":22,"gradeID":5,"eventID":5,"placing":0,"user_name":"Issac Seatter","email":"issac@i.s","user":"IssacSeatter","user_pass":"7fafa82b262fd29af18131b5407c2407be9857439b8a4df769f430fb4e929c6a","user_type":0,"user_approve":1,"parent":0},
    {"entryID":360,"userID":123,"compID":22,"gradeID":5,"eventID":5,"placing":0,"user_name":"Frank Morrison","email":"frank@f.m","user":"FrankMorrison","user_pass":"77646f5a4f3166637627abe998e7a1470fe72d8b430f067dafa86263f1f23f94","user_type":0,"user_approve":1,"parent":0},
    {"entryID":361,"userID":124,"compID":22,"gradeID":5,"eventID":5,"placing":0,"user_name":"Jacob Triplow","email":"jacob@j.t","user":"JacobTriplow","user_pass":"c35d6aaf3b3885dfc9f36cddf48a65e93a919e13165fbbcfc0f9de5636279559","user_type":0,"user_approve":1,"parent":0}]


function create_schedule(comp,entries){
    console.log('launch');
    //start of algorithm timing
    var over_start_time = process.hrtime();

    //JSON for the competition rooms
    const comp_rooms = JSON.parse(comp.comp_rooms)

    //JSON for the competition events
    const comp_events = JSON.parse(comp.comp_events)

    function find_critical_order(events,n){

        //sort events in order of time highest to lowest 
        events.sort(function(a, b){return b.time - a.time});
        
        //create rooms array of length n (# number of avaliable rooms)
        var sch_rooms = Array.apply(null, Array(n)).map(i => i=[])
        
        //returns sorted rooms with minimum time to complete
        events.map((event,i_events) => {

            //find the room which currently has the least amount of time to complete 
            sch_rooms.sort(function(a, b){return a.reduce((t,v) => {return t+v.time},0) - b.reduce((t,v) => {return t+v.time},0)});

            //add the room with the largest remaining time to complete 
            sch_rooms[0].push(event)
        })

        //sorts rooms in order of time to complete
        //so that first room is critical room and last will take the least 
        sch_rooms.sort(function(a, b){return b.reduce((t,v) => {return t+v.time},0) - a.reduce((t,v) => {return t+v.time},0)});

        //return order of rooms
        return sch_rooms
        
    }

    function sort_users(entries,rooms){

        //create array of all users that have entered
        //returns array of objects containing userID and an array for all that users play times
        const user_list = [...new Set(entries.map((v) => (v.userID)))].map((v)=> ({userID:v,play_times:[]}));

        
        function chunk(arr, chunkSize) {
            if (chunkSize <= 0) throw "Invalid chunk size";
            var R = [];
            for (var i=0,len=arr.length; i<len; i+=chunkSize)
              R.push(arr.slice(i,i+chunkSize));
            return R;
          }
        
    
        function isPossiblePlayTime(user,play_time){
            //check if user can play at the given time 
    
            if (user.play_times.length === 0) {
                //if user has no current playing times then they can play 
                return true 
            }
    
    
            return user.play_times.map((user_play_time) =>{ 
                //check if given play time is within 5 minutes of another playing time of theirs
                return (play_time <= (user_play_time - 15)|| play_time >= (user_play_time + 15))
    
                //if any values return false user cannot play at that time 
            }).every((value) => (value === true))
    
        }
    
    
        function orderEvent(entries,start_time,user_list){
            var skip
            //initiate cannot play array 
            var cannot_play = []
            
            if (entries.length > 5) {
                var entry_chunks
                entry_chunks = chunk(entries,5)
                var cannot_sub_event = []
                var skip_sub_event
                function permute(arr,delay,memo) {

                
                    //init cur set memo to empty array if null
                    //only occurs in the first time not on reoccurences 
                    var cur, memo = memo || [];
                
                    //same as for loop in the order room function
                    //just rotates the current pivot through the array 
                    for (var i = 0; i < arr.length; i++) {
                    
                        if (memo.length > skip_sub_event) {
                            i = arr.length
                        }else{
                        
                        skip_sub_event = undefined
                        //take off first element in array
                        cur = arr.splice(i, 1);
    
                        //occurs when perm is found as it will be 8 layers in 
                        if (arr.length === 0) {
    
                            //inner try except so it can throw to parent function 
                            try {
    
                                //the order is the current permutation 
                                const order = memo.concat(cur)
                                const return_event = []
    
                               
                                console.log(order.length);
                                //gives an array of all the start times in this permutations 
                                const event_lengths = order.map((event,event_index) => {
                                    return event.length
                                })
                                event_lengths.unshift(0)
                                const start_times = event_lengths.map((length,length_index) => {
                                    return event_lengths.slice(0,length_index+1).reduce((t,v) => {
                                        return t + 5*v
                                    })+delay
                                })
                                
                                console.log(start_times);


                                //check if the event has already been checked at the given start times
                                const already_been_checked = cannot_sub_event.filter((v) => {
    
                                    //returns true if already been checked 
                                    return (start_times.every((time) => {return time !== v.start_time}))
                                })
    
                                if (already_been_checked.length>0){
                                    //throw if need to skip perm 
                                    throw('skip')
                                }
                                
                                for (const [sub_event_index,sub_event] of order.entries()) {
                                    
                                    //for each event in this permutation 
                                    //gives start time of this event based on times of previous events 
                                    const start_time = event_lengths.slice(0,sub_event_index+1).reduce((t,v) => {
                                        return t + 5*v
                                    })+delay
                                
                                    //returns an array of sorted entries if possible 
                                    //if not possible returns undefined
                                    const ordered_event = orderEvent(sub_event.slice(),start_time,user_list)
    
                                    //if order of entries was found
                                    if (ordered_event) {   
                                        //add event to the room 
                                        return_event.push(ordered_event)
    
                                        //if all rooms are add throw room object out of loop 
                                        if (return_event.length === order.length) {
                                            cannot_sub_event  = []
                                            throw({return_event});                                       
                                        }                   
                                    }else{
                                        //if event wasnt ordered add to couldnt event array
                                        //along with the start time of that event 
                                        skip_sub_event = sub_event_index 
                                        cannot_sub_event.push({sub_event,start_time})
                                        throw('skip')
                                    }
                                    
                                } 
                                
                            } catch (event_data) {
                                //catchs skips and room data
                                if (event_data !== 'skip') {
                                    //if room data thrown throw it to outer catch 
                                    throw(event_data)
                                }
                                //if skipped continue with next perm 
                            }
                            
                            
                        }
                        
                        //permute the next layer down 
                        permute(arr.slice(),delay, memo.concat(cur));
    
                        //push pivot entry back in with others in opposite direction 
                        arr.splice(i, 0, cur[0]);
                    }
                    }
                }
    
                //outer try except so it can break out of permute function 
                try{
                    
                        permute(entry_chunks.reverse(),start_time)
                    
                    
                    //starts the permute function with list of entries and the event start time 
                    
    
                    //reset cannot play array if no permutations were found 
                    //the event will be in a different position next time 
                    cannot_sub_event = []
    
                }catch(err){
                    console.log(err);
                    //if event is thrown out of permute
                    //then event has been ordered succesfully 
                    //returns sorted event to the room sort function
                    return {return_event:err.return_event.flatMap((obj) => {return obj.return_event}),time:err.return_event.reduce((t,v) => {return t + v.time},0)+5}
                }


                
            }else{
            //function creating permutations of the entries in an event
            function permute(arr,start_time, memo) {

                
                //init cur and if memo is not set it should be an empty array
                //this occurs on the first permutation as memo is no initiated yet
                var cur, memo = memo || [];
                
                //for loop that loops for input array length 
                //this will loop so that the first entry will end up at every other possible position
                //inside this loop every possible way to have the first entry at arr[i] will occur due to reccurence 
                //on a reccuring step it takes the next element as the first has already been removed and repeats
                //so that the second element will end up at every position not taken by the first element 
                for (var i = 0; i < arr.length; i++) {
                   
                    //check if failed index is above or below this
                    if (memo.length > skip) {
                        //if index is above skip through perms by setting i to >= arr.length 
                        i = arr.length
                    }else{
                    
                    //if failed index above or equal to this pivot index

                    //reset skip as new perms used 
                    skip = undefined
                    //take off the first element of the array 
                    cur = arr.splice(i, 1);

                    //if it took off the last element then a permutation has been found 
                    if (arr.length === 0) {
                        
                        

                        //new permutation is here 
                        //try expect so perms can be skipped if cannot play is triggered 
                        try {
                            //order is given by the permutation 
                            const order = memo.concat(cur)
                            //checks if any user is at a time that has already been checked 
                            const already_been_checked = cannot_play.filter((v) => {

                                //returns true if a user is on the list at that time 
                                return order[v.perm_index].userID === v.userID
                            })

                            if (already_been_checked.length>0){
                                //break try catch if perm wont work
                                
                                skip = already_been_checked[0].perm_index
                                throw('skip')
                            }
                        
                            //set inital return value 
                            const return_event = []
            
            
                            //loop through each entry in the permutation 
                            for (const [entry_index,entry] of order.entries()) {  

                                //map through user list to find the corresponding user 
                                user_list.forEach((user,useri) => {

                                    if (user.userID === entry.userID) {
                                        //once user found check if they can play at the given time 
                                        const can_play = isPossiblePlayTime(user,start_time+(5*entry_index))

                                        
                                        if (can_play) {

                                            //if they can play add entry and playtime to the event 
                                            return_event.push({entry,play_time:start_time+(5*entry_index)})

                                            //if the return array is full then all entries can play in this order 
                                            if (return_event.length === order.length ) {   
                                                
                                                //reset cannot play array as new event will start 
                                                //i think it alreadys happens but just in case 
                                                cannot_play = []

                                                //if all entries have returned true break loop
                                                throw({return_event,time:((order.length*5)+5)});
                                            }

                                        }else{
                                            //if the user cant play add it to the cannot play array with the index
                                            //skip the remainder of the perm as it already cant occur 
                                            skip = entry_index
                                            cannot_play.push({userID:user.userID,perm_index:entry_index})
                                            throw('skip')
                                        }
            
                                    }
                                })
                            }
                            
                        } catch (event_data) {
                            //this will trigger either when a perm should be skipped 
                            //or when the event has been ordered succesfully 
                            if (event_data !== 'skip') {

                                //if data was found throw to outer loop to stop checking more permutations 
                                throw(event_data)
                            }
                            //otherwise continue on with the next perm in the loop 
                        }
                        
                        
                    }
                    //this is where the function reoccurs 
                    //if arr still has entries then it needs to go a layer deeper so that the next entry will become the pivot
                    //will continue until the last entry is the pivot and then work its way back up
                    permute(arr.slice(),start_time, memo.concat(cur));

                    //on the way back up add the current pivot back into the array but in the opposite direction
                    //this is how it ends up in every other position 
                    //by reversing the direction in different layers 
                    arr.splice(i, 0, cur[0]);
                    
                    }
                    
                }
            }

            //outer try except so it can break out of permute function 
            try{
                
                    permute(entries.reverse(),start_time)
                
                
                //starts the permute function with list of entries and the event start time 
                

                //reset cannot play array if no permutations were found 
                //the event will be in a different position next time 
                cannot_play = []

            }catch(err){
                //if event is thrown out of permute
                //then event has been ordered succesfully 
                //returns sorted event to the room sort function
                return err
            }
            
        }
        }
        function orderRoom(room,user_list,max_time){
            console.log(room);

            //cannot event function 
            //same as cannot play 
            //but stored with specific start time instead of index due to different lengths of events 
            var cannot_event = []
            var skip_event

            //function for finding all possible ways to arrange events within a room 
            function permute(arr,delay,memo) {

                
                //init cur set memo to empty array if null
                //only occurs in the first time not on reoccurences 
                var cur, memo = memo || [];
            
                //same as for loop in the order room function
                //just rotates the current pivot through the array 
                for (var i = 0; i < arr.length; i++) {
                
                    if (memo.length > skip_event) {
                        i = arr.length
                    }else{
                    
                    skip_event = undefined
                    //take off first element in array
                    cur = arr.splice(i, 1);

                    //occurs when perm is found as it will be 8 layers in 
                    if (arr.length === 0) {

                        //inner try except so it can throw to parent function 
                        try {

                            //the order is the current permutation 
                            const order = memo.concat(cur)
                            return_room = []

                           

                            //gives an array of all the start times in this permutations 
                            const start_times = order.map((event,event_index) => {return (order.slice(0,event_index).reduce((t,v) => {return t+v.time},0))+delay})
                            
                            //check if the event has already been checked at the given start times
                            const already_been_checked = cannot_event.filter((v) => {

                                //returns truw if already been checked 
                                return (start_times.every((time) => {return time !== v.start_time}))
                            })

                            if (already_been_checked.length>0){
                                //throw if need to skip perm 
                                throw('skip')
                            }

                            for (const [event_index,event] of order.entries()) {
                                //for each event in this permutation 
                                
                                //gives start time of this event based on times of previous events 
                                const start_time = (order.slice(0,event_index).reduce((t,v) => {return t+v.time},0))+delay
                            
                                //returns an array of sorted entries if possible 
                                //if not possible returns undefined
                                const ordered_event = orderEvent(event.event_entries.slice(),start_time,user_list)

                                //if order of entries was found
                                if (ordered_event) {   
                                    //add event to the room 
                                    return_room.push(ordered_event)

                                    //if all rooms are add throw room object out of loop 
                                    if (return_room.length === order.length) {
                                        cannot_event  = []
                                        throw {return_room,delay,finish_time:return_room.reduce((t,v) => {return t+v.time},0)-5+delay}
                                    }                   
                                }else{
                                    //if event wasnt ordered add to couldnt event array
                                    //along with the start time of that event 
                                    skip_event = event_index 
                                    cannot_event.push({event,start_time})
                                    throw('skip')
                                }
                                
                            } 
                            
                        } catch (room_data) {
                            //catchs skips and room data
                            if (room_data !== 'skip') {
                                //if room data thrown throw it to outer catch 
                                throw(room_data)
                            }
                            //if skipped continue with next perm 
                        }
                        
                        
                    }
                    
                    //permute the next layer down 
                    permute(arr.slice(),delay, memo.concat(cur));

                    //push pivot entry back in with others in opposite direction 
                    arr.splice(i, 0, cur[0]);
                }
                }
            }
            

            //gives all possible arrangements of the events in the room 
            
            var return_room = []
            
            //returns finish time of the room
            const finish_time = room.reduce((t,v) => {return t+v.time},0)
            //calculates any float time avalible for non critical rooms 
            const float_time = max_time-finish_time
            var delay = 0

            try{
                while(true){ 
                    //repeat this function until err is thrown
                    //function will repeat until schedule is found 
                    //it will just keep adding delay until it works 
                    
                    //start finding permutations
                    permute(room.reverse(),delay)

                    //reset cannot event array on a new room 
                    cannot_event = []

                    //add to delay if no possible perm is found 
                    delay+=5
                }
                
                  
            }catch(err){
                //on throw catch the room object 
                console.log(err);
                //for each event in the room 
                for (const [eventi,event] of err.return_room.entries()) {
                    //for each entry in each event 
                    event.return_event.forEach((entry) => {    

                        //go through list of users 
                        user_list.forEach((user,useri) => {

                            //when the user for the entry is found add the playtime to their user list 
                            if (user.userID === entry.entry.userID) {
                                user.play_times.push(entry.play_time)
                            }
                        })
                    })
                }
                //return room object 
                
                console.log(err);
                console.log(user_list);
                return err
                
            }         
        }
        
        //orders each room one by one starting with the critical room 
        const result = rooms.map((room,room_index) => {

            //calculates critical time 
            const max_time = rooms[0].reduce((t,v) => {return t+v.time},0)

            //orders the room 
            const ordered_room = orderRoom(room,user_list,max_time)
            return ordered_room
            
        })
        return(result)


    }

    //returns event with all entries and a time to complete if entries if greater then 1 
    const all_events = comp_events.filter((event) => {   

        //check if there are any entries for the event
        var event_entries = entries.filter((v) => {return v.gradeID === event.grade && v.eventID === event.event });
        return event_entries.length > 0    
        
        //returns list of events where there are at least 1 entry

    }).map((event) => {
        //gets all entries for the event
        var event_entries = entries.filter((v) => {return v.gradeID === event.grade && v.eventID === event.event });

        //calculate time to complete event 
        const event_time = (event_entries.length*5)+5

        //return event object 
        return({event,event_entries,time:event_time})
    })

    //find critical order
    const critical_order = find_critical_order(all_events,comp_rooms.length)
    console.log(critical_order);
    //create schdule
    const schedule = sort_users(entries,critical_order)


    //end of algorithm time
    var over_end_time = process.hrtime(over_start_time);
    console.log(over_end_time[0] * 1000 + over_end_time[1] / 1000000);
    console.log(schedule);
    return schedule
}

create_schedule(comp,entries);