# Installing GENis

1.- The folder containing the application must be copied to the Server where GENis will run; the default path is **/usr/share/genis**

Note: the application is provided by the development team and its version may vary; at the time this document was written the current version is 3.3.1

2.- Execution permissions must be granted to the **genis** file located at **/usr/share/genis/bin**; this is done with the following command:

```bash
sudo chmod +x genis
```

![](images/sec04/p043_f01.png)

3.- The application's configuration file located at **/usr/share/genis/conf/** must be checked; this file contains the information for connecting to OpenLDAP, PostgreSQL and MongoDB. The lines to pay attention to are indicated below:

- **Line 37**: Password to connect to the OpenLDAP instance

![](images/sec04/p043_f02.png)

- **Lines 53 and 70**: Password to connect to the PostgreSQL instance

![](images/sec04/p043_f03.png)

- **Lines 153 and 154**: Information about the province and laboratory to which the instance belongs

![](images/sec04/p044_f01.png)

4.- With the configurations made in the previous steps, the application is ready to run; to do this, go to the path **/usr/share/genis** and execute the following commands:

Foreground execution:

```bash
sudo ./bin/genis -v \
  -DapplyEvolutions.default=true \
  -DapplyDownEvolutions.default=true \
  -DapplyEvolutions.logDb=true \
  -DapplyDownEvolutions.logDb=true \
  -Dhttp.port=9000 \
  -Dhttps.port=9443 \
  -Dconfig.file=/usr/share/genis/conf/application.conf
```

![](images/sec04/p044_f02.png)

Background execution:

```bash
sudo ./bin/genis -v \
  -DapplyEvolutions.default=true \
  -DapplyDownEvolutions.default=true \
  -DapplyEvolutions.logDb=true \
  -DapplyDownEvolutions.logDb=true \
  -Dhttp.port=9000 \
  -Dhttps.port=9443 \
  -Dconfig.file=/usr/share/genis/conf/application.conf &
```

![](images/sec04/p044_f03.png)

5.- In both cases the application will start correctly and can be accessed via the IP address assigned to the machine, on port 9000
