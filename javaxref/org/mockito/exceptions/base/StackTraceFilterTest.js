defineStructure(
"StackTraceFilterTest",function(factory){with(factory) { typeTable(["org.mockito.util.ExtraMatchers","cl"],["org.junit.Before","an"],["org.junit.Test","an"],["org.mockito.TestBase","cl"],["org.mockito.exceptions.base.StackTraceFilterTest","cl"],["java.lang.SuppressWarnings","an"],["org.mockito.exceptions.base.StackTraceFilter","cl"],["org.mockito.exceptions.base.HasStackTrace","it"],["org.mockito.exceptions.base.TraceBuilder","cl"],["java.lang.Object","cl"],["org.mockito.util.Assertor","it"]),methodTable([4,"setup",[],"me"],[6,"StackTraceFilter",[],"co"],[4,"testShouldFilterOutCglibGarbage",[],"me"],[8,"TraceBuilder",[],"co"],[8,"classes",["java.lang.String[]"],"me"],[8,"toTrace",[],"me"],[6,"filterStackTrace",[7],"me"],[3,"assertThat",[9,10],"me"],[0,"hasOnlyThoseClassesInStackTrace",["java.lang.String[]"],"st me"],[4,"testShouldFilterOutMockitoPackage",[],"me"]),localVariableTable(["trace","testShouldFilterOutCglibGarbage()-trace"],["trace","testShouldFilterOutMockitoPackage()-trace"])
return classDef(O("/*",nl," * Copyright (c) 2007 Mockito contributors",nl," * This program is made available under the terms of the MIT License.",nl," */"),nl,pa," org.mockito.exceptions.base;",nl,nl,ip,_,s," org.mockito.util.",T(0),".*;",nl,nl,ip," org.junit.",T(1),";",nl,ip," org.junit.",T(2),";",nl,ip," org.mockito.",T(3),";",nl,nl,C(4,[],$("@",T(5),P(L("\"unchecked\"")),nl,pu,_,c,_,I("StackTraceFilterTest"),_,ex,_,T(3),_,B(nl,w(4),nl,w(4),F(pi,_,T(6),_,I("filter"),";"),nl,w(4),nl,w(4),M(0,[],[],$("@",T(1),nl,w(4),pu,_,v,_,I("setup"),P(),_,B(nl,w(8),G(4,"fi","filter")," = ",n,_,N(1),P(),";",nl,w(4)))),nl,nl,w(4),M(2,[],[],$("@",T(2),nl,w(4),pu,_,v,_,I("testShouldFilterOutCglibGarbage"),P(),_,B(nl,w(8),V(0,$(T(7),_,I("trace")," = ",n,_,N(3),P(),".",N(4),P(nl,w(12),L("\"MockitoExampleTest\""),",",nl,w(12),L("\"List$$EnhancerByCGLIB$$2c406024\""),", ",nl,w(12),L("\"MethodInterceptorFilter\""),nl,w(8)),".",N(5),P(),";")),nl,w(8),nl,w(8),G(4,"fi","filter"),".",N(6),P(W(0)),";",nl,w(8),nl,w(8),N(7),P(W(0),", ",N(8),P(L("\"MockitoExampleTest\""))),";",nl,w(4)))),nl,w(4),nl,w(4),M(9,[],[],$("@",T(2),nl,w(4),pu,_,v,_,I("testShouldFilterOutMockitoPackage"),P(),_,B(nl,w(8),V(1,$(T(7),_,I("trace")," = ",n,_,N(3),P(),".",N(4),P(nl,w(12),L("\"org.test.MockitoSampleTest\""),",",nl,w(12),L("\"org.test.TestSupport\""),",",nl,w(12),L("\"org.mockito.Mockito\""),", ",nl,w(12),L("\"org.test.TestSupport\""),",",nl,w(12),L("\"org.mockito.Mockito\""),nl,w(8)),".",N(5),P(),";")),nl,w(12),nl,w(8),G(4,"fi","filter"),".",N(6),P(W(1)),";",nl,w(8),nl,w(8),N(7),P(W(1),", ",N(8),P(L("\"org.test.TestSupport\""),", ",L("\"org.test.MockitoSampleTest\""))),";",nl,w(4)))),nl))));}});