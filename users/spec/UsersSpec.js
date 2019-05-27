var users = require ('../users');

describe("User Managment Module", function(){
describe("Checks for data format", function(){ 
   it("Considers empty as invalid", function(){
    expect(users.check()).toBe(false);
    expect(users.check("")).toBe(false);
   });
   it("rejects invalid data types", function(){
       expect(users.check([])).toBe(false);
       expect(users.check(400)).toBe(false);
   });
});
describe("Register User", function(){
   const auser = users.register("");
   it("returns a new user", function(){
      expect(auser).toBeTruthy();
      expect(auser.id).toBeTruthy();
   });
   it("just returns existing users", function(){
       const retuser = users.register(auser.id);
       expect (retuser.id === auser.id);
   });
   it("creates new id if provided id not found", function(){
        const swappeduser = users.register("forcedid");
        expect(swappeduser.id).not.toBe("forcedid");
   });
   //TODO functional testing?
});
describe("Find User", function(){
  it("returns undefined if no match", function(){
     const auser = users.find("nouserid");
     expect(auser).toBeFalsy();
  });
  const testuser = users.register();
  it("returns the matching user", function(){
     const found = users.find(testuser.id);
     expect(found.id).toBe(testuser.id);
  });
});

});