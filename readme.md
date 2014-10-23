Community Homepage for Freifunk Duisburg


Using the following Setup:

* Mezzanine master branch with latest commit: 48e90515dcd3ea2b6bccb8e4e6658256c40fc796
* Django 1.7
* Python 3.3
* Twitter Bootstrap 3.2 Less files for CSS computing

To the refresh the count of online nodes and clients in the footer, you need to create a cron job, that fetches the newest nodes.json from the ffmap-server via wget and overwrites the old nodes.json in the static-folder.

