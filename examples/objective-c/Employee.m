#import <Foundation/Foundation.h>
#import <stdio.h>

/**
 *  Tested here: http://www.compileonline.com/compile_objective-c_online.php
 */

@interface Employee: NSObject {
  @private
    NSString* name;
    float salary;
}

-(NSString*) name;
-(float) salary;
-(void) setName: (NSString*) newName;
-(void) setSalary: (float) newSalary;
-(id) initWithName: (NSString *) newName andSalary: (float) newSalary;
-(void) displayEmployee;
@end

@implementation Employee
-(NSString*) name {
  return name;
}

-(float) salary {
  return salary;
}

-(void) setName: (NSString*) newName {
  if (newName != name) {
    [newName retain];
    [name release];
    name = newName;
  }
}

-(void) setSalary: (float) newSalary {
  salary = newSalary;
}

-(id) init {
  return [self initWithName:@"DEFAULT" andSalary:0];
}

-(id) initWithName: (NSString *) newName andSalary: (float) newSalary {
  self = [super init];
  if (self) {
    [self setName:newName];
    [self setSalary:newSalary];
  }
  return self;
}

-(void) displayEmployee {
  // Using NSLog instead of printf(), because printf() is a c function.
  //printf("Name: %s, Salary: $%.2f\n", [name UTF8String], salary);
  NSLog(@"%@", self);
}

-(NSString*) description {
   return [NSString stringWithFormat:@"%@ $%.2f", name, salary];
}
@end

int main( int argc, const char *argv[] ) {
  pool = [[NSAutoreleasePool alloc] init];
  
  Employee *emp1 = [[Employee alloc] initWithName:@"Bob" andSalary:75000];
  Employee *emp2 = [[Employee alloc] initWithName:@"Joe" andSalary:50000];

  [emp1 displayEmployee];
  [emp2 displayEmployee];

  [emp1 release];
  [emp2 release];

  [pool drain];

  return 0;
}