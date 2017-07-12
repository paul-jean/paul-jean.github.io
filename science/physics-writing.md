---
title: Physics writing
layout: projects
---

## Hamilton's Principle

Hamilton's principle defines a unique path for a system traversing
some chosen configuration space.  The principle
states that, insofar as all forces on the system be due solely to the presence
of a single scalar potential function, the system will take that path about
which small variations leave the system's total 'expenditure' or 'effort'
unchanged.  This 'expenditure' - the so-called "action" - is defined as the 
integral of the difference of the kinetic and potential energies - or 
"Lagrangian" - along the particular path chosen through configuration space.

A system's coordinates are independent if the system is free of constraint
forces serving to couple motions along them.  Contributions to variations about
the system's optimal path along such coordinates are independent, leading to
a set of precise conditions on the variation of the Lagrangian with respect 
to each independent coordinate.  These conditions constitute a set of partial
differential equations for the Lagrangian, known as the Differential 
Equations of Euler-Lagrange.  For systems undergoing forces derived from a 
single potential 
as above, the equations of Euler-Lagrange follow directly from Hamilton's
principle.  More generally, if the system is in fact subject to constraint
forces serving to couple motions along coordinates, Hamilton's principle
(and thus the Eular-Lagrange equations) holds only insofar as such constraint
forces do no work in the course of variations about the optimal path.

## Generalized potentials and symmetries in the Lagrangian

The Euler-Lagrange equtions hold for conservative systems with velocity-
dependent potential functions, as long as such a potential gives rise to a
*generalized force* when differentiated in the fashion prescribed by the
Euler-Lagrange equations themselves.  Such a *generalized potential* exists 
for charged particles in electromagnetic fields where the magnetic force 
is in general velocity-dependent, and therefore a suitable Lagrangian 
satisfying the Euler-Lagrange equations may be found for electrodynamic 
systems.  For dissipative systems undergoing frictional forces, where again 
the potential in general depends on velocity, no such generalized potential 
exists.  In this case, the Euler-Lagrange equations take on a nonzero 'source'
term on the right-hand-side representing nonconservative forces acting on the
system.  Such a source term for frictional forces linear in particle 
velocity may be derived from *Rayleigh's dissipation function*, which is 
essentially a harmonic potential in momentum space.

