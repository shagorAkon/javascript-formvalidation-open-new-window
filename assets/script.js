
		function dyn_window() 
		{
			var title = "My Title";
			var name = document.f.txtName.value;
			var address = document.f.txtAddress.value;
			var courses = document.f.txtCourses.value;
			var sex = document.f.rdoSex.value;;
			var subjects = "";

			for(j = 0; j<document.f.chkSubject.length; j++)
			{
				if(document.f.chkSubject[j].checked)
				{
					subjects = document.f.chkSubject[j].value;
				}
			}

			var a=open('','','width=450,height=400')

			with(a.document)
			{
				write("<html>");
				write("<head><title>"+title+"</title></head>");
				write("<body>");
				write("Name:"+name+"<br>");
				write("Address:"+address+"<br>");
				write("Courses:"+courses+"<br>");
				write("Sex:"+sex+"<br>");
				write("Subject:"+subjects+"<br>");
				write("<input type='button' value='Close' onclick='self.close();'>");
				write("<input type='button' value='Print' onclick='self.print();'>");
				write("</body>");
				write("</html>");
			}

		}
	