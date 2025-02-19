#!/usr/bin/perl

package Employee; {
  sub new {
    my $class = shift;
    my $self = {
      _name     => shift,
      _salary   => shift,
    };
    bless $self, $class;
    return $self;
  }
    
  sub displayEmployee {
    my( $self ) = @_;
    printf "Name: %s, Salary: \$%0.2f\n", $self->{_name},$self->{_salary};
  }
}

sub main {
  my $emp1 = new Employee("Bob", 75000);
  my $emp2 = new Employee("Joe", 50000);
  $emp1->displayEmployee();
  $emp2->displayEmployee();
  system($?>>8);
}

main();