In general, invariances or symmetries in the Lagrangian  
along a particular generalized coordinate provide conserved
quantities along that coordinate.  Thus, conservative systems with Lagrangian
independent of a particular generalized
*translation coordinate* will in general have *generalized momentum* along 
that coordinate as a constant of the motion.  Similarly, when the Lagrangian
is invariant along a particular generalized *rotation coordinate*, the
conjugate angular momentum is conserved.  An important conserved quantity 
arising from time-invariant Lagrangians is the *generalized energy* or 
*energy function*.  The time-variation of the energy function is in general
identical to that of the Lagrangian (up to a minus sign).  The energy function
may be identified with the system's Hamiltonian when the generalized 
coordinates are obtainable via a time-independent transformation (ie the 
system's Jacobian is time-independent) and the potential is 
velocity-independent.

## The Lorentz Transformations of Special Relativity

The Galilean transformations between inertial frames, under which Newton's 
law of motion maintains the same form - ie is *covariant* - and Maxwell's
equations do not, imply that the speed of light should change from one 
inertial frame to another.  In light of experiments such as pi-meson decay
and that of Michelson-Morley, however, light exhibits no such sensitivity
to an observer's motion, requiring a more general transformation preserving
the speed of light in all inertial frames.

The requisite generalization to the Galilean transformation is the *Lorentz
transformation*, under which Maxwell's equations are covariant, and which 
demand a modification of the form of Newton's law of motion for objects
nearing light speed, since all physical laws must presumably remain covariant
under the true relativistic transformation.  The Lorentz transformations 
maintain the length of a particular four-vector, defining *Minkowski space*,
with three spatial coordinates and a fourth imaginary time coordinate.

The vector form of the Lorentz transformations lends itself to a matrix 
formulation in Minkowski space, wherein it resembles and has the properties 
of the familiar rotation matrix in three-space.  Thus Lorentz transformations
prescribe a generalized rotation through imaginary angles (!).  Since
successive rotations correspond to a single rotation by the sum of the 
constituent angles, the Einstein addition law for parallel velocities is
by analogy immediately apparent, holding the speed of light as the maximum
attainable by successive "boosts" in the Lorentz formalism.  A paradoxical 
effect known as *Thomas precession* arises from such generalized rotations,
whereby a frame twice removed from a stationary frame by two Lorentz
transformations, and moving in a plane defined by the directions of the 
second and third frames relative to the first, perceives the precession of 
vectors stationary in the first frame about an axis orthogonal to that plane.

A relativistic generalization of Newton's law of motion may be obtained by 
supposing a four-vector generalization of force and momentum, and requiring
conservation of relativistic momentum in the absence of external forces.
Kinetic energy may then also procur a relativistic form,  
requiring that its time
rate of change be given by the rate at which work is done on a particle - 
the product of the relativistic force and velocity.  Relativistic energy 
this way gains a *rest mass* term, which is thereafter dropped to form a 
'proper'
kinetic energy.  The rest mass elevates kinetic energy to the status 
of a conserved quantity through elastic and inelastic collisions alike, as
for relativistic momentum, where changes in the total energy of the
system are attributed to changes in the system's rest mass.

## Classical Field Theory

In the transition from discrete systems with enumerable degrees of freedom to continuous
systems, the relevant local quantity governing the evolution of the system becomes the 
Lagrangian *density*.  Hamilton's principle of least action and the equations of motion
for the system now respond to variations on this density with respect to gradients 
(spatial and temporal) in the generalized coordinates.  In the simple example of a sequence
of masses connected by springs, the equation of motion for the system is sensitive to the
relative positions of the masses (ie the spatial gradient of the coordinates of the masses)
and their relative speeds (ie the gradient in time).  A continuous one-dimensional deformable
field is then obtained by letting the equilibrium distances between the masses go to zero, 
at which point the field is governed by the one-dimensional wave equation.

Generalization of Jacobi's integral (eg. the Hamiltonian under appropriate conditions) to 
four-space yields a set of divergence conditions on a Hamiltonian-like quantity involving the
Lagrangian density.  These divergence conditions may be enumerated by two indices indicating
the ordering of partial derivatives on the Lagrangian, forming a second rank four-tensor 
whose components satisfy various flux or current conservation conditions in the absence of 
sources.  By analogy with continuous mechanical systems, these tensor components are naturally
identified  with energy and momentum field and field flux densities.

## The virial theorem and Bertrand's theorem

The *virial theorem* states that the time-average kinetic energy of a system bounded in position and momentum space
is equal to the so-called "virial of Clausius".  This "virial" goes 
(up to a factor of negative one-half) as the the time average of the sum over
the product of the coordinates of the particles of
the system and the applied forces at those points, where the system is taken to include any boundaries
(ie constraint forces on the particles are included in the virial).

Together with the equipartion theorem of kinetic energy, the virial theorem
leads immediately to Boyle's Law for rarefied gases, ie that the total 
thermal energy in the gas (the product of the total number of particles in 
the system times the thermal energy unit - Boltzman's constant times the 
system temperature) is given by the product of pressure and volume.  The
virial theorem also notably implies that for inverse square law forces, 
the sum of the time average kinetic energy and one-half the time average
potential energy is zero.

Particles subject to conservative central forces execute motions lying on 
surfaces of constant energy.  Circular orbits arise when the system's energy
sits at the value of an extremum in the central potential.  Such orbits are
stable - in the sense that they remain bounded for small deviations in 
energy away from the fixed point - when this fixed point is a minimum, and 
are unstable in the case of a maximum.  Power-law attractive potentials
varying more slowly than inverse square, for example, support stable circular
orbits for all possible distances from the centre of the force field.

Circular orbits remain *closed* in the face of small perturbations in energy 
away from the fixed point for a restricted set of power-law potentials.  For
greater than first-order deviations from circularity, however, *Bertrand's 
theorem* states that orbits remain closed for only *two* particular force 
fields: the inverse-square law and Hooke's law.  For orbits to remain closed, 
the motions in both the radial and angular directions must be periodic 
and the values of these periods must have a common factor - a condition of
*degeneracy* which holds robustly for these specific governing potentials.

## Rigid body dynamics

A rigid body consists of a set of points whose pairwise distances remain
constant.  The absolute location of a point in the body is uniquely 
determined by its proximity to three (noncollinear) reference points in the
body, and such a triangulation then furnishes the location of all subsequent
points.  The absolute locations of the reference points are however themselves
subject to the rigid body constraint, which constitutes three distances 
between the three pairs, reducing the nine degrees of freedom needed to specify
three arbitrary points to six degrees of freedom.  These six degrees of 
freedom may be distributed as three parameters to specify the proximity of the
origin of the coordinate system fixed in the rigid body to the origin in
the lab frame, and the remaining three to specify the orientation of the 
body's coordinate system with respect to the lab system where their origins
are coincident.

The three *Euler angles* serve to specify completely the orientation of a body
as three successive rotations, where the axes of rotations are fixed in the
body's coordinate system.  Thus the first Euler rotation is taken about
the "z" axis, and the second about the *body's* "x" axis, which in the lab 
frame constitutes a new "x primed" axis that has been 
rotated with respect to the lab's original "x" axis by the first Euler 
rotation.  The
third Euler rotation is then taken about the body's "z" axis, again rotated 
in the lab frame from the original "z" axis by the second Euler rotation.
*Euler's theorem* states that if a point on a rigid body is fixed in the lab
frame, then the most general displacement affecting the body is a rotation 
about some axis.

A curious fact about rotations is that no rigid rotation may affect a 
complete "inversion" of the coordinate system, whereby the direction of 
increase in each of the axes is reversed.  Since such an inversion 
constitutes a transformation matrix with negative ones down the diagonal, 
which has a determinant of minus one, a rotation transformation with 
a determinant of minus one signals the presence of an inversion, and hence
is an *invalid rotation*.  An equally curious fact is that a set of rotations 
about a set of specified axes in the body's coordinate system in general 
have different results when their ordering is changed, i.e. rotation operations do not commute.

## The Lagrangian and the Hamiltonian

By performing a Legendre transformation on the Lagrangian in the parameters of
the generalized velocity and the conjugate momenta, one obtains the 
Hamiltonian.  The Hamiltonian is taken to be a function separately of the 
generalized coordinates and their conjugate momenta, and upon comparing it's
purely general differential with that of the explicit form obtained from the
Legendre transformation, one obtains the so-called *canonical equations of 
Hamilton* ('Hamilton equations') .  The Hamilton equations constitute two
*first-order* equations for each degree of freedom, which are entirely 
equivalent to the single equation of second order for each degree of freedom
in the Lagrangian formulation, plus one additional equation relating the 
full and partial time derivatives of the Hamiltonian and Lagrangian, 
respectively.

Formally solving for the Lagrangian in the Legendre transformation which 
generates the Hamiltonian, and performing the standard variation on the 
action with this replacement, leads immediately to Hamilton's equations - 
a further illustration of the physical equivalence of Hamilton's formulation 
to that of Euler-Lagrange.  By performing a fundamentally different variation
on the action, whereby the endpoints of the path are varied in time, one
obtains the so-called *principal of least action*.  The principal of least
action gives us a new stationary quantity with respect to this new type of
variation: the product of the generalized velocities and their conjugate
momenta, integrated over time.

While in the Lagrangian formulation coordinate transformations modify the 
generalized coordinates - a so-called *point transformation* - in the 
Hamiltonian picture one must design a transformation in both the 
generalized coordinates and their conjugate momenta - a so-called
*phase space transformation*.  A *canonical transformation* is a 
phase space transformation for which the Legendre transformation of the 
Hamiltonian (which generates the Lagrangian) in both spaces differs only by 
the full time derivative of a 
so-called *generating function*.  Therefore, since the addition of a full
time derivative to the Lagrangian has no effect on the action, 
for a canonical transformation the action remains stationary in the 
transformed space.  In suitable circumstances, the generating function then
provides invertible transformations between phase spaces.

## The hardest possible way to solve the harmonic oscillator

If one is able to find a generator of a canonical transformation such that
the transformed Hamiltonian is identically zero, then
Hamilton's equations of motion trivially imply that that transformed
coordinates are constant in time.  Such a generator is known as *Hamilton's
principal function*, and is the solution of the so-called *Hamilton-Jacobi
equation*.  Integration of the Hamilton-Jacobi equation yields the generator
as a function of the original coordinates and an equal number of arbitrary 
constants of integration, which may be choosen to be the very constants
representing the transformed momenta at time zero.  Upon integrating the 
bridging equations of the generator, one has 
immediately the dependence of the original canonical coordinates on their
initial values and time, and thus the solution to the mechanical problem
embodied in the original Hamiltonian.

Aside from providing a rather circuitous route to the solution of the 
harmonic oscillator, the Hamilton-Jacobi technique applied to this system 
gives the peculiar result that the transformed coordinates and momenta 
measure the constant phase angle and total energy of the oscillator, 
respectively.

## Fermions are loners, Bosons like to party

In the formalism of first quantization, one identifies and enumerates the 
expansion coefficients of the multiparticle wave function with the complete
set of relevant quantum numbers.  That of second quantization, however, 
identifies an equivalent set of expansion coefficients with the *occupation
number* of the individual quantum states, together with the necessary
statistical prefactor accounting for the number of ways of sorting particles
amongst the available states.  While Bosons may accomodate innumerable
neighbors in their quantum state, and are content to leave the wave function 
alone upon being interchanged, Fermions are loners, and cantankerously 
leave nontrivial minus signs in the expansion coefficients when swapped 
between states.  The second-quantized Hamiltonian for Fermions, expressed in
terms of anticommutator-obeying particle creation and destruction operators,
thus picks up a phase factor relative to its more communal Bosonic 
cousin.

Operators in the second-quantized formalism are obtained by the simple
prescription of contracting the first-quantized operator with the *field
operators*.  The latter are nothing but linear combinations of particle creation
and destruction operators, with full wave functions now serving as their
lower-dimensional expansion coefficients.

## Properties of the single-particle propagator

Defined as the ground-state expectation value of the field operators, the 
single-particle propagator provides an array of physical information about
single and many-particle systems.  For an arbitrary single-particle density
operator (such as the number and spin densities), one may trace 
over the product of the single-particle propagator and the operator to obtain
the corresponding ground-state expectation value.  In particular, the *ground-
state energy* is available entirely in terms of the single-particle propgator
in this manner.  In the so-called *Lehmann representation*, the 
many-body propagator in frequency space exhibits simple poles precisely at 
the excitation frequencies of interacting plane-waves in translationally-
invariant systems (towards large system volumes, quasi-continuous energy 
spectra imply that this succession of poles go to a branch cut).  For 
sufficiently long-lived excited states in interacting many-body systems, which 
nevertheless decay quickly enough, perturbing the poles of the propagator off
of the real axis yields not only the energies, but the *lifetime* of these 
excited states.  Such excitations correspond to the addition of a single 
particle (or hole) to the (weakly) interacting ground-state of the system.

