import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import List "mo:core/List";
import Principal "mo:core/Principal";
import Iter "mo:core/Iter";

actor {
  module ContactSubmission {
    public type T = {
      name : Text;
      email : Text;
      message : Text;
      timestamp : Int;
    };
  };

  type ContactSubmission = ContactSubmission.T;

  let submissions = List.empty<ContactSubmission>();

  func isAdmin(caller : Principal) : Bool {
    // Placeholder for future admin feature.
    // Should be implemented via access control service.
    // For now, all users are admins.
    true;
  };

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text, timestamp : Int) : async () {
    let submission : ContactSubmission = {
      name;
      email;
      message;
      timestamp;
    };
    submissions.add(submission);
  };

  public shared ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    if (not isAdmin(caller)) { Runtime.trap("Access denied: Only admin can retrieve submissions.") };
    submissions.values().toArray();
  };
};
