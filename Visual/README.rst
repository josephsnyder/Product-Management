.. title: VistA Product Management Visualization

======================================
VistA Product Management Visualization
======================================

This source tree contains VistA Product Management Visualization source code.

The source tree is organized as follows:

* `<Packages.csv>`__: A spreadsheet recording VistA packages. The same as the one
  in `OSEHRA VistA Repository`_.

* `<PackageCategories.json>`__: A spreadsheet record VistA Production Definition. 
  For each category it has a capacity, packages and distribution each package
  belongs to.

* `<pkgcsv_to_json.py>`__: A python script to convert csv file to packages.json file
  for visualization.

* `<index.php>`__: Product Management Visualization Web Page.


Coverage via JSCover_ and CDash
--------------------------------

The VistA Product Management Visualization repository now has the capability
to test the web interface using the Selenium_ tool.  Using the ``filesystem``
mode of JSCover, we can generate instrumented Javascript files and calculate
the coverage of the Selenium testing.  This ``filesystem`` mode is executed by
running the JSCover-all.jar file with the ``-fs`` argument.  Help is available
for the mode by running it with a ``-h``::


Usage: java -jar JSCover-all.jar -fs [OPTION]... SOURCE-DIRECTORY DESTINATION-DIRECTORY
Instrument JavaScript with code coverage information.

Options:
      --js-version=VERSION  use the specified JavaScript version
      --no-instrument=PATH  copy but do not instrument PATH
      --exclude=PATH        don't copy from source/PATH
      --branch              collect branch coverage data
  -h, --help                display this help and exit

An example used locally would 

::
 /path.to/java -jar ~/jscover/target/dist/JSCover-all.jar -fs --no-instrument=lib Visual/ instrumented/ 

.. _`OSEHRA VistA Repository`: https://github.com/OSEHRA/VistA.git
.. _JScover: http://tntim96.github.io/JSCover/
.. _Selenium: http://www.seleniumhq.org/

